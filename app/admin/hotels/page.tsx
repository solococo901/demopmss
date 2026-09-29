import Topbar from "@/components/Topbar";
import { hotel, roomTypes, rooms } from "@/lib/data";

export default function Page() {
  return <>
    <Topbar title="Hotel Management" subtitle="Hotel, room types and physical rooms"/>
    <div className="content">
      <div className="hotel-hero panel">
        <div><span className="eyebrow">PROPERTY</span><h2>{hotel.name}</h2><p>{hotel.code} · {hotel.address} · {hotel.currency} · {hotel.timezone}</p></div>
        <button className="btn btn-primary">Edit Hotel</button>
      </div>

      <div className="detail-grid">
        <div className="panel">
          <div className="panel-header"><div><h3>Room Types</h3><p>Pricing range and capacity</p></div><button className="btn btn-primary">+ Add Room Type</button></div>
          <div className="card-list">
            {roomTypes.map(rt=><div className="room-type-card" key={rt.id}>
              <div><span className="room-code">{rt.code}</span><h4>{rt.name}</h4><p>{rt.totalRooms} rooms · Max {rt.adults} adults</p></div>
              <div className="price-stack"><strong>{new Intl.NumberFormat("vi-VN").format(rt.basePrice)} đ</strong><span>{new Intl.NumberFormat("vi-VN").format(rt.minPrice)} - {new Intl.NumberFormat("vi-VN").format(rt.maxPrice)}</span></div>
            </div>)}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header"><div><h3>Physical Rooms</h3><p>Operational room status</p></div></div>
          <div className="room-grid">
            {rooms.map(r=><div className="room-card" key={r.id}><strong>{r.id}</strong><span className={`room-status ${r.status.toLowerCase()}`}>{r.status}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  </>
}
