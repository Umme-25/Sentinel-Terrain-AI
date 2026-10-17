import { AlertCircle, Inbox, LoaderCircle } from "lucide-react";

export function LoadingState({ label = "Loading demonstration data" }) {
  return (
    <div className="dashboard-state" role="status">
      <LoaderCircle className="dashboard-state-icon dashboard-spin" size={19} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export function EmptyState({ title = "Nothing to show yet", detail = "This section has no demonstration records." }) {
  return (
    <div className="dashboard-state dashboard-state-empty" role="status">
      <Inbox className="dashboard-state-icon" size={20} aria-hidden="true" />
      <div><strong>{title}</strong><span>{detail}</span></div>
    </div>
  );
}

export function ErrorState({ message = "This section could not be displayed.", onRetry }) {
  return (
    <div className="dashboard-state dashboard-state-error" role="alert">
      <AlertCircle className="dashboard-state-icon" size={19} aria-hidden="true" />
      <span>{message}</span>
      {onRetry ? <button type="button" onClick={onRetry}>Retry</button> : null}
    </div>
  );
}
