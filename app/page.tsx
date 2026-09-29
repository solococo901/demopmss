import Link from "next/link";
import { Building2, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-card">
        <div className="landing-logo">CITYHOUSE PMS · DEMO V2</div>
        <h1>Hotel, Inventory & Distribution</h1>
        <p>Demo tập trung đúng scope: hotel, room type, room availability, rate plan, khoảng giá và giá riêng theo từng channel.</p>
        <div className="portal-grid">
          <Link href="/admin" className="portal-card">
            <div className="portal-icon"><ShieldCheck size={28}/></div>
            <div><span className="portal-kicker">HEAD OFFICE</span><h2>Admin Management</h2><p>Hotel, availability, rates, rate plans và channel pricing.</p></div>
            <span className="portal-arrow">→</span>
          </Link>
          <Link href="/staff" className="portal-card">
            <div className="portal-icon"><Building2 size={28}/></div>
            <div><span className="portal-kicker">BUILDING STAFF</span><h2>Hotel Staff</h2><p>Reservation tape chart, đổi phòng kéo-thả, availability và room status.</p></div>
            <span className="portal-arrow">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
