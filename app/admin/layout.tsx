import Sidebar from "@/components/Sidebar";
export default function Layout({children}:{children:React.ReactNode}) {
  return <div className="app-shell"><Sidebar mode="admin"/><main className="main-content">{children}</main></div>
}
