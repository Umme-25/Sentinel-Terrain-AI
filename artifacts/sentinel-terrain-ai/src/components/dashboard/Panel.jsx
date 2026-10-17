export default function Panel({ title, eyebrow, action, children, className = "", headingId }) {
  return (
    <section className={`dashboard-panel ${className}`} aria-labelledby={headingId}>
      <div className="dashboard-panel-heading">
        <div>
          {eyebrow ? <div className="panel-eyebrow">{eyebrow}</div> : null}
          <h2 id={headingId}>{title}</h2>
        </div>
        {action ? <div className="panel-action">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
