import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { demoSites, riskLevels } from "../../services/mock/dashboardData";
import Panel from "./Panel";
import "leaflet/dist/leaflet.css";

export default function DashboardMap() {
  return (
    <Panel
      title="Illustrative site preview"
      eyebrow="Regional context"
      headingId="dashboard-map-title"
      className="map-panel"
      action={<Link className="panel-link panel-link-heading" to="/map" data-testid="link-open-risk-map">Open map <ArrowUpRight size={14} aria-hidden="true" /></Link>}
    >
      <div className="map-wrap">
        <MapContainer
          center={[27.052, 88.26]}
          zoom={11}
          scrollWheelZoom={false}
          className="dashboard-map"
          aria-label="Illustrative demo map near the Darjeeling Himalayan area"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {demoSites.map((site) => (
            <CircleMarker
              key={site.name}
              center={[site.latitude, site.longitude]}
              radius={8}
              pathOptions={{ color: "#fff", weight: 2, fillColor: site.color, fillOpacity: 1 }}
            >
              <Popup>
                <div className="map-popup">
                  <strong>{site.name}</strong>
                  <span className={`risk-pill risk-${site.risk.toLowerCase()}`}>{site.risk} demo category</span>
                  <span>Coordinates: {site.latitude.toFixed(4)}, {site.longitude.toFixed(4)}</span>
                  <small>Illustrative demo data only; not an actual monitored location.</small>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      <div className="map-footer">
        <div className="map-legend" aria-label="Risk category legend">
          {riskLevels.map((level) => (
            <span className="map-legend-item" key={level.name}>
              <i style={{ backgroundColor: level.color }} aria-hidden="true" />
              {level.name}
            </span>
          ))}
        </div>
        <p>All pins and coordinates are illustrative demo data, not monitored sites.</p>
      </div>
    </Panel>
  );
}
