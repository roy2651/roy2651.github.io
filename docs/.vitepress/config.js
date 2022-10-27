module.exports = {
  title: "十块钱",
  description: "十块钱的博客",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "飞书", link: "/articles/feishu" },
      {
        text: "Node",
        items: [
          { text: "代码混淆", link: "/articles/obscure" },
          { text: "Docker部署", link: "/articles/docker" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/roy2651" },
      { icon: "twitter", link: "https://twitter.com/roy2651" },
    ],
  },
  sidebar: {
    "/articles/": [
      {
        text: "随笔杂想",
        items: [
          {
            text: "飞书配置",
            link: "/articles/feishu",
          },
        ],
      },
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
  },
};
