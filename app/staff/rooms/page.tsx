"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import { rooms as seed, RoomStatus } from "@/lib/data";

export default function Page(){
  const [rooms,setRooms] = useState(seed);
  const change=(id:string,status:RoomStatus)=>setRooms(prev=>prev.map(r=>r.id===id?{...r,status}:r));
  return <>
    <Topbar title="Room Status" subtitle="Operational status by physical room" role="Staff"/>
    <div className="content">
      <div className="panel">
        <div className="panel-header"><div><h3>Physical Rooms</h3><p>Changing Maintenance / Blocked reduces sellable inventory in production logic</p></div></div>
        <div className="room-grid large">
          {rooms.map(r=><div className="room-card editable-room" key={r.id}><div><small>Room</small><strong>{r.id}</strong></div><select value={r.status} onChange={e=>change(r.id,e.target.value as RoomStatus)}><option>Available</option><option>Occupied</option><option>Cleaning</option><option>Maintenance</option><option>Blocked</option></select></div>)}
        </div>
      </div>
    </div>
  </>
}
