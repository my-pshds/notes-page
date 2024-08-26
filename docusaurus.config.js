// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '学科网页 | Academic Pages',
  tagline: '笔记 | 代码 | 草稿 | 随笔 | 以后可能还会有预印本',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cynthian-pshds', // Usually your GitHub org/user name.
  projectName: 'academic-pengxianzhe', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        // The application ID provided by Algolia
        appId: 'RMUHPWGGGA',
  
        // Public API key: it is safe to commit it
        apiKey: 'a8e5ce96a1570f8bffbdb087003d6396',
        
        siteId:'8f5a5934-abf1-4f5a-bb21-fac8e10335eb',

        branch: 'main',

        selector: 'div#search',

        indexName: 'YOUR_INDEX_NAME',
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: '图片加载失败',
          src: 'img/eightcharacters.svg',
        },
        items: [
                   
          {to: '/category/说明书', label: '说明书', position: 'left'},
          {to: '/category/应用', label: '应用', position: 'left'},
          {to: '/category/交叉', label: '交叉', position: 'left'},
          {to: '/category/理论', label: '理论', position: 'left'},
          {to: '/category/形式科学', label: '形式科学', position: 'left'},
          {to: '/category/计算', label: '计算', position: 'left'},
          
          {
            href: 'https://github.com/Cynthian-pshds/academic-page',
            label: '源代码',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站内链接',
            items: [
              {
                label: '学科随笔',
                to: '/blog',
              },
            ],
          },
          {
            title: '跨域链接',
            items: [
              {
                label: 'ORCiD',
                href: 'https://orcid.org/0009-0005-7502-6576',
              },
            ],
          },
          {
            title: '域内跨站链接',
            items: [
              {
                label: '回到域名主页',
                to: 'https://pengxianzhe.org',
              },
            ],
          },
        ],
        copyright: `欢迎你在${new Date().getFullYear()}年访问本站！
                    如果有任何链接失效，可在源代码库提出&thinsp;Issue`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
};

export default config;
