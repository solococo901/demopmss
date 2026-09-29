import Topbar from "@/components/Topbar";
import ReservationCalendar from "@/components/ReservationCalendar";
export default function Page(){
  return <><Topbar title="Reservation Calendar" subtitle="Tape chart · drag & drop room assignment" role="Staff"/><div className="content wide"><ReservationCalendar/></div></>
}
