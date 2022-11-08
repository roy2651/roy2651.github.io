module.exports = {
  title: "十块钱",
  description: "十块钱的博客",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "飞书", link: "/notes/feishu" },
      {
        text: "Node",
        items: [
          { text: "代码混淆", link: "/articles/obscure" },
          { text: "Docker部署", link: "/articles/docker" },
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
      ],
      "/examples/": [
        {
          text: "组件",
          items: [
            {
              text: "button",
              link: "/examples/button",
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
