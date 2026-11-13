# dsh-theme

DeepSeek Harness 的全局视觉补丁——**补内置主题插件到不了的地方**。

## 为什么需要它

内置的 `@deepseek-ai/dsh-client-ui-theme` 能管：

- 外观：`light` / `dark` / `system`
- 正文、代码、终端三处字号（分别 10–22 / 10–16 / 10–20 px）
- 三处字体栈
- 通过 `ctx.theme` 注册 `--dsw-*` 别名 token 覆盖（第三方主题）

它管不了：**行高、间距、以及「只给正文换字体」**这类直接写死在组件样式里的东西——既没有 token，也没有配置项。主题插件的字体设置是全局的，改了连侧栏和按钮一起变。

这类东西以前是散在各个功能插件里打补丁的（比如给 Markdown 预览插件塞一条聊天区的 `line-height`）。这个插件的存在就是为了把它们收在一处：全局视觉归全局视觉，功能插件归功能插件。

## 装

```sh
dsh plugin --profile web add github:yinguobing/dsh-theme
```

**Web UI**：**Plugins → Add plugin → Install a third-party plugin**，输入 `github:yinguobing/dsh-theme`，点 **Enable now**。

装完重启一次 `dsh web`（它在进程启动时组合插件）。重启会换访问令牌，浏览器里的旧地址会 401，用启动日志里新打印的 URL。

## 现在改了什么

- **阅读面字体**：对话正文和用户气泡用朱雀仿宋，UI（侧栏、按钮、输入框、代码）仍是黑体。字号沿用主题插件设置，行高按 1.65 走
- **对话区 Markdown 行高**：DSH 写死 32px（22px 字号下约 1.45），这里给 1.65
- **对话区段落与列表间距**：段落 0.85em，列表项 0.35em——列表块内部要明显紧于段间距，否则整块列表和上下文糊在一起
- **对话区代码行高**：单独压到 1.5，等宽代码不跟着正文变松

## 字体

`fonts/zhuque-fangsong.woff2` 是[朱雀仿宋](https://github.com/TrionesType/zhuque)的子集：GB2312 一级汉字 + 标点 + 拉丁，约 1.3 MB，覆盖现代中文文本 99.7% 以上的字符，生僻字回落到系统宋体。授权是 SIL OFL 1.1，见 `fonts/LICENSE.txt`。

浏览器侧先试 `local()`（本机装了同名字体就不下载），再由 `lib/index.js` 挂在 `api/dsh-theme/read-font.woff2` 上。所以这个插件的宿主侧不是空的：换了字体文件需要重启。

换字体只改两处：`src/styles.css` 里的 `@font-face` 和 `--dsh-read-font`，以及 `lib/index.js` 里的 `FONT_FILE`。

## 已知代价

选择器用 `[class*='_markdown_']`、`[class*='_bubble_']` 前缀匹配，因为 DSH 的类名是构建时哈希（`_markdown_rve47_5`）。DSH 若改掉这个命名规律，这些规则会**静默失效**——没有报错，只是样式不生效。改版后如果发现样式丢了，先查这里。

## 开发

```
src/index.jsx      只做一件事：把 styles.css 注入 <head>
src/styles.css     全部覆盖规则
lib/index.js       宿主侧：把字体文件出一个只读路由
build.mjs          esbuild → lib/client.js
```

只改样式：`node build.mjs`，刷新浏览器即可，不用重启。
改 `lib/index.js` 或换字体文件：要重启。
