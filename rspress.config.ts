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
    }
  },
  plugins: [
    ghPages({
      repo: 'git@github.com:anycms/dev.anycms.org.git',
      branch: 'gh-pages',
      siteBase:'/'
    }),
  ],
});
