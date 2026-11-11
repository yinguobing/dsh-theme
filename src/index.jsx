/**
 * dsh-theme — 全局视觉补丁。
 *
 * 内置的 `dsh-client-ui-theme` 能管：外观（light/dark/system）、三处字号、
 * 三处字体，以及通过 `ctx.theme` 注册的 `--dsw-*` token 覆盖。
 *
 * 它管不了的：行高、间距这类写死在组件样式里的值——没有 token，也没有配置项。
 * 那些就放这里，集中在一处，而不是散落在各个功能插件里。
 */

import css from './styles.css'

const STYLE_FLAG = 'data-dsh-theme-css'

if (typeof document !== 'undefined' && document.querySelector(`style[${STYLE_FLAG}]`) === null) {
  const tag = document.createElement('style')
  tag.setAttribute(STYLE_FLAG, '')
  tag.textContent = css
  document.head.appendChild(tag)
}

/**
 * 客户端插件体。这里只碰 document，不读任何 cordis 服务，所以不需要 inject。
 */
export function apply() {}
