// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '抄抄写写的社科网页',
  tagline: '笔记｜代码｜草稿｜有抄的也有写的',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://notes.pengxianzhe.org',
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
            sidebarCollapsed: true,
            routeBasePath: '/',
            sidebarPath: './sidebars.js',
            remarkPlugins: [remarkMath],
            rehypePlugins: [
              [rehypeKatex, {
                strict: false,
                output: "htmlAndMathml"
              }]
            ],
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
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: false,
        }
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: undefined,
        hideOnScroll: true,
        logo: {
          alt: '图片加载失败',
          src: 'img/eightcharacters.svg',
          srcDark: 'img/eightdark.svg',
          href: '/',
          target: '_blank'
        },
        items: [
                   
          {to: '/category/说明书', label: '说明书', position: 'left'},
          {to: '/category/应用', label: '应用', position: 'left'},
          {to: '/category/交叉', label: '交叉', position: 'left'},
          {to: '/category/理论', label: '理论', position: 'left'},
          {to: '/category/形式', label: '形式', position: 'left'},
          {to: '/category/计算', label: '计算', position: 'left'},
          {to: '/blog', label: '专栏', position: 'right'},
          
          {
            href: 'https://github.com/Cynthian-pshds/notes-page/',
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
                label: '专栏作者',
                to: '/blog/authors',
              },
              
            ],
          },
          {
            title: '跨域跨站',
            items: [
              {
                label: '大平台链接',
                href: 'https://link.pengxianzhe.org',
              }
            ],
          },
          {
            title: '本域跨站',
            items: [
              {
                label: 'Academic Bio',
                href: 'https://profile.pengxianzhe.org',
              }
            ],
          },
        ],
        copyright: `本站创建在&thinsp;2024&thinsp;年&thinsp;4&thinsp;月，最近一次更新是&thinsp;${new Date().getFullYear()}&thinsp;年&thinsp;${new Date().getMonth() + 1}&thinsp;月&thinsp;${new Date().getDate()}&thinsp;日
        <br>如果有任何链接失效，可在源代码库提出&thinsp;Issue`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }
  }

export default config;
