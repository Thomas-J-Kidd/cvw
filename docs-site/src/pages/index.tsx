import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with CVW RISC-V
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <h3>RISC-V RV64GC</h3>
              <p>
                Full implementation of the RISC-V 64-bit ISA with support for general-purpose
                extensions and compressed instructions.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <h3>Advanced Features</h3>
              <p>
                Hardware floating-point, virtual memory, branch prediction, multi-level cache,
                and cryptographic extensions.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
              <h3>Rich Peripherals</h3>
              <p>
                Complete SoC with UART, SPI, GPIO, timers, interrupt controllers,
                and external memory interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageArchitecture() {
  return (
    <section className={styles.architecture}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text--center">
              <h2>Modular Architecture</h2>
              <p>
                The CVW RISC-V processor features a modular design with well-defined interfaces
                between components, making it easy to understand and modify.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.architectureLinks}>
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/hardware/soc-architecture">
                Explore the Architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for the CVW RISC-V Processor Implementation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageArchitecture />
      </main>
    </Layout>
  );
}
