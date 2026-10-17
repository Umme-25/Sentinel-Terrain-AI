import { ShieldAlert } from "lucide-react";
import SummaryCard from "../components/dashboard/SummaryCard";
import Panel from "../components/dashboard/Panel";
import RiskDistribution from "../components/dashboard/RiskDistribution";
import TrendCharts from "../components/dashboard/TrendCharts";
import DashboardMap from "../components/dashboard/DashboardMap";
import ActivityList from "../components/dashboard/ActivityList";
import { EmptyState } from "../components/dashboard/DashboardStates";
import {
  fieldReports,
  latestAssessments,
  recentAlerts,
  riskLevels,
  summaryMetrics,
  trendData,
} from "../services/mock/dashboardData";
import "./DashboardPage.css";

export default function DashboardPage() {
  return (
    <div className="monitoring-dashboard">
      <div className="dashboard-page-heading">
        <div className="dashboard-heading-copy">
          <div className="page-eyebrow">Monitoring overview</div>
          <h1 className="page-title">Landslide Monitoring Dashboard</h1>
          <p className="page-description">A concise overview of illustrative risk categories, sample activity, and regional context.</p>
        </div>
        <div className="dashboard-demo-banner" role="note" aria-label="Demonstration data notice">
          <span className="demo-banner-icon" aria-hidden="true"><ShieldAlert size={17} /></span>
          <span><strong>DEMO DATA</strong><small>Not operational · no live monitoring</small></span>
        </div>
      </div>

      <section className="summary-grid" aria-label="Demonstration summary metrics">
        {summaryMetrics.map((metric) => <SummaryCard key={metric.label} metric={metric} />)}
      </section>

      <section className="dashboard-insights-grid" aria-label="Risk overview and regional preview">
        <RiskDistribution data={riskLevels} />
        <DashboardMap />
      </section>

      <TrendCharts data={trendData} />

      <section className="activity-grid" aria-label="Recent demonstration activity">
        <Panel title="Recent alerts" eyebrow="Sample records" headingId="recent-alerts-title" className="activity-panel">
          <ActivityList items={recentAlerts} kind="alert" href="/alerts" linkLabel="View alerts" />
        </Panel>
        <Panel title="Latest risk assessments" eyebrow="Sample records" headingId="latest-assessments-title" className="activity-panel">
          <ActivityList items={latestAssessments} kind="assessment" href="/assessment" linkLabel="View assessments" />
        </Panel>
        <Panel title="Field reports" eyebrow="Sample records" headingId="field-reports-title" className="activity-panel">
          <ActivityList items={fieldReports} kind="report" href="/reports" linkLabel="View reports" />
        </Panel>
      </section>

      {!summaryMetrics.length ? <EmptyState title="No overview metrics" detail="Summary demonstration data is not available." /> : null}
      <p className="dashboard-data-footnote">All locations, values, alerts, assessments, and reports shown here are fictional demonstration content.</p>
    </div>
  );
}
