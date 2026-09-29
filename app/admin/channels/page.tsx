"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import { channels as seed } from "@/lib/data";

export default function Page() {
  const [channels,setChannels] = useState(seed);
  const change = (id:string,v:number)=>setChannels(prev=>prev.map(x=>x.id===id?{...x,adjustment:v}:x));

  return <>
    <Topbar title="Channels" subtitle="Configure price rules separately for Direct and each OTA"/>
    <div className="content">
      <div className="panel">
        <div className="panel-header"><div><h3>Channel Pricing</h3><p>Adjustment against the selected rate plan</p></div><button className="btn btn-primary">+ Add Channel</button></div>
        <div className="channel-grid">
          {channels.map(ch=><div className="channel-card" key={ch.id}>
            <div><span className="eyebrow">{ch.code}</span><h3>{ch.name}</h3></div>
            <div className="adjust-row"><label>Adjustment</label><div><input type="number" value={ch.adjustment} onChange={e=>change(ch.id,Number(e.target.value))}/><span>%</span></div></div>
            <div className="channel-example">Example with BAR 1,200,000đ → <strong>{new Intl.NumberFormat("vi-VN").format(Math.round(1200000*(1+ch.adjustment/100)))}đ</strong></div>
          </div>)}
        </div>
      </div>
    </div>
  </>
}
