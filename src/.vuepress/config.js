const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Mintoria.io Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    sidebarDepth: 3,
    nav: [
      {
        text: "Artists",
        link: "/artists/",
      },
      {
        text: "Collectors",
        link: "/collectors/",
      },
      {
        text: "Partners",
        link: "/partners/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "Resources",
        link: "/resources/",
      },
    ],
    sidebar: {
      "/quick-start/": [
        {
          title: "Quick Start",
          children: [""],
        },
      ],
      "/artists/": [
        {
          title: "Artists",
          children: [
            ["", "Artists"],
            ["project-setup", "Project Setup"],
            ["project-submission", "Project Submission"],
            ["mintoria-galleries", "Mintoria Galleries"],
            ["sales-and-secondary", "Sales and Secondary Market"],
          ],
        },
      ],
      "/collectors/": [
        {
          title: "Collectors",
          children: [["", "Collectors"]],
        },
      ],
      "/partners/": [
        {
          title: "Partners",
          children: [["", "Partners"]],
        },
      ],
      "/api/": [
        {
          title: "API",
          children: [["", "API"]],
        },
      ],
      "/resources/": [
        {
          title: "Resources",
          children: [["", "Resources"]],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-smooth-scroll",
    [
      "@vuepress/google-analytics",
      {
        ga: "G-NLM90ESMFC",
      },
    ],
  ],
};
