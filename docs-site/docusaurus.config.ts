import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  title: 'CVW RISC-V Documentation',
  tagline: 'Documentation for the CVW RISC-V Processor Implementation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openhwgroup.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cvw/',

  // GitHub pages deployment config.
  organizationName: 'openhwgroup', // Usually your GitHub org/user name.
  projectName: 'cvw', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/openhwgroup/cvw/tree/main/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CVW RISC-V',
      logo: {
        alt: 'CVW RISC-V Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Components',
          position: 'left',
          items: [
            {
              label: 'SoC Overview',
              to: '/docs/hardware/soc-architecture',
            },
            {
              label: 'Integer Unit (IEU)',
              to: '/docs/hardware/ieu-architecture',
            },
            {
              label: 'Floating-Point Unit (FPU)',
              to: '/docs/hardware/fpu-architecture',
            },
            {
              label: 'Load/Store Unit (LSU)',
              to: '/docs/hardware/lsu-architecture',
            },
            {
              label: 'Instruction Fetch (IFU)',
              to: '/docs/hardware/ifu-architecture',
            },
            {
              label: 'Memory Management (MMU)',
              to: '/docs/hardware/mmu-architecture',
            },
            {
              label: 'Cache System',
              to: '/docs/hardware/cache-architecture',
            },
            {
              label: 'Uncore Components',
              to: '/docs/hardware/uncore-architecture',
            },
          ],
        },
        {
          href: 'https://github.com/openhwgroup/cvw',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Hardware Architecture',
              to: '/docs/hardware/soc-architecture',
            },
            {
              label: 'Core Components',
              to: '/docs/hardware/ieu-architecture',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'OpenHW Group',
              href: 'https://www.openhwgroup.org/',
            },
            {
              label: 'RISC-V International',
              href: 'https://riscv.org/',
            },
            {
              label: 'RISC-V Specifications',
              href: 'https://riscv.org/technical/specifications/',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/openhwgroup/cvw',
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/openhwgroup/cvw/issues',
            },
            {
              label: 'Contributing Guide',
              href: 'https://github.com/openhwgroup/cvw/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CVW RISC-V Project. Built with Docusaurus. Documentation licensed under CC-BY-4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['verilog', 'vhdl', 'tcl', 'systemverilog'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
