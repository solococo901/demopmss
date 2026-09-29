"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, CalendarRange, DoorOpen, Gauge, Hotel, Layers3, LogOut, RadioTower, Tags, WalletCards } from "lucide-react";

const adminItems = [
  { href: "/admin", label: "Dashboard", icon: Gauge },
  { href: "/admin/hotels", label: "Hotels", icon: Hotel },
  { href: "/admin/availability", label: "Availability", icon: Layers3 },
  { href: "/admin/rates", label: "Rates & Inventory", icon: WalletCards },
  { href: "/admin/rate-plans", label: "Rate Plans", icon: Tags },
  { href: "/admin/channels", label: "Channels", icon: RadioTower },
];

const staffItems = [
  { href: "/staff", label: "Today", icon: Gauge },
  { href: "/staff/calendar", label: "Reservation Calendar", icon: CalendarRange },
  { href: "/staff/availability", label: "Availability", icon: Layers3 },
  { href: "/staff/rooms", label: "Room Status", icon: DoorOpen },
];

export default function Sidebar({ mode }: { mode: "admin" | "staff" }) {
  const pathname = usePathname();
  const items = mode === "admin" ? adminItems : staffItems;

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Building2 size={22}/></div>
        <div>
          <div className="brand-title">CITYHOUSE PMS</div>
          <div className="brand-sub">{mode === "admin" ? "ADMIN CONSOLE" : "HOTEL STAFF"}</div>
        </div>
      </div>
      <div className="side-label">{mode === "admin" ? "DISTRIBUTION" : "OPERATIONS"}</div>
      <nav className="side-nav">
        {items.map(({href,label,icon:Icon}) => {
          const active = pathname === href || (href !== `/${mode}` && pathname.startsWith(href));
          return <Link key={href} href={href} className={`side-link ${active ? "active" : ""}`}><Icon size={18}/><span>{label}</span></Link>
        })}
      </nav>
      <div className="side-spacer" />
      <Link href="/" className="side-link"><LogOut size={18}/><span>Switch portal</span></Link>
    </aside>
  )
}
