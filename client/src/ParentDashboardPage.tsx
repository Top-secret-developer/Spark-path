import { useState } from 'react';
import { Link } from 'react-router-dom';
import './parent-dashboard.css';

const milestones = [
  { date: '7 Oct', title: 'Completed Build your first website', detail: 'Earned Web Starter and saved Alex’s corner.' },
  { date: '7 Oct', title: 'Passed the HTML knowledge check', detail: '4 out of 5 answers correct; reviewed image elements.' },
  { date: '6 Oct', title: 'Created a phishing clue card', detail: 'Practiced identifying suspicious messages.' },
];

export default function ParentDashboardPage() {
  const [weeklyEmail, setWeeklyEmail] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="family-page">
      <div className="family-topline">
        <span>PARENT FLOW / 13 / Parent family dashboard</span>
        <span>MVP CONCEPT · ILLUSTRATIVE DATA</span>
      </div>
      <div className="family-layout">
        <aside className="family-sidebar">
          <Link to="/" className="family-brand">
            <span className="family-brand-mark">ϟ</span>
            <span><strong>SparkPath</strong><small>by All Smart Tech Hub</small></span>
          </Link>
          <div className="family-space-label">PARENT SPACE</div>
          <nav className="family-nav" aria-label="Parent dashboard navigation">
            <a className="active" href="#overview"><span>⌂</span>Family overview</a>
            <a href="#learning"><span>▥</span>Learning activity</a>
            <a href="#consent"><span>♢</span>Consent &amp; privacy</a>
            <a href="#settings"><span>⚙</span>Settings</a>
          </nav>
          <div className="family-sidebar-note">
            <strong>Small steps. Big sparks.</strong>
            <p>Curiosity is your superpower. Keep building!</p>
          </div>
          <div className="family-profile">
            <span className="family-avatar">JO</span>
            <span><strong>Jamie Okafor</strong><small>Parent account</small></span>
          </div>
        </aside>

        <main className="family-main" id="overview">
          <header className="family-header">
            <div>SparkPath / Family</div>
            <div className="family-header-actions">
              <span className="privacy-chip">Private &amp; safe</span>
              <button type="button" className="family-icon-button" aria-label="Notifications">♧</button>
              <span className="family-avatar small">JO</span>
            </div>
          </header>

          <div className="family-content">
            <div className="family-title-row">
              <div>
                <h1>A little support goes a long way, Jamie.</h1>
                <p>Follow Alex’s learning, celebrate their effort, and manage family privacy in one place.</p>
              </div>
              <button type="button" className="age-select">Alex · age 12 <span>⌄</span></button>
            </div>

            <section className="family-project-banner">
              <span className="project-avatar">AO</span>
              <div className="project-copy">
                <strong>Alex just built a first website!</strong>
                <span>“Alex’s corner” is saved in their private portfolio. Ask what they enjoyed creating.</span>
              </div>
              <Link to="/learner-flow" className="portfolio-button">View Alex’s portfolio</Link>
            </section>

            <section className="family-stats" aria-label="Learning summary">
              <article className="family-stat">
                <span>Learning this week <b>◷</b></span>
                <strong>90 min</strong>
                <small>Weekly goal reached · up from 75 min</small>
              </article>
              <article className="family-stat">
                <span>Lessons completed <b>▣</b></span>
                <strong>18</strong>
                <small>6 of 8 in the website path</small>
              </article>
              <article className="family-stat">
                <span>Projects completed <b>▱</b></span>
                <strong>3</strong>
                <small>Ideas turned into practical skills</small>
              </article>
              <article className="family-stat">
                <span>Latest badge <b>♙</b></span>
                <strong>Web Starter</strong>
                <small>Earned today · 5 badges in total</small>
              </article>
            </section>

            <div className="family-dashboard-grid">
              <div className="family-left-column">
                <section className="family-panel rhythm-panel" id="learning">
                  <div className="family-panel-heading">
                    <h2>Learning rhythm</h2>
                    <span>This week · 5–11 Oct</span>
                  </div>
                  <p>Short, focused sessions work well. Encourage breaks away from the screen.</p>
                  <div className="rhythm-chart" aria-label="Learning minutes by day this week">
                    {[
                      { day: 'Mon', minutes: '30m', height: 74 },
                      { day: 'Tue', minutes: '45m', height: 112 },
                      { day: 'Wed', minutes: '15m', height: 42 },
                      { day: 'Thu', minutes: '—', height: 3 },
                      { day: 'Fri', minutes: '—', height: 3 },
                      { day: 'Sat', minutes: '—', height: 3 },
                      { day: 'Sun', minutes: '—', height: 3 },
                    ].map((item) => (
                      <div className="rhythm-day" key={item.day}>
                        <span className="rhythm-value">{item.minutes}</span>
                        <span className={`rhythm-bar ${item.height < 10 ? 'empty' : ''}`} style={{ height: `${item.height}px` }} />
                        <span className="rhythm-label">{item.day}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="family-panel milestone-panel">
                  <h2>Recent milestones</h2>
                  <div className="milestone-list">
                    {milestones.map((milestone) => (
                      <article className="milestone-item" key={milestone.title}>
                        <span className="milestone-date">{milestone.date}</span>
                        <div><strong>{milestone.title}</strong><small>{milestone.detail}</small></div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <div className="family-right-column">
                <section className="family-panel consent-panel" id="consent">
                  <div className="family-panel-heading">
                    <h2>Consent &amp; privacy</h2>
                    <span className="shield-icon">♢</span>
                  </div>
                  <span className="approved-label">Guardian consent · approved</span>
                  <p className="consent-note">Approved by Jamie on 3 Oct 2026. You can withdraw consent at any time; learning access will pause.</p>
                  <div className="privacy-setting">
                    <div><strong>Private portfolio</strong><small>Always on for minor accounts. No public sharing.</small></div>
                    <span className="lock-icon">♙</span>
                  </div>
                  <label className="privacy-setting toggle-setting">
                    <span><strong>Weekly email summary</strong><small>A calm update on Alex’s activity.</small></span>
                    <input type="checkbox" checked={weeklyEmail} onChange={(event) => setWeeklyEmail(event.target.checked)} />
                  </label>
                  <label className="privacy-setting toggle-setting">
                    <span><strong>Optional learning analytics</strong><small>Share anonymous usage to improve lessons.</small></span>
                    <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
                  </label>
                  <button type="button" className="consent-review">Review or withdraw consent</button>
                  <small className="privacy-footnote">Manage data download and deletion in account settings.</small>
                </section>

                <section className="conversation-card">
                  <span className="conversation-icon">♧</span>
                  <h2>Try this conversation starter</h2>
                  <p>“If you could add one more thing to your website, what would it be?”</p>
                  <small>Focus on curiosity and effort, not scores.</small>
                </section>
              </div>
            </div>

            <footer className="family-footer">
              <span>SparkPath by All Smart Tech Hub · Built for curious minds</span>
              <Link to="/auth">Help &amp; safety</Link>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
