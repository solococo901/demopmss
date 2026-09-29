import { Bell, Search } from "lucide-react";

export default function Topbar({ title, subtitle, role = "Admin" }: { title: string; subtitle?: string; role?: string }) {
  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="top-actions">
        <div className="search-box"><Search size={16}/><span>Search reservations, guests, and more</span></div>
        <Bell size={18}/>
        <div className="avatar">{role === "Admin" ? "A" : "S"}</div>
      </div>
    </header>
  )
}
