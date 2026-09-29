"use client";
import { useMemo, useState } from "react";
import { bookings as seedBookings, dates, rooms, roomTypes, Booking } from "@/lib/data";

const statusClass = (s:string) => s.toLowerCase().replace("-","");

export default function ReservationCalendar() {
  const [bookings, setBookings] = useState<Booking[]>(seedBookings);
  const [dragId, setDragId] = useState<string | null>(null);
  const [confirmMove, setConfirmMove] = useState<{booking: Booking; targetRoom: string} | null>(null);

  const grouped = useMemo(() => roomTypes.map(rt => ({
    ...rt,
    rooms: rooms.filter(r => r.roomTypeId === rt.id)
  })), []);

  const requestMove = (booking:Booking, targetRoom:string) => {
    if (booking.roomId === targetRoom) return;
    const target = rooms.find(r => r.id === targetRoom)!;
    const conflict = bookings.some(b =>
      b.id !== booking.id &&
      b.roomId === targetRoom &&
      Math.max(b.start, booking.start) < Math.min(b.start + b.nights, booking.start + booking.nights)
    );
    if (conflict) {
      alert(`Room ${targetRoom} already has an overlapping booking.`);
      return;
    }
    if (target.status === "Maintenance" || target.status === "Blocked") {
      alert(`Room ${targetRoom} is ${target.status}.`);
      return;
    }
    setConfirmMove({booking, targetRoom});
  };

  const confirm = () => {
    if (!confirmMove) return;
    const target = rooms.find(r => r.id === confirmMove.targetRoom)!;
    setBookings(prev => prev.map(b => b.id === confirmMove.booking.id ? {...b, roomId: target.id, roomTypeId: target.roomTypeId} : b));
    setConfirmMove(null);
  };

  return (
    <>
      <div className="panel tape-panel">
        <div className="panel-header">
          <div><h3>Reservation Calendar</h3><p>Drag & drop a reservation to another room to change room / room type</p></div>
          <div className="legend-inline">
            <span className="dot confirmed"/>Confirmed
            <span className="dot checkedin"/>Checked-in
            <span className="dot checkedout"/>Checked-out
          </div>
        </div>

        <div className="tape-scroll">
          <div className="tape" style={{minWidth: 980}}>
            <div className="tape-row tape-head">
              <div className="room-col">Room</div>
              {dates.map(d => <div className="day-col" key={d.key}><strong>{d.label}</strong><span>Sep/Oct</span></div>)}
            </div>

            {grouped.map(group => (
              <div key={group.id}>
                <div className="type-row">
                  <strong>{group.name}</strong>
                  <span>{group.totalRooms} rooms · BAR {new Intl.NumberFormat("vi-VN").format(group.basePrice)} đ</span>
                </div>
                {group.rooms.map(room => (
                  <div
                    className="tape-row room-row"
                    key={room.id}
                    onDragOver={e=>e.preventDefault()}
                    onDrop={() => {
                      const b = bookings.find(x => x.id === dragId);
                      if (b) requestMove(b, room.id);
                      setDragId(null);
                    }}
                  >
                    <div className="room-col">
                      <strong>{room.id}</strong>
                      <span className={`tiny-status ${room.status.toLowerCase()}`}>{room.status}</span>
                    </div>
                    <div className="timeline">
                      {dates.map((d,i)=><div className="grid-day" key={d.key} />)}
                      {bookings.filter(b=>b.roomId===room.id).map(b => (
                        <div
                          key={b.id}
                          draggable
                          onDragStart={()=>setDragId(b.id)}
                          className={`booking-chip ${statusClass(b.status)}`}
                          style={{
                            left:`calc(${b.start} * (100% / 7) + 4px)`,
                            width:`calc(${Math.min(b.nights, 7-b.start)} * (100% / 7) - 8px)`
                          }}
                          title={`${b.id} · ${b.guest}`}
                        >
                          <strong>{b.guest}</strong>
                          <span>{b.id}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {confirmMove && (() => {
        const fromRoom = rooms.find(r=>r.id===confirmMove.booking.roomId)!;
        const toRoom = rooms.find(r=>r.id===confirmMove.targetRoom)!;
        const fromType = roomTypes.find(r=>r.id===fromRoom.roomTypeId)!;
        const toType = roomTypes.find(r=>r.id===toRoom.roomTypeId)!;
        return (
          <div className="modal-backdrop" onClick={()=>setConfirmMove(null)}>
            <div className="modal" onClick={e=>e.stopPropagation()}>
              <div className="modal-kicker">MOVE RESERVATION</div>
              <h3>{confirmMove.booking.guest}</h3>
              <p>{confirmMove.booking.id}</p>
              <div className="move-box">
                <div><span>From</span><strong>{fromType.name} · Room {fromRoom.id}</strong></div>
                <div className="move-arrow">→</div>
                <div><span>To</span><strong>{toType.name} · Room {toRoom.id}</strong></div>
              </div>
              {fromType.id !== toType.id && <div className="notice warning">Room type will change from {fromType.name} to {toType.name}.</div>}
              <label className="field-label">Reason</label>
              <input className="modal-input" placeholder="Guest request / upgrade / operation..." />
              <div className="modal-actions">
                <button className="btn btn-secondary" onClick={()=>setConfirmMove(null)}>Cancel</button>
                <button className="btn btn-primary" onClick={confirm}>Confirm Move</button>
              </div>
            </div>
          </div>
        )
      })()}
    </>
  )
}
