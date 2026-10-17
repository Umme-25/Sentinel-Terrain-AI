import { ArrowUpRight, MapPin, TriangleAlert, Activity, Siren } from "lucide-react";

const icons = {
  blue: MapPin,
  high: TriangleAlert,
  critical: Siren,
  amber: Activity,
};

export default function SummaryCard({ metric }) {
  const Icon = icons[metric.tone] ?? ArrowUpRight;
  return (
    <article className={`summary-card summary-card-${metric.tone}`} data-testid={`card-summary-${metric.tone}`}>
      <div className="summary-card-top">
        <span>{metric.label}</span>
        <span className="summary-card-icon" aria-hidden="true"><Icon size={17} strokeWidth={1.8} /></span>
      </div>
      <div className="summary-card-value">{metric.value}</div>
      <div className="summary-card-detail">{metric.detail}</div>
    </article>
  );
}
