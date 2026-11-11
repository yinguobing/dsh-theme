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
var styles_default = "/**\n * dsh-theme \u2014 \u5168\u5C40\u89C6\u89C9\u8986\u76D6\u3002\n *\n * \u53EA\u653E\u5185\u7F6E\u4E3B\u9898\u63D2\u4EF6\u5230\u4E0D\u4E86\u7684\u89C4\u5219\uFF1A\u884C\u9AD8\u3001\u95F4\u8DDD\u7B49\u5199\u6B7B\u5728\u7EC4\u4EF6\u91CC\u7684\u503C\u3002\n * \u914D\u8272\u548C\u5B57\u4F53\u4EA4\u7ED9 `--dsw-*` token\uFF08\u4E3B\u9898\u63D2\u4EF6\u5DF2\u7ECF\u7BA1\u4E86\uFF09\uFF0C\u8FD9\u91CC\u4E0D\u8981\u91CD\u590D\u5B9A\u4E49\u3002\n */\n\n/* \u2500\u2500 \u5BF9\u8BDD\u533A Markdown \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   DSH \u9ED8\u8BA4\u884C\u9AD8\u5199\u6B7B 32px\uFF1A\u6B63\u6587\u5B57\u53F7 14px \u65F6\u6BD4\u4F8B 2.29 \u5F88\u677E\uFF0C\u62C9\u5230 22px \u4E0A\u9650\u540E\n   \u53EA\u5269 1.45\uFF0C\u4E2D\u6587\u957F\u6BB5\u843D\u8BFB\u8D77\u6765\u6324\u3002\u8FD9\u91CC\u6309\u5B57\u53F7\u6BD4\u4F8B\u7ED9\u4E00\u4E2A 1.65\u3002\n   \u9009\u62E9\u5668\u7528\u5C5E\u6027\u524D\u7F00\uFF0C\u56E0\u4E3A\u7C7B\u540D\u662F\u6784\u5EFA\u65F6\u7684\u54C8\u5E0C\uFF08_markdown_xxxxx\uFF09\u3002 */\n[class*='_markdown_'] {\n  line-height: 1.65;\n}\n[class*='_markdown_'] > p,\n[class*='_markdown_'] li {\n  margin-block: 0.85em;\n}\n[class*='_markdown_'] pre,\n[class*='_markdown_'] code {\n  line-height: 1.5;\n}\n";

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
