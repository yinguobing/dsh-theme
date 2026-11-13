/**
 * dsh-theme — 由 build.mjs 生成，不要手改。
 * 源码在 src/，改完跑 node build.mjs。
 */
window.__ModuleLoader__.load({
  id: "dsh-theme",
  factory: (require) => {
    const module = { exports: {} }
    const exports = module.exports
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.jsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply
});
module.exports = __toCommonJS(index_exports);

// src/styles.css
var styles_default = "/**\n * dsh-theme \u2014 \u5168\u5C40\u89C6\u89C9\u8986\u76D6\u3002\n *\n * \u53EA\u653E\u5185\u7F6E\u4E3B\u9898\u63D2\u4EF6\u5230\u4E0D\u4E86\u7684\u89C4\u5219\uFF1A\u9605\u8BFB\u9762\u5B57\u4F53\u3001\u884C\u9AD8\u3001\u95F4\u8DDD\u7B49\u5199\u6B7B\u5728\u7EC4\u4EF6\u91CC\u7684\u503C\u3002\n * \u914D\u8272\u548C UI \u5B57\u4F53\u4EA4\u7ED9 `--dsw-*` token\uFF08\u4E3B\u9898\u63D2\u4EF6\u5DF2\u7ECF\u7BA1\u4E86\uFF09\uFF0C\u8FD9\u91CC\u4E0D\u8981\u91CD\u590D\u5B9A\u4E49\u3002\n */\n\n/* \u2500\u2500 \u9605\u8BFB\u9762\u5B57\u4F53 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   \u5BF9\u8BDD\u6B63\u6587\u7528\u4EFF\u5B8B\uFF1A\u6A2A\u7EC6\u7AD6\u7C97\u3001\u5B57\u9762\u6BD4\u9ED1\u4F53\u7559\u767D\u66F4\u591A\uFF0C\u957F\u6BB5\u843D\u8BFB\u8D77\u6765\u7701\u529B\uFF0C\n   \u89C6\u89C9\u4E0A\u4E5F\u6709\u5370\u5237\u54C1\u7684\u4E66\u5377\u6C14\u3002UI\uFF08\u4FA7\u680F\u3001\u6309\u94AE\u3001\u8F93\u5165\u6846\u3001\u4EE3\u7801\uFF09\u7EE7\u7EED\u7528\u9ED1\u4F53\uFF0C\n   \u673A\u5668\u7684\u58F0\u97F3\u548C\u4EBA\u7684\u58F0\u97F3\u5C31\u5206\u5F00\u4E86\u3002\n\n   src \u91CC local() \u6392\u5728\u524D\u9762\uFF1A\u672C\u673A\u88C5\u4E86\u540C\u4E00\u6B3E\u5B57\u5C31\u96F6\u4E0B\u8F7D\uFF0C\u7528\u7CFB\u7EDF\u6E32\u67D3\u7684\u90A3\u4EFD\u3002\n   \u5B57\u4F53\u6587\u4EF6\u7531\u5BBF\u4E3B\u4FA7 `lib/index.js` \u6302\u5728 `api/dsh-theme/read-font.woff2`\u3002 */\n@font-face {\n  font-family: 'DSH Read';\n  src: local('Zhuque Fangsong'), local('Zhuque Fangsong (technical preview)'),\n    url('api/dsh-theme/read-font.woff2') format('woff2');\n  font-weight: 400;\n  font-display: block;\n}\n\n:root {\n  /* \u4EFF\u5B8B\u53EA\u505A\u4E86\u5E38\u7528\u5B57\u5B50\u96C6\uFF08GB2312 \u4E00\u7EA7 + \u6807\u70B9 + \u62C9\u4E01\uFF09\uFF0C\u751F\u50FB\u5B57\u843D\u5230\u7CFB\u7EDF\u5B8B\u4F53 */\n  --dsh-read-font: 'DSH Read', 'Songti SC', 'STSong', 'SimSun', 'Source Han Serif SC',\n    'Noto Serif CJK SC', 'Songti TC', serif;\n}\n\n/* \u6B63\u6587\u548C\u7528\u6237\u6C14\u6CE1\u90FD\u7B97\u9605\u8BFB\u9762\uFF1B\u4EE3\u7801\u5728\u4E0B\u9762\u5355\u72EC\u62C9\u56DE\u7B49\u5BBD */\n[class*='_markdown_'],\n[class*='_bubble_'] {\n  font-family: var(--dsh-read-font);\n}\n\n/* \u6C14\u6CE1\u9ED8\u8BA4\u884C\u9AD8 1.36\uFF0830px @22px\uFF09\uFF0C\u5355\u884C\u770B\u4E0D\u51FA\u6765\uFF0C\u4E24\u884C\u4EE5\u4E0A\u5C31\u6BD4\u6B63\u6587\u6324\u3002\n   \u62C9\u5230 1.6 \u8BA9\u5B83\u8DDF\u6B63\u6587\u540C\u4E00\u4E2A\u547C\u5438\u8282\u594F\uFF0C\u5185\u8FB9\u8DDD\u4E0D\u52A8\u3002 */\n[class*='_bubble_'] {\n  line-height: 1.6;\n}\n\n/* \u2500\u2500 \u5BF9\u8BDD\u533A Markdown \u6392\u7248 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   DSH \u9ED8\u8BA4\u884C\u9AD8\u5199\u6B7B 32px\uFF1A\u6B63\u6587\u5B57\u53F7 14px \u65F6\u6BD4\u4F8B 2.29 \u5F88\u677E\uFF0C\u62C9\u5230 22px \u4E0A\u9650\u540E\n   \u53EA\u5269 1.45\uFF0C\u4E2D\u6587\u957F\u6BB5\u843D\u8BFB\u8D77\u6765\u6324\u3002\u8FD9\u91CC\u6309\u5B57\u53F7\u6BD4\u4F8B\u7ED9\u4E00\u4E2A 1.65\u3002\n   \u9009\u62E9\u5668\u7528\u5C5E\u6027\u524D\u7F00\uFF0C\u56E0\u4E3A\u7C7B\u540D\u662F\u6784\u5EFA\u65F6\u7684\u54C8\u5E0C\uFF08_markdown_xxxxx\uFF09\u3002 */\n[class*='_markdown_'] {\n  line-height: 1.65;\n}\n[class*='_markdown_'] > p {\n  margin-block: 0.85em;\n}\n/* \u5217\u8868\u9879\u4E4B\u95F4\u8981\u660E\u663E\u7D27\u4E8E\u6BB5\u95F4\u8DDD\uFF0C\u5426\u5219\u6574\u5757\u5217\u8868\u548C\u6BB5\u843D\u5206\u4E0D\u5F00 */\n[class*='_markdown_'] li {\n  margin-block: 0.35em;\n}\n[class*='_markdown_'] li > p {\n  margin-block: 0.25em;\n}\n/* \u4EE3\u7801\u4E0D\u8DDF\u7740\u6B63\u6587\u6362\u5B57\u4F53\uFF1A\u7B49\u5BBD\u662F\u4EE3\u7801\u7684\u4E00\u90E8\u5206 */\n[class*='_markdown_'] pre,\n[class*='_markdown_'] pre code,\n[class*='_markdown_'] code,\n[class*='_markdown_'] kbd,\n[class*='_markdown_'] samp {\n  font-family: var(--dsh-font-family-code, ui-monospace, 'SF Mono', Menlo, monospace);\n  line-height: 1.5;\n}\n";

// src/index.jsx
var STYLE_FLAG = "data-dsh-theme-css";
if (typeof document !== "undefined" && document.querySelector(`style[${STYLE_FLAG}]`) === null) {
  const tag = document.createElement("style");
  tag.setAttribute(STYLE_FLAG, "");
  tag.textContent = styles_default;
  document.head.appendChild(tag);
}
function apply() {
}

    return module.exports
  },
})
