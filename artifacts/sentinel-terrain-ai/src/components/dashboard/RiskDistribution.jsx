import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { EmptyState } from "./DashboardStates";
import Panel from "./Panel";

function DistributionTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const entry = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <span className="tooltip-dot" style={{ backgroundColor: entry.color }} />
      <strong>{entry.name}</strong>
      <span>{entry.value} illustrative locations</span>
    </div>
  );
}

export default function RiskDistribution({ data }) {
  const total = data.reduce((sum, row) => sum + row.value, 0);
  return (
    <Panel title="Risk distribution" eyebrow="Demo categories" headingId="risk-distribution-title">
      {data.length ? (
        <div className="distribution-content">
          <div className="distribution-chart" role="img" aria-label={`Risk distribution across ${total} illustrative locations`}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" innerRadius="67%" outerRadius="92%" paddingAngle={3} stroke="none">
                  {data.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie>
                <Tooltip content={<DistributionTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="distribution-total"><strong>{total}</strong><span>locations</span></div>
          </div>
          <ul className="distribution-legend">
            {data.map((entry) => (
              <li key={entry.name}>
                <span className="distribution-label"><i style={{ backgroundColor: entry.color }} aria-hidden="true" />{entry.name}</span>
                <strong>{entry.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      ) : <EmptyState title="No risk categories" detail="Risk distribution demo data is not available." />}
    </Panel>
  );
}
