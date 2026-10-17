import {
  Activity,
  BarChart3,
  Bell,
  FileText,
  Map,
  MapPinned,
  Settings2,
  Satellite,
} from "lucide-react";

export const navigation = [
  { path: "/", label: "Dashboard", icon: Activity },
  { path: "/map", label: "GIS Risk Map", icon: Map },
  { path: "/assessment", label: "Risk Assessment", icon: MapPinned },
  { path: "/alerts", label: "Alerts", icon: Bell },
  { path: "/reports", label: "Field Reports", icon: FileText },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/satellite", label: "Satellite Changes", icon: Satellite },
  { path: "/settings", label: "Settings/About", icon: Settings2 },
];
