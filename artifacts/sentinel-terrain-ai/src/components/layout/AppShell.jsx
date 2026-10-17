import { useState } from "react";
import { Menu, Bell, ChevronRight } from "lucide-react";
import { useLocation, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { navigation } from "../../constants/navigation";

export default function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const location = useLocation();
  const current = navigation.find((item) => item.path === location.pathname);

  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="main-column">
        <header className="topbar">
          <div className="heading-group">
            <button
              className="mobile-menu"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="app-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={19} />
            </button>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <span>Sentinel Terrain AI</span>
              <ChevronRight size={13} aria-hidden="true" />
              <strong>{current?.label ?? "Not found"}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <div className="notification-wrap">
              <button
                className="icon-button"
                type="button"
                aria-label="Notifications"
                aria-expanded={noticeOpen}
                aria-controls="notification-notice"
                onClick={() => setNoticeOpen((open) => !open)}
              >
                <Bell size={19} strokeWidth={1.8} />
              </button>
              {noticeOpen && (
                <section className="notice-popover" id="notification-notice" aria-live="polite">
                  <h2 className="notice-title">Notifications</h2>
                  <p className="notice-body">Demo mode is active. No live alerts or notifications are connected.</p>
                </section>
              )}
            </div>
            <div className="profile" aria-label="Demo user profile">
              <div className="avatar" aria-hidden="true">DU</div>
              <div>
                <div className="profile-name">Demo User</div>
                <div className="profile-role">Demo profile</div>
              </div>
            </div>
          </div>
        </header>
        <main className="workspace" id="main-content">
          <Outlet />
          <footer className="workspace-footer">
            <span>Sentinel Terrain AI</span>
            <span>Demonstration interface · No operational data</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
