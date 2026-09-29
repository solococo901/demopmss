import Topbar from "@/components/Topbar";
import { ratePlans } from "@/lib/data";

export default function Page() {
  return <>
    <Topbar title="Rate Plans" subtitle="Create base and derived pricing products"/>
    <div className="content">
      <div className="panel">
        <div className="panel-header"><div><h3>Rate Plans</h3><p>Pricing rules used by website and OTA channels</p></div><button className="btn btn-primary">+ Add Rate Plan</button></div>
        <div className="table-scroll">
          <table className="data-table">
            <thead><tr><th>Name</th><th>Code</th><th>Type</th><th>Parent</th><th>Adjustment</th><th>Min Stay</th><th>Status</th></tr></thead>
            <tbody>
              {ratePlans.map(r=><tr key={r.id}><td><strong>{r.name}</strong></td><td>{r.code}</td><td>{r.type}</td><td>{r.parent}</td><td>{r.adjustment ? `${r.adjustment}%` : "Base price"}</td><td>{r.minStay} night(s)</td><td><span className="status active">Active</span></td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
}
