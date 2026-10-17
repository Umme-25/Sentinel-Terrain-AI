import { Link } from "react-router-dom";
import { ArrowUpRight, CircleAlert, FileText, MapPin } from "lucide-react";
import { EmptyState } from "./DashboardStates";

const iconByKind = { alert: CircleAlert, assessment: MapPin, report: FileText };

export default function ActivityList({ items, kind, href, linkLabel }) {
  if (!items.length) return <EmptyState />;
  const Icon = iconByKind[kind];
  return (
    <>
      <ul className="activity-list">
        {items.map((item) => (
          <li className="activity-item" key={item.id} data-testid={`row-${kind}-${item.id}`}>
            <span className={`activity-mark activity-mark-${kind}`} aria-hidden="true"><Icon size={15} /></span>
            <div className="activity-copy">
              <div className="activity-mainline">
                <strong>{kind === "alert" ? item.severity : kind === "assessment" ? item.site : item.type}</strong>
                {kind === "alert" ? <span className={`risk-pill risk-${item.severity.toLowerCase()}`}>{item.severity}</span> : null}
                {kind === "assessment" ? <span className={`risk-pill risk-${item.category.toLowerCase()}`}>{item.category}</span> : null}
                {kind === "report" ? <span className={`report-status status-${item.status.toLowerCase().replaceAll(" ", "-")}`}>{item.status}</span> : null}
              </div>
              <span className="activity-subline">
                {kind === "alert" ? `${item.site} · ${item.message}` : kind === "assessment" ? item.period ? `${item.period}` : "Demo assessment" : `${item.site} · ${item.period ?? "Demo report"}`}
              </span>
              {kind === "alert" && item.period ? <span className="activity-period">{item.period}</span> : null}
              {kind === "assessment" ? <span className="activity-period">{item.site} · demo assessment</span> : null}
            </div>
          </li>
        ))}
      </ul>
      <Link className="panel-link" to={href} aria-label={linkLabel} data-testid={`link-dashboard-${kind}`}>
        {linkLabel}<ArrowUpRight size={14} aria-hidden="true" />
      </Link>
    </>
  );
}
