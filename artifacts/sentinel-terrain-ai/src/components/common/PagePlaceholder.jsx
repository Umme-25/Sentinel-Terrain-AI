import { useLocation } from "react-router-dom";
import { Compass } from "lucide-react";
import { navigation } from "../../constants/navigation";

export default function PagePlaceholder({ title }) {
  const location = useLocation();
  const page = navigation.find((item) => item.path === location.pathname);
  const Icon = page?.icon ?? Compass;

  return (
    <>
      <div className="page-eyebrow">Sentinel Terrain AI</div>
      <h1 className="page-title">{title}</h1>
      <p className="page-description">
        {title === "Not found"
          ? "This page is not part of the Sentinel Terrain AI demo."
          : "Phase 1 interface placeholder. Operational information is not available in this demo."}
      </p>
      <section className="page-content" aria-label={`${title} placeholder`}>
        <div className="placeholder">
          <div className="placeholder-mark" aria-hidden="true"><Icon size={21} strokeWidth={1.7} /></div>
          <h2 className="placeholder-title">{title === "Not found" ? "Page not found" : `${title} workspace`}</h2>
          <p className="placeholder-copy">
            This area is reserved for a future phase. No live data, assessments, or alerts are shown here.
          </p>
        </div>
      </section>
    </>
  );
}
