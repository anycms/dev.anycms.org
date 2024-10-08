import * as path from 'path';
import { defineConfig } from 'rspress/config';
import ghPages from 'rspress-plugin-gh-pages';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AnyCMS Dev Site',
  description: 'AnyCMS 开发文档',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/anycms/dev.anycms.org' },
    ],
    footer:{
      message:'&copy; 2024 Powered by <a href="https://anycms.org" target="_blank">AnyCMS.</a>',
    },
    prevPageText: '上一篇',
    nextPageText: '下一篇',
    outlineTitle: '目录',
    searchPlaceholderText: '搜索',
    searchNoResultsText: '未搜索到相关结果',
    searchSuggestedQueryText: '可更换不同的关键字后重试',
   
  },
  
  plugins: [
    ghPages({
      repo: 'git@github.com:anycms/dev.anycms.org.git',
      branch: 'gh-pages',
      siteBase:'/'
    }),
  ],
});
