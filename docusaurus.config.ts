import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fusion Signage Developers',
  tagline: 'Developer portal for developing and integrating with Fusion Signage. Easy peasy.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://developers.fusionsignage.com.au/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fusionsignage', // Usually your GitHub org/user name.
  projectName: 'developer-portal', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fusionsignage/developer-portal/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            // Uncomment to test against local machine
            // spec: 'http://localhost:3001/cats/openapi-json',
            spec: 'https://api.fusionsignage.com.au/cats/openapi-json',
            id: 'cats',
            route: '/api',
          }
        ]
      }
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.png',
    navbar: {
      title: 'Developer Portal',
      logo: {
        alt: 'Fusion Signage Logo',
        src: 'img/heart.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: 'API Reference',
          to: '/api',
        },
        {
          href: 'https://github.com/fusionsignage/developer-portal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Custom Apps',
              to: '/docs/category/custom-apps',
            },
            {
              label: 'API',
              to: '/docs/category/api',
            },
            {
              label: 'SDK',
              to: '/docs/category/sdk',
            },
          ],
        },
        {
          title: 'Fusion Signage',
          items: [
            {
              label: 'Support Portal',
              href: 'https://support.fusionsignage.com.au/',
            },
            {
              label: 'Home Page',
              href: 'https://fusionsignage.com.au/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Security',
              to: 'https://fusionsignage.com.au/security',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fusionsignage',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/fusion-signage',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fusion Signage.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
