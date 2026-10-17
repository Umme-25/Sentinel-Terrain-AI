export const riskCategories = [
  { name: "Low", key: "low", color: "var(--low)", hex: "#32765f" },
  { name: "Moderate", key: "moderate", color: "var(--moderate)", hex: "#8a6818" },
  { name: "High", key: "high", color: "var(--high)", hex: "#a54d37" },
  { name: "Critical", key: "critical", color: "var(--critical)", hex: "#8f3342" },
];

// These separate dashboard aggregates are intentionally retained as supplied;
// they are not counts of the six illustrative map locations.
export const riskLevels = [
  { ...riskCategories[0], value: 11 },
  { ...riskCategories[1], value: 7 },
  { ...riskCategories[2], value: 4 },
  { ...riskCategories[3], value: 2 },
];

export const summaryMetrics = [
  { label: "Total monitored locations", value: 24, tone: "blue", detail: "Illustrative coverage set" },
  { label: "High-risk locations", value: 4, tone: "high", detail: "Demo risk category" },
  { label: "Critical-risk locations", value: 2, tone: "critical", detail: "Demo risk category" },
  { label: "Active alerts", value: 3, tone: "amber", detail: "Sample alert records" },
];

export const trendData = [
  { period: "May 01–07", rainfall: 38, riskIndex: 31 },
  { period: "May 08–14", rainfall: 52, riskIndex: 36 },
  { period: "May 15–21", rainfall: 44, riskIndex: 34 },
  { period: "May 22–28", rainfall: 76, riskIndex: 49 },
  { period: "May 29–Jun 04", rainfall: 91, riskIndex: 58 },
  { period: "Jun 05–11", rainfall: 63, riskIndex: 46 },
  { period: "Jun 12–18", rainfall: 108, riskIndex: 67 },
];

export const demoSites = [
  { id: "demo-site-a", name: "Demo Site A", latitude: 27.0362, longitude: 88.2631, risk_level: "Critical" },
  { id: "demo-site-b", name: "Demo Site B", latitude: 27.0586, longitude: 88.2468, risk_level: "High" },
  { id: "demo-site-c", name: "Demo Site C", latitude: 27.0124, longitude: 88.2797, risk_level: "Moderate" },
  { id: "demo-site-d", name: "Demo Site D", latitude: 27.0791, longitude: 88.2913, risk_level: "Low" },
  { id: "demo-site-e", name: "Demo Site E", latitude: 27.0247, longitude: 88.2243, risk_level: "High" },
  { id: "demo-site-f", name: "Demo Site F", latitude: 27.0923, longitude: 88.2322, risk_level: "Critical" },
];

export function getRiskCategory(level) {
  return riskCategories.find((category) => category.name === level) ?? null;
}

export const recentAlerts = [
  { id: "alert-01", severity: "Critical", site: "Demo Site A", message: "Illustrative rainfall threshold notice", period: "Demo period · Jun 12–18" },
  { id: "alert-02", severity: "High", site: "Demo Site E", message: "Sample slope-watch notification", period: "Demo period · Jun 05–11" },
  { id: "alert-03", severity: "High", site: "Demo Site B", message: "Illustrative review reminder", period: "Demo period · May 29–Jun 04" },
];

export const latestAssessments = [
  { id: "assessment-01", site: "Demo Site F", category: "Critical", period: "Demo period · Jun 12–18" },
  { id: "assessment-02", site: "Demo Site C", category: "Moderate", period: "Demo period · Jun 05–11" },
  { id: "assessment-03", site: "Demo Site D", category: "Low", period: "Demo period · May 29–Jun 04" },
];

export const fieldReports = [
  { id: "report-01", type: "Slope observation", site: "Demo Site B", status: "Reviewed", period: "Demo period · Jun 12–18" },
  { id: "report-02", type: "Drainage check", site: "Demo Site D", status: "Pending review", period: "Demo period · Jun 05–11" },
  { id: "report-03", type: "Access update", site: "Demo Site E", status: "Received", period: "Demo period · May 29–Jun 04" },
];
