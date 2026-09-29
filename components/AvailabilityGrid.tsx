"use client";
import { useState } from "react";
import { dates, inventorySeed, roomTypes } from "@/lib/data";

export default function AvailabilityGrid({ editable = true }: { editable?: boolean }) {
  const [data, setData] = useState(inventorySeed);

  const update = (typeId: string, index: number, value: number) => {
    if (!editable) return;
    setData(prev => ({ ...prev, [typeId]: prev[typeId].map((v,i) => i === index ? Math.max(0, value) : v) }));
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div><h3>Availability Calendar</h3><p>Sellable inventory by room type</p></div>
        <div className="legend-inline"><span className="dot ok"/>Available <span className="dot low"/>Low <span className="dot sold"/>Sold out</div>
      </div>
      <div className="table-scroll">
        <table className="matrix">
          <thead><tr><th className="sticky">Room Type</th>{dates.map(d => <th key={d.key}>{d.label}</th>)}</tr></thead>
          <tbody>
            {roomTypes.map(rt => (
              <tr key={rt.id}>
                <td className="sticky"><strong>{rt.name}</strong><span>{rt.totalRooms} rooms</span></td>
                {data[rt.id].map((v,i) => (
                  <td key={i}>
                    <div className={`avail-box ${v===0?"sold":v<=2?"low":""}`}>
                      {editable ? (
                        <input value={v} type="number" min={0} max={rt.totalRooms} onChange={e => update(rt.id,i,Number(e.target.value))}/>
                      ) : <strong>{v}</strong>}
                      <span>available</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
