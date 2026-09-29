import Topbar from "@/components/Topbar";
import AvailabilityGrid from "@/components/AvailabilityGrid";
export default function Page() {
  return <><Topbar title="Availability" subtitle="Manage sellable inventory by room type and date"/><div className="content"><AvailabilityGrid/></div></>
}
