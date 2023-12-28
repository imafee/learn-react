import { defineConfig } from 'vitepress';
import sidebar from './sidebar/index.js';
import baidu from './head.baidu.js';
import pkg from '../package.json';
let { name: title, description, homepage, bugs, license, author, config } = pkg;

export default defineConfig({
  title,
  description,
  base: '/learn-react/',
  srcDir: './docs',
  srcExclude: ['**/README.md', '**/TODO.md'],
  assetsDir: 'static',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: './assets/favicon-16x16.png',
      },
    ],
    ['script', {}, baidu],
  ],
  themeConfig: {
    nav: [],
    // sidebar,
    socialLinks: [{ icon: 'github', link: config['repo-url'] }],
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright © 2020-${new Date().getFullYear()}-${author.name}`,
    },
    editLink: {
      pattern: `${config['repo-url']}/edit/main/:path`,
      text: `Edit this page on ${config['repo-url']}`,
    },
    lastUpdated: false,
    search: {
      provider: 'local',
    },
  },
});
