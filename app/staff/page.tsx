import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import { rooms } from "@/lib/data";

export default function Page(){
  return <>
    <Topbar title="Today" subtitle="CityHouse - Abora · Staff workspace" role="Staff"/>
    <div className="content">
      <div className="stats-grid">
        <StatCard label="Available" value={rooms.filter(r=>r.status==="Available").length} hint="Ready rooms"/>
        <StatCard label="Occupied" value={rooms.filter(r=>r.status==="Occupied").length} hint="In house"/>
        <StatCard label="Cleaning" value={rooms.filter(r=>r.status==="Cleaning").length} hint="Need attention"/>
        <StatCard label="Unavailable" value={rooms.filter(r=>["Maintenance","Blocked"].includes(r.status)).length} hint="Maintenance / blocked"/>
      </div>
      <div className="panel">
        <div className="panel-header"><div><h3>Staff actions</h3><p>Daily operations for the property</p></div></div>
        <div className="quick-grid">
          <a href="/staff/calendar" className="quick-card"><strong>Reservation Calendar</strong><span>Drag booking to another room / room type</span></a>
          <a href="/staff/availability" className="quick-card"><strong>Availability</strong><span>View and adjust available rooms</span></a>
          <a href="/staff/rooms" className="quick-card"><strong>Room Status</strong><span>Available / cleaning / maintenance / blocked</span></a>
        </div>
      </div>
    </div>
  </>
}
