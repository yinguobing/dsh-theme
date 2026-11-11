# dsh-theme

DeepSeek Harness 的全局视觉补丁——**补内置主题插件到不了的地方**。

## 为什么需要它

内置的 `@deepseek-ai/dsh-client-ui-theme` 能管：

- 外观：`light` / `dark` / `system`
- 正文、代码、终端三处字号（分别 10–22 / 10–16 / 10–20 px）
- 三处字体栈
- 通过 `ctx.theme` 注册 `--dsw-*` 别名 token 覆盖（第三方主题）

它管不了：**行高、间距**这类直接写死在组件样式里的值——既没有 token，也没有配置项。

这类东西以前是散在各个功能插件里打补丁的（比如给 Markdown 预览插件塞一条聊天区的 `line-height`）。这个插件的存在就是为了把它们收在一处：全局视觉归全局视觉，功能插件归功能插件。

## 装

```sh
dsh plugin --profile web add github:yinguobing/dsh-theme
```

**Web UI**：**Plugins → Add plugin → Install a third-party plugin**，输入 `github:yinguobing/dsh-theme`，点 **Enable now**。

装完重启一次 `dsh web`（它在进程启动时组合插件）。重启会换访问令牌，浏览器里的旧地址会 401，用启动日志里新打印的 URL。

## 现在改了什么

| 位置 | DSH 默认 | 这里 |
| --- | --- | --- |
| 对话区 Markdown 行高 | 写死 32px（22px 字号下 ≈ 1.45） | 1.65 |
| 对话区段落/列表间距 | 16px | 0.85em |
| 对话区代码块行高 | 跟随 | 1.5 |

选择器用 `[class*='_markdown_']` 前缀匹配，因为 DSH 的类名是构建时哈希（`_markdown_rve47_5`）。DSH 若改掉这个命名规律，这些规则会**静默失效**——这是这个方案的固有代价。

## 开发

```
src/index.jsx    只做一件事：把 styles.css 注入 <head>
src/styles.css   全部覆盖规则
build.mjs        esbuild → lib/client.js
```

改完 `node build.mjs`，刷新浏览器即可，不用重启。
