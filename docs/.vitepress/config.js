module.exports = {
  title: "十块钱",
  description: "十块钱的博客",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "杂记", link: "/notes/feishu" },
      {
        text: "前端",
        items: [
          { text: "代码混淆", link: "/articles/obscure" },
          { text: "Docker部署", link: "/articles/docker" },
          { text: "FullCalendar", link: "/articles/fullCalendar" },
        ],
      },
      {
        text: "Element",
        link: "/examples/button",
      },
      {
        text: "Three.js",
        link: "/threejs/first",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/roy2651" },
      { icon: "twitter", link: "https://twitter.com/roy2651" },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "NodeJS教程",
          items: [
            {
              text: "代码混淆",
              link: "/articles/obscure",
            },
            {
              text: "docker部署",
              link: "/articles/docker",
            },
          ],
        },
        {
          text: "VUE组件",
          items: [
            {
              text: "FullCalendar",
              link: "/articles/fullCalendar",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "组件",
          items: [
            {
              text: "Button",
              link: "/examples/button",
            },
            {
              text: "Calendar",
              link: "/examples/calendar",
            },
          ],
        },
      ],
      "/notes/": [
        {
          text: "随笔杂想",
          items: [
            {
              text: "飞书配置",
              link: "/notes/feishu",
            },
          ],
        },
      ],
      "/threejs/": [
        {
          text: "Three.js学习",
          items: [
            {
              text: "基础",
              link: "/threejs/first",
            },
          ],
        },
      ],
    },
  },
};
