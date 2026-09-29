import Topbar from "@/components/Topbar";
import RatesInventoryGrid from "@/components/RatesInventoryGrid";
export default function Page() {
  return <><Topbar title="Rates & Inventory" subtitle="Base rates, rate plans and prices by channel"/><div className="content"><RatesInventoryGrid/></div></>
}
