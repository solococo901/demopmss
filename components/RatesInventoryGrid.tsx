"use client";
import { useMemo, useState } from "react";
import { channels, dates, inventorySeed, ratePlans, rates, roomTypes } from "@/lib/data";

const money = (n:number) => new Intl.NumberFormat("vi-VN").format(n);

export default function RatesInventoryGrid() {
  const [selectedRoomType, setSelectedRoomType] = useState(roomTypes[0].id);
  const [selectedRatePlan, setSelectedRatePlan] = useState("bar");
  const [baseRates, setBaseRates] = useState(rates);
  const rt = roomTypes.find(r => r.id === selectedRoomType)!;
  const rp = ratePlans.find(r => r.id === selectedRatePlan)!;

  const planRates = useMemo(() => {
    return baseRates[selectedRoomType].map(v => Math.round(v * (1 + rp.adjustment/100)));
  }, [baseRates, selectedRoomType, rp.adjustment]);

  const updateRate = (index:number, value:number) => {
    setBaseRates(prev => ({
      ...prev,
      [selectedRoomType]: prev[selectedRoomType].map((v,i)=> i===index ? Math.max(rt.minPrice, Math.min(rt.maxPrice, value)) : v)
    }))
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div><h3>Rates & Inventory</h3><p>Manage base rate, rate plan and channel price</p></div>
        <div className="toolbar">
          <select value={selectedRoomType} onChange={e=>setSelectedRoomType(e.target.value)}>
            {roomTypes.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}
          </select>
          <select value={selectedRatePlan} onChange={e=>setSelectedRatePlan(e.target.value)}>
            {ratePlans.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}
          </select>
        </div>
      </div>

      <div className="range-banner">
        <strong>{rt.name}</strong>
        <span>Allowed range: {money(rt.minPrice)} đ - {money(rt.maxPrice)} đ</span>
      </div>

      <div className="table-scroll">
        <table className="matrix rates-matrix">
          <thead><tr><th className="sticky">Price / Inventory</th>{dates.map(d=><th key={d.key}>{d.short}</th>)}</tr></thead>
          <tbody>
            <tr className="inventory-row">
              <td className="sticky"><strong>Availability</strong><span>Sellable rooms</span></td>
              {inventorySeed[selectedRoomType].map((v,i)=><td key={i}><div className={`mini-number ${v===0?"sold":v<=2?"low":""}`}>{v}</div></td>)}
            </tr>
            <tr>
              <td className="sticky"><strong>Base / BAR</strong><span>Editable base price</span></td>
              {baseRates[selectedRoomType].map((v,i)=><td key={i}><input className="price-input" value={v} type="number" onChange={e=>updateRate(i,Number(e.target.value))}/></td>)}
            </tr>
            <tr>
              <td className="sticky"><strong>{rp.name}</strong><span>{rp.type}{rp.adjustment ? ` ${rp.adjustment}%` : ""}</span></td>
              {planRates.map((v,i)=><td key={i}><div className="price-readonly">{money(v)}</div></td>)}
            </tr>
            {channels.map(ch => (
              <tr key={ch.id}>
                <td className="sticky channel-label"><strong>{ch.name}</strong><span>{ch.adjustment > 0 ? "+" : ""}{ch.adjustment}% from plan</span></td>
                {planRates.map((v,i) => {
                  const final = Math.round(v * (1 + ch.adjustment/100));
                  return <td key={i}><div className="channel-price">{money(final)}</div></td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
