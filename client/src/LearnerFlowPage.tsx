const ageOptions = ['7–9 years', '10–12 years', '13–15 years', '16–18 years', '19+ years'];

const interestOptions = [
  { label: 'Software engineering', icon: '</>' },
  { label: 'DevOps engineering', icon: '⚙' },
  { label: 'Cybersecurity', icon: '◌' },
  { label: 'Cloud computing', icon: '☁' },
  { label: 'Computer appreciation skills', icon: '◫' },
  { label: 'Robotics', icon: '🤖' },
  { label: 'AI engineering', icon: '✦' },
  { label: 'Automation', icon: '⟲' },
];

const startOptions = [
  {
    title: 'Brand-new beginner',
    description: 'Start with the basics. No experience needed.',
    selected: true,
  },
  {
    title: "I've tried a little",
    description: 'I know a few things and want to practice.',
    selected: false,
  },
];

export default function LearnerFlowPage() {
  return (
    <div className="learner-shell">
      <aside className="learner-sidebar">
        <div className="brand-block">
          <div className="brand-mark">✦</div>
          <div className="brand-copy">
            <div className="brand-title">SparkPath</div>
            <div className="brand-subtitle">by All Smart Tech Hub</div>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Sidebar navigation">
          <div className="sidebar-label">LEARNER SPACE</div>
          <button className="nav-item is-active" type="button">
            <span className="nav-icon">⌂</span>
            <span>Home</span>
          </button>
          <button className="nav-item" type="button">
            <span className="nav-icon">✦</span>
            <span>Explore paths</span>
          </button>
          <button className="nav-item" type="button">
            <span className="nav-icon">▣</span>
            <span>My learning</span>
          </button>
          <button className="nav-item" type="button">
            <span className="nav-icon">◫</span>
            <span>Progress &amp; portfolio</span>
          </button>
          <button className="nav-item" type="button">
            <span className="nav-icon">⚙</span>
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-note">
          <div className="mini-badge">Small steps. Big sparks.</div>
          <div className="sidebar-copy">Curiosity is your superpower. Keep building!</div>
        </div>

        <div className="user-card">
          <div className="user-avatar">AO</div>
          <div className="user-meta">
            <div className="user-name">Alex Okafor</div>
            <div className="user-role">Explorer • Age 12</div>
          </div>
        </div>
      </aside>

      <main className="learner-main">
        <header className="main-header">
          <div className="header-path">SparkPath / Your learning adventure</div>
          <div className="header-actions">
            <button type="button" className="ghost-btn">
              Private &amp; safe
            </button>
            <div className="header-notice">◔</div>
          </div>
        </header>

        <div className="content-grid">
          <section className="main-column">
            <div className="hero-header">
              <h1>What sparks your curiosity, Alex?</h1>
              <p>There’s no wrong answer. We’ll suggest a starting path — you can change it any time.</p>
            </div>

            <div className="progress-steps" aria-label="Journey progress">
              <span className="step done">1 • About you</span>
              <span className="step active">2 • Find your spark</span>
              <span className="step">3 • Start a mission</span>
            </div>

            <div className="panel-box panel-age">
              <h2>Your explorer age band</h2>
              <div className="pill-row age-row">
                {ageOptions.map((age, index) => (
                  <button key={age} type="button" className={`age-pill ${index === 1 ? 'selected' : ''}`}>
                    {age}
                  </button>
                ))}
              </div>
            </div>

            <div className="panel-box panel-interests">
              <div className="panel-topline">
                <h2>Choose a few interests</h2>
                <div className="panel-pills">
                  <span className="soft-pill selected">1 selected</span>
                  <span className="soft-pill muted">Recommended • Software</span>
                </div>
              </div>

              <p>You can explore all eight areas later.</p>

              <div className="interest-grid">
                {interestOptions.map((item, index) => (
                  <button key={item.label} type="button" className={`interest-card ${index === 0 ? 'is-selected' : ''}`}>
                    <span className="interest-icon">{item.icon}</span>
                    <span className="interest-title">{item.label}</span>
                    {index === 0 ? <span className="check-mark">✓</span> : null}
                  </button>
                ))}
              </div>
            </div>

            <div className="panel-box panel-start">
              <h2>Where are you starting?</h2>
              <div className="start-grid">
                {startOptions.map((item) => (
                  <button key={item.title} type="button" className={`start-card ${item.selected ? 'selected' : ''}`}>
                    <span className="start-icon">{item.selected ? '✦' : '○'}</span>
                    <div className="start-copy">
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="mission-panel">
            <div className="mission-card">
              <div className="mission-icon">✦</div>
              <h3>Your first mission awaits.</h3>
              <p>Learn how a website works, then build your own “About me” page.</p>

              <div className="mission-list">
                <div className="mission-item">
                  <span className="status-dot">✓</span>
                  <span>6 lessons • 1 mini project</span>
                </div>
                <div className="mission-item">
                  <span className="status-dot">✓</span>
                  <span>About 15 minutes per lesson</span>
                </div>
              </div>

              <div className="approval-row">
                <span className="approval-check">✓</span>
                <span>Guardian approval received. You’re ready to start learning.</span>
              </div>

              <button type="button" className="primary-btn">
                Build my learning plan <span>→</span>
              </button>

              <div className="mission-note">
                Your choices help us recommend a path that helps you move from curious to confident.
              </div>
            </div>
          </aside>
        </div>

        <footer className="site-footer">
          <div className="footer-left">SparkPath by All Smart Tech Hub • Built for curious minds</div>
          <div className="footer-right">Help &amp; safety</div>
        </footer>
      </main>
    </div>
  );
}
