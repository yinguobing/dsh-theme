/**
 * dsh-theme — host half.
 *
 * Pure UI plugin: everything happens in the browser half (`./client`), which
 * injects a stylesheet for the visual details the built-in theme plugin can't
 * reach (it only exposes font size/family and `--dsw-*` tokens; line heights and
 * spacing are hard-coded in component styles).
 *
 * The empty apply exists so the plugin shows up in the profile tree.
 */

/** Host plugin body — no host-side behaviour for this surface plugin. */
export function apply() {}
