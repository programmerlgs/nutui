import{e as t,o,G as s}from"./vendor.1415bbb1.js";const p={class:"markdown-body"},i=s(`<h1>\u5F00\u53D1\u8005\u8D21\u732E\u6307\u5357</h1><p>\u6211\u4EEC\u975E\u5E38\u6B22\u8FCE\u793E\u533A\u7684\u5F00\u53D1\u8005\u5411 NutUI \u505A\u51FA\u8D21\u732E\u3002\u5728\u63D0\u4EA4\u8D21\u732E\u4E4B\u524D\uFF0C\u8BF7\u82B1\u4E00\u4E9B\u65F6\u95F4\u9605\u8BFB\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u4FDD\u8BC1\u8D21\u732E\u662F\u7B26\u5408\u89C4\u8303\u5E76\u4E14\u80FD\u5E2E\u52A9\u5230\u793E\u533A\u3002</p><h2>Issue \u62A5\u544A\u6307\u5357</h2><p>\u5982\u679C\u63D0\u4EA4\u7684\u662F Bug \u62A5\u544A\uFF0C\u8BF7\u52A1\u5FC5\u9075\u5B88 <a href="https://github.com/jdf2e/nutui/blob/next/.github/ISSUE_TEMPLATE/bug_report.md"><code>Bug report</code></a> \u6A21\u677F\u3002</p><h2>\u5F00\u53D1\u914D\u7F6E</h2><p>\u4F60\u9700\u8981\u4FDD\u8BC1\u4F60\u7684 Node.js \u7248\u672C\u5927\u4E8E 12\uFF0C\u628A\u4ED3\u5E93 clone \u5230\u672C\u5730\uFF0C\u5E76\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><pre><code class="language-bash">$ npm install <span class="hljs-comment"># or yarn</span>
$ npm run dev
</code></pre><h2>\u63D0\u4EA4 commit</h2><p>\u6574\u4E2A NutUI \u4ED3\u5E93\u9075\u4ECE <a href="https://gist.github.com/stephenparish/9941e89d80e2bc58a153">Angular Style Commit Message Conventions</a>\uFF0C\u5728\u8F93\u5165 commit message \u7684\u65F6\u5019\u8BF7\u52A1\u5FC5\u9075\u4ECE\u6B64\u89C4\u8303\u3002</p><p>Title Format type(ComponentName?)\uFF1Acommit message</p><p>\u4F8B\u5982\uFF1A</p><p>docs: fix type in quickstart build: optimize build speed fix(Button): incorrect style feat(Button): add color prop</p><p>\u5141\u8BB8\u7684\u7C7B\u578B Types:</p><p>upd chore docs feat fix test refactor revert style releas</p><h2>Pull Request \u6307\u5357</h2><ol><li>\u52A1\u5FC5\u4FDD\u8BC1 <code>npm run build</code> <code>npm run build:site</code> <code>npm run build:taro:vue</code> \u80FD\u591F\u7F16\u8BD1\u6210\u529F\uFF1B</li><li>\u5F53\u76F8\u5173\u5305\u7684 <code>package.json</code> \u542B\u6709 <code>npm test</code> \u547D\u4EE4\u65F6\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u6240\u6709\u6D4B\u8BD5\u7528\u4F8B\u90FD\u9700\u8981\u901A\u8FC7\uFF1B</li><li>\u5F53\u76F8\u5173\u5305\u6709\u6D4B\u8BD5\u7528\u4F8B\u65F6\uFF0C\u8BF7\u7ED9\u4F60\u63D0\u4EA4\u7684\u4EE3\u7801\u4E5F\u6DFB\u52A0\u76F8\u5E94\u7684\u6D4B\u8BD5\u7528\u4F8B\uFF1B</li><li>\u63D0\u4EA4\u4EE3\u7801 commit \u65F6\uFF0Ccommit \u4FE1\u606F\u9700\u8981\u9075\u5FAA <a href="https://gist.github.com/stephenparish/9941e89d80e2bc58a153">Angular Style Commit Message Conventions</a>\u3002</li><li>\u5982\u679C\u63D0\u4EA4\u7684\u4EE3\u7801\u975E\u5E38\u591A\u6216\u529F\u80FD\u590D\u6742\uFF0C\u53EF\u4EE5\u628A PR \u5206\u6210\u51E0\u4E2A commit \u4E00\u8D77\u63D0\u4EA4\u3002\u6211\u4EEC\u5728\u5408\u5E76\u65F6\u4F1A\u6839\u636E\u60C5\u51B5 squash\u3002</li></ol><h2>Credits</h2><p>\u611F\u8C22\u4EE5\u4E0B\u6240\u6709\u7ED9 NutUI \u8D21\u732E\u8FC7\u4EE3\u7801\u7684\u5F00\u53D1\u8005</p><p><a href="https://github.com/jdf2e/nutui/graphs/contributors">https://github.com/jdf2e/nutui/graphs/contributors</a></p>`,19),c=[i],m={setup(n,{expose:e}){return e({frontmatter:{}}),(a,u)=>(o(),t("div",p,c))}};export{m as default};
