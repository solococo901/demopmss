import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import { channels, rooms, roomTypes } from "@/lib/data";

export default function Page() {
  const sellable = rooms.filter(r=>!["Maintenance","Blocked"].includes(r.status)).length;
  return <>
    <Topbar title="Dashboard" subtitle="CityHouse PMS · Distribution overview"/>
    <div className="content">
      <div className="stats-grid">
        <StatCard label="Hotel" value="1" hint="CityHouse - Abora"/>
        <StatCard label="Room Types" value={roomTypes.length} hint="Configured products"/>
        <StatCard label="Sellable Rooms" value={sellable} hint={`${rooms.length} physical rooms`}/>
        <StatCard label="Channels" value={channels.length} hint="Direct + OTA"/>
      </div>
      <div className="panel">
        <div className="panel-header"><div><h3>Scope</h3><p>Modules included in this demo</p></div></div>
        <div className="scope-grid">
          {["Hotel Management","Room Types","Physical Rooms","Availability","Rates & Inventory","Rate Plans","Channel Pricing","Reservation Tape Chart"].map(x=><div className="scope-card" key={x}>{x}</div>)}
        </div>
      </div>
    </div>
  </>
}
