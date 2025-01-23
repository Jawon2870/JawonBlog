// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jawon's blog",
  tagline: 'Welcome!',
  favicon: 'img/favicon.png',
  url: 'https://www.Jawon.site',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  staticDirectories: ['static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/colors.css',
            './src/css/layout.css',
          ],
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Jawon's blog",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: '笔记',
          to: '/docs',
        },
        // {
        //   to: '/blog',
        //   label: '博客',
        //   position: 'right'
        // },
        {
          href: 'https://github.com/Jawon2870/JawonBlog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    startPath: '/docs/简介',
    footer: {
      style: 'dark',
      copyright: `Updated at ${new Date().toLocaleDateString().replaceAll('/', ' / ')}.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.vsDark,
    },

    giscus: {
      repo: "Jawon2870/JawonBlog",
      repoId: "R_kgDONV8hTQ",
      category: 'General',
      categoryId: "DIC_kwDONV8hTc4Cl9O0",
      lang: "zh-CN",
    }
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],
};

export default config;
