import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
        <div className="hud-controls">
            <div className="hud-top">
                <div className="hud-badge">
                    <span>Status</span>
                    On Mission 1234
                    <button className="circular-btn">⏸</button>
                </div>
            </div>

            <div className="hud-bottom">
                <div className="hud-badge">
                    QUICK GOAL
                    <button className="circular-btn">→</button>
                </div>
            </div>
        </div>

      <div className="status-group">
        <div>🔋 100%</div>
        <div>📶 Strong</div>
        <div> <span>Failsafe</span> Okay</div>
        <div> <span>Syatem</span> Okay</div>
      </div>

<div className="actions">
  <div className="mode-group">
    <span className="mode-label">MODE</span>
    <button className="mode-btn">AUTO</button>
    <button className="mode-btn inactive">MANUAL</button>
  </div>

  <button className="init-btn">
    INITIATE <span className="circular-btn">→</span>
  </button>
</div>

    </div>
  );
};

export default TopBar;
