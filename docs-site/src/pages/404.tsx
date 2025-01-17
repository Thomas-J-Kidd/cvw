import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const styles = {
  notFound: {
    padding: '4rem 0',
    minHeight: 'calc(100vh - var(--ifm-navbar-height))',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center' as const,
    padding: '2rem',
    background: 'var(--ifm-background-surface-color)',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: 'var(--ifm-color-primary)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: 'var(--ifm-color-primary-darker)',
    fontFamily: 'var(--ifm-font-family-monospace)',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: 'var(--ifm-font-color-base)',
  },
  suggestions: {
    margin: '2rem 0',
    textAlign: 'left' as const,
    display: 'inline-block',
  },
  suggestionsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestionItem: {
    margin: '1rem 0',
    fontSize: '1.1rem',
  },
  actions: {
    marginTop: '2rem',
  },
};

export default function NotFound(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Page Not Found | ${siteConfig.title}`}
      description="404 - Page Not Found">
      <main style={styles.notFound}>
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div style={styles.content}>
                <Heading as="h1" style={styles.title}>
                  404 - Page Not Found
                </Heading>
                <p style={styles.subtitle}>
                  Oops! Looks like there's a pipeline stall...
                </p>
                <p style={styles.message}>
                  The page you're looking for doesn't exist or has been moved.
                  Let's help you get back on track:
                </p>
                <div style={styles.suggestions}>
                  <ul style={styles.suggestionsList}>
                    <li style={styles.suggestionItem}>
                      <Link to="/docs/intro">
                        Start from the documentation home
                      </Link>
                    </li>
                    <li style={styles.suggestionItem}>
                      <Link to="/docs/hardware/soc-architecture">
                        View the SoC architecture
                      </Link>
                    </li>
                    <li style={styles.suggestionItem}>
                      <Link to="/">
                        Return to the main page
                      </Link>
                    </li>
                  </ul>
                </div>
                <div style={styles.actions}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/intro">
                    Go to Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}