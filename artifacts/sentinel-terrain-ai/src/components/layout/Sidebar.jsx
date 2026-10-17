import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X, Mountain } from "lucide-react";
import { navigation } from "../../constants/navigation";

export default function Sidebar({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  return (
    <>
      <button
        className={`mobile-overlay${open ? " visible" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <aside id="app-navigation" className={`sidebar${open ? " drawer-open" : ""}`} aria-label="Main navigation">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true"><Mountain size={21} strokeWidth={1.8} /></div>
          <div>
            <div className="brand-name">Sentinel Terrain AI</div>
            <div className="brand-subtitle">Terrain intelligence</div>
          </div>
          <button className="sidebar-close" type="button" aria-label="Close navigation menu" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <div className="nav-caption">Workspace</div>
        <nav aria-label="Workspace">
          <ul className="nav-list">
            {navigation.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                  onClick={onClose}
                >
                  <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-bottom">
          <div className="demo-tag"><span className="demo-dot" aria-hidden="true" /> DEMO MODE</div>
          <p className="sidebar-note">Phase 1 interface preview<br />No live monitoring data</p>
        </div>
      </aside>
    </>
  );
}
