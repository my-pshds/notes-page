// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '学科网页｜Academic Pages',
  tagline: '笔记｜代码｜草稿｜随笔',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://academic.pengxianzhe.org',
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
        '@docusaurus/preset-classic',
        {
          docs: {
            routeBasePath: '/',
            sidebarPath: './sidebars.js',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
          },
          theme: {
            customCss: ['./src/css/custom.css'],
          },
        },
      ],
    ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {

      algolia: {
        appId: "MU8MMAXGJ6",
        apiKey: "7aa15501475a6a6fd6ef8a3beeb06f81",
        indexName: "academic-pengxianzhe",
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
          {to: '/category/形式', label: '形式', position: 'left'},
          {to: '/category/计算', label: '计算', position: 'left'},
          {to: '/blog', label: '随笔', position: 'right'},
          
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
            title: '本域本站',
            items: [
              {
                label: '随笔｜Blog',
                to: '/blog',
              },
              {
                label: 'Home｜入口',
                to: '/',
              },
              
            ],
          },
          {
            title: '跨域跨站',
            items: [
              {
                label:"ResearchGate",
                href:"https://www.researchgate.net/profile/Xianzhe-Peng"
              }
            ],
          },
          {
            title: '本域跨站',
            items: [
              {
                label: 'ＣＶ｜标准化',
                href: 'https://cv.pengxianzhe.org',
              },
              {
                label: 'Profile｜名片',
                href: 'https://link.pengxianzhe.org',
              }
            ],
          },
        ],
        copyright: `欢迎你在&thinsp;${new Date().getFullYear()}&thinsp;年访问本站&thinsp;！
                    如果有任何链接失效，可在源代码库提出&thinsp;Issue`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
  }

export default config;
