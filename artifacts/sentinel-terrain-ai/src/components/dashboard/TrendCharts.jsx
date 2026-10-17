import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Panel from "./Panel";
import { EmptyState } from "./DashboardStates";

function TrendTooltip({ active, payload, label, unit }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      <span>{payload[0].value} {unit}</span>
      <small>Illustrative demo series</small>
    </div>
  );
}

function ChartBlock({ title, description, data, type }) {
  const rainfall = type === "rainfall";
  return (
    <div className="trend-chart-block">
      <div className="trend-chart-heading">
        <div><h3>{title}</h3><p>{description}</p></div>
        <span className={`chart-key ${rainfall ? "chart-key-rain" : "chart-key-index"}`}><i />{rainfall ? "Rainfall" : "Risk index"}</span>
      </div>
      <div className="trend-chart" role="img" aria-label={`${title}, illustrative demo data`}>
        <ResponsiveContainer width="100%" height="100%">
          {rainfall ? (
            <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid vertical={false} stroke="#e7edf2" strokeDasharray="3 4" />
              <XAxis dataKey="period" tick={{ fill: "#738397", fontSize: 10 }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
              <YAxis unit=" mm" tick={{ fill: "#738397", fontSize: 10 }} axisLine={false} tickLine={false} width={42} />
              <Tooltip content={<TrendTooltip unit="mm" />} cursor={{ fill: "#edf3f8" }} />
              <Bar dataKey="rainfall" name="Rainfall" fill="#3f7fae" radius={[3, 3, 0, 0]} maxBarSize={28} isAnimationActive={false} />
            </BarChart>
          ) : (
            <LineChart data={data} margin={{ top: 8, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid vertical={false} stroke="#e7edf2" strokeDasharray="3 4" />
              <XAxis dataKey="period" tick={{ fill: "#738397", fontSize: 10 }} axisLine={false} tickLine={false} interval="preserveStartEnd" />
              <YAxis domain={[0, 100]} tick={{ fill: "#738397", fontSize: 10 }} axisLine={false} tickLine={false} width={32} />
              <Tooltip content={<TrendTooltip unit="index points (0–100)" />} />
              <Line dataKey="riskIndex" name="Illustrative risk index" type="monotone" stroke="#a54d37" strokeWidth={2.5} dot={{ r: 3, fill: "#a54d37", strokeWidth: 0 }} activeDot={{ r: 5 }} isAnimationActive={false} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function TrendCharts({ data }) {
  return (
    <Panel
      title="Rainfall & illustrative risk trend"
      eyebrow="Sample time series"
      headingId="trend-charts-title"
      className="trend-panel"
      action={<span className="demo-period-label">Illustrative demo dataset</span>}
    >
      {data.length ? (
        <>
          <div className="trend-grid">
            <ChartBlock title="Rainfall" description="Millimeters per demo period" data={data} type="rainfall" />
            <ChartBlock title="Risk index" description="Index points · 0–100 scale" data={data} type="risk" />
          </div>
          <p className="chart-disclaimer">Illustrative values only. This is not sensor data or a validated prediction.</p>
        </>
      ) : <EmptyState title="No trend values" detail="Illustrative rainfall and risk series are not available." />}
    </Panel>
  );
}
