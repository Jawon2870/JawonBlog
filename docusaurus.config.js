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

  // Set the production url of your site here
  url: 'https://www.Jawon.site',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jawon', // Usually your GitHub org/user name.
  projectName: 'Jawon-Blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
    //   theme$j as dracula,
    // theme$i as duotoneDark,
    // theme$h as duotoneLight,
    // theme$g as github,
    // theme$1 as gruvboxMaterialDark,
    // theme as gruvboxMaterialLight,
    // theme$5 as jettwaveDark,
    // theme$4 as jettwaveLight,
    // theme$f as nightOwl,
    // theme$e as nightOwlLight,
    // theme$d as oceanicNext,
    // theme$c as okaidia,
    // theme$3 as oneDark,
    // theme$2 as oneLight,
    // theme$b as palenight,
    // theme$a as shadesOfPurple,
    // theme$9 as synthwave84,
    // theme$8 as ultramin,
    // theme$7 as vsDark,
    // theme$6 as vsLight,
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
