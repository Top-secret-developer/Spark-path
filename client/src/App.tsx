import { FormEvent, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import LearnerFlowPage from './LearnerFlowPage';
import ParentDashboardPage from './ParentDashboardPage';

const cardContent = [
  {
    title: 'Software engineering',
    subtitle: 'Build your first website',
    tone: 'purple',
    icon: '</>',
  },
  {
    title: 'DevOps engineering',
    subtitle: 'Take an idea to delivery',
    tone: 'blue',
    icon: '⑂',
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Learn to spot a phishing message',
    tone: 'mint',
    icon: '⬡',
  },
  {
    title: 'Cloud computing',
    subtitle: 'Discover your files in the cloud',
    tone: 'blue',
    icon: '☁',
  },
  {
    title: 'Computer appreciation skills',
    subtitle: 'Get comfortable with the basics',
    tone: 'gold',
    icon: '▱',
  },
  {
    title: 'Robotics',
    subtitle: 'Make a robot move',
    tone: 'pink',
    icon: '▣',
  },
  {
    title: 'AI engineering',
    subtitle: 'Create your first AI sorter',
    tone: 'purple',
    icon: '✧',
  },
  {
    title: 'Automation',
    subtitle: 'Make everyday tasks easier',
    tone: 'mint',
    icon: '▢',
  },
];

function AuthPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: true,
    consent: true,
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Unable to sign in');
      }

      setMessage('Signed in successfully. Redirecting...');
      setTimeout(() => navigate('/'), 700);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <div className="auth-shell">
      <aside className="brand-panel">
        <div className="top-label-row">
          <span>Getting started</span>
          <span>03 / Sign in &amp; recovery</span>
        </div>

        <div className="brand-header">
          <div className="brand-mark">✦</div>
          <div className="brand-name">SparkPath</div>
        </div>

        <div className="eyebrow">By all smart students</div>

        <h1>
          A little curiosity.
          <br />
          A world of possibility.
        </h1>

        <p className="tagline">
          Build confidence, solve real problems, and discover the technology you can create.
        </p>

        <div className="preview-card">
          <div className="code-window">
            <div className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="code-lines">
              <span className="line short" />
              <span className="line mid" />
              <span className="line long" />
            </div>
          </div>
          <div className="mini-badge">build your next idea</div>
          <div className="preview-card-content">
            <h3>Big ideas start small.</h3>
            <div className="idea-box">
              <span className="icon">⚡</span>
            </div>
          </div>
        </div>

        <div className="actions-row">
          <button className="ghost-button">Create, don’t just consume</button>
          <button className="outline-button">Begin free</button>
        </div>

        <div className="footer-quote">
          “Our mission is to catch young people to teach — and help their curiosity become practical skill.”
          <span>— Michael, Founder, AI Startup</span>
        </div>
      </aside>

      <main className="auth-panel">
        <div className="auth-header">
          <span>Your next chapter</span>
          <Link to="/">Help &amp; safety</Link>
        </div>

        <h2>Welcome back, builder.</h2>
        <p className="subtitle">Your next small step is waiting. Sign in to pick up where you left off.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="button-row">
            <button type="button" className="primary-lite">Google</button>
            <button type="button" className="primary-lite">Parent / guardian</button>
          </div>

          <label>
            <span>Email address</span>
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="alex@example.com"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              value={formData.password}
              onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              placeholder="••••••••"
              required
            />
          </label>

          <div className="inline-row">
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={formData.remember}
                onChange={() => setFormData({ ...formData, remember: !formData.remember })}
              />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-button">Forgot password?</button>
          </div>

          <button type="submit" className="submit-button">Sign in to SparkPath →</button>

          <label className="checkbox-row consent-row">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={() => setFormData({ ...formData, consent: !formData.consent })}
            />
            <span>On a shared computer? Leave “Remember me” off and sign out when you finish.</span>
          </label>

          {message ? <p className="status-message">{message}</p> : null}
        </form>

        <div className="recovery-box">
          <div className="recovery-title">
            <span className="spark-icon">✦</span>
            Need a fresh start?
          </div>
          <p>
            Enter your account email and we’ll send a secure password reset link. For your login, a
            guardian can provide assistance.
          </p>
          <label>
            <span>Recovery email</span>
            <input type="email" placeholder="alex@example.com" />
          </label>
          <button type="button" className="secondary-button">Send reset link</button>
        </div>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <Link to="/" className="landing-brand" aria-label="SparkPath home">
          <span className="landing-brand-mark">ϟ</span>
          <span className="landing-brand-copy">
            <strong>SparkPath</strong>
            <small>BY ALL SMART TECH HUB</small>
          </span>
        </Link>

        <nav className="landing-nav" aria-label="Main navigation">
          <a href="#paths">Explore paths</a>
          <a href="#how-it-works">How it works</a>
          <a href="#for-parents">For parents</a>
        </nav>

        <div className="landing-header-actions">
          <Link to="/auth" className="landing-signin">Sign in</Link>
          <Link to="/auth" className="landing-header-cta">Start exploring <span>→</span></Link>
        </div>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-copy">
            <span className="landing-kicker">Big ideas start with a spark</span>
            <h1>
              Less scrolling.
              <span>More creating.</span>
            </h1>
            <h2>Turn “what if?” into “I made this.”</h2>
            <p className="landing-description">
              A technology learning adventure for kids and young people. Explore eight worlds,
              tackle fun missions, and build something that’s truly yours.
            </p>
            <div className="landing-hero-actions">
              <Link to="/auth" className="landing-primary-cta">Find my spark <span>→</span></Link>
              <a href="#paths" className="landing-secondary-cta">Explore learning paths</a>
            </div>
            <p className="landing-reassurance">No experience needed. Just bring your curiosity.</p>
            <p className="landing-parent-note">Under 18? A parent or guardian will help you join.</p>
          </div>

          <div className="landing-art" aria-label="A preview of a learner's first website project">
            <div className="landing-sun" />
            <div className="landing-browser">
              <div className="landing-browser-bar">
                <span /><span /><span />
                <small>my-first-website.spark</small>
              </div>
              <div className="landing-browser-content">
                <span className="landing-project-kicker">Hey, world. I’m a creator.</span>
                <div className="landing-project-row">
                  <div>
                    <h2>Big ideas.<br />Made by me.</h2>
                    <p>My little corner of the internet.</p>
                    <span className="landing-project-button">See what I’m making</span>
                  </div>
                  <div className="landing-hello">hello<br />world!</div>
                </div>
              </div>
            </div>
            <div className="landing-confidence-card">
              <span className="landing-sparkle">✦</span>
              <span><strong>First project. Big feeling.</strong><small>Confidence: unlocked</small></span>
            </div>
            <div className="landing-code-card">
              <strong>Your next big idea</strong>
              <code>&lt;h1&gt; Hello, possibility! &lt;/h1&gt;<br />&lt;dream&gt; Build something. &lt;/dream&gt;</code>
            </div>
            <div className="landing-curiosity">A little curiosity. A world of possibility.</div>
            <div className="landing-imagination">100% imagination. Yours to build.</div>
          </div>
        </section>

        <div className="landing-values" aria-label="What makes SparkPath different">
          <div><strong>8 technology worlds</strong><span>Find what lights you up</span></div>
          <div><strong>Real projects</strong><span>Create, don’t just consume</span></div>
          <div><strong>Your own pace</strong><span>Small steps. Big possibility.</span></div>
          <div><strong>Private by design</strong><span>A safe space to learn</span></div>
        </div>

        <section id="paths" className="landing-paths">
          <div className="landing-section-heading landing-paths-heading">
            <span className="landing-kicker">Follow your curiosity</span>
            <h2>Eight worlds. Your next big thing.</h2>
            <p>From your first click to your first creation. There’s a place to start for every kind of curious.</p>
          </div>
          <div className="landing-path-grid">
            {cardContent.map((item) => (
              <Link to="/auth" key={item.title} className={`landing-path-card ${item.tone}`}>
                <span className="landing-path-icon">{item.icon}</span>
                <span className="landing-path-level">Beginner</span>
                <span className="landing-path-arrow">↗</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="landing-steps">
          <span className="landing-kicker">Small steps. Real skills.</span>
          <h2>From “I wonder” to “I made it.”</h2>
          <div className="landing-step-grid">
            <article>
              <span className="landing-step-number">01</span>
              <h3>Find your spark</h3>
              <p>Pick a world that interests you. There’s no perfect path, just your next step.</p>
            </article>
            <article>
              <span className="landing-step-number">02</span>
              <h3>Try a little. Learn a lot.</h3>
              <p>Follow bite-sized lessons and guided missions, one new skill at a time.</p>
            </article>
            <article>
              <span className="landing-step-number">03</span>
              <h3>Make it yours</h3>
              <p>Build a project, check your knowledge, and celebrate what you can do.</p>
            </article>
          </div>
        </section>

        <section className="landing-showcase">
          <div className="landing-showcase-art">
            <div className="landing-showcase-window">
              <div className="landing-showcase-bar"><span>● ● ●</span><small>My first website</small></div>
              <div className="landing-showcase-content">
                <h3>A big hello<br />from a little website.</h3>
                <p>Made with curiosity, a little HTML, and a lot of me.</p>
                <div><span>My ideas</span><span>My hobbies</span><span>My next thing</span></div>
              </div>
            </div>
          </div>
          <div className="landing-showcase-copy">
            <span className="landing-kicker">Learn by making</span>
            <h2>Not just another video watched. Something created.</h2>
            <p>Short lessons lead to hands-on projects you can keep in your private portfolio. Watch your ideas grow — and your confidence grow with them.</p>
            <Link to="/auth" className="landing-showcase-link">See how it works <span>→</span></Link>
          </div>
        </section>

        <section id="for-parents" className="landing-parent-section">
          <div className="landing-parent-copy">
            <span className="landing-kicker">For parents &amp; guardians</span>
            <h2>Their curiosity.<br />Your peace of mind.</h2>
            <p>A space to explore independently, with you alongside. Support their learning from a dedicated family dashboard.</p>
            <ul>
              <li><strong>Private portfolios</strong><span>Their work stays in their learner space.</span></li>
              <li><strong>No open messaging</strong><span>Learning comes first, not social pressure.</span></li>
              <li><strong>Parent-supported signup</strong><span>Help your child join and manage consent.</span></li>
            </ul>
          </div>
          <div className="landing-family-card">
            <span>A little window into their world</span>
            <div className="landing-family-inner">
              <h3>Growing, one spark at a time.</h3>
              <p>Keep up with their learning, without taking over.</p>
              <div className="landing-family-progress"><small>Exploring</small><strong>Build your first website</strong></div>
              <p>Learning progress<br /><strong>In your family dashboard</strong></p>
            </div>
          </div>
        </section>

        <section className="landing-faq">
          <div className="landing-faq-intro">
            <span className="landing-kicker">A few things to know</span>
            <h2>Curious?<br />Good. So are we.</h2>
            <p>Big questions are always welcome.<br />Here are a few answers to get you started.</p>
          </div>
          <div className="landing-faq-list">
            <article>
              <h3>Do I need to know how to code?</h3>
              <p>Not at all. Start with computer basics or choose a beginner path. Each world guides you through a first project, step by step.</p>
            </article>
            <article>
              <h3>What can I learn on SparkPath?</h3>
              <p>Explore software, DevOps, cybersecurity, cloud computing, computer basics, robotics, AI engineering, and automation.</p>
            </article>
            <article>
              <h3>How do parents and guardians get involved?</h3>
              <p>Under-18 learners join with a parent or guardian. Your family dashboard helps you follow progress and manage consent.</p>
            </article>
          </div>
        </section>

        <section className="landing-bottom-cta">
          <span className="landing-kicker">Your next chapter starts here</span>
          <h2>You bring the curiosity.<br />We’ll help you find your spark.</h2>
          <Link to="/auth" className="landing-bottom-button">Start my adventure <span>→</span></Link>
          <p>Beginner friendly. Project powered. Made for curious minds.</p>
        </section>
      </main>

      <footer className="landing-footer">
        <div>
          <Link to="/" className="landing-footer-brand">SparkPath</Link>
          <p>by All Smart Tech hub · Built for curious minds.</p>
          <p>Learn by making. Grow by exploring.</p>
        </div>
        <div>
          <nav aria-label="Footer navigation">
            <a href="#paths">Explore paths</a>
            <a href="#for-parents">For parents</a>
            <Link to="/auth">Help &amp; safety</Link>
          </nav>
          <p>No public profiles. No open messaging.</p>
          <p>SparkPath · MVP homepage concept</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/learner-flow" element={<LearnerFlowPage />} />
      <Route path="/parent-dashboard" element={<ParentDashboardPage />} />
    </Routes>
  );
}
