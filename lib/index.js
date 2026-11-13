/**
 * dsh-theme — host half.
 *
 * The visual overrides themselves live in the browser half (`./client`), which
 * injects a stylesheet for the details the built-in theme plugin can't reach
 * (it only exposes font size/family and `--dsw-*` tokens; line heights, spacing
 * and a separate reading face are hard-coded in component styles).
 *
 * This half does one thing: hand the browser the reading typeface. The font is a
 * subset of Zhuque Fangsong (SIL OFL 1.1, see `fonts/LICENSE.txt`), too big to
 * inline in the bundle and not addressable from the browser any other way, so it
 * is served from the package directory over an authenticated route. The
 * stylesheet still tries `local()` first, so an installed copy costs no download.
 */

import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Route the client stylesheet requests; relative to the app root. */
const ROUTE = '/api/dsh-theme/read-font.woff2'

/** Subset shipped with the package, one directory above `lib/`. */
const FONT_FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'fonts', 'zhuque-fangsong.woff2')

const HEADERS = {
  'content-type': 'font/woff2',
  // The file only changes with the package version, so it can be cached hard.
  'cache-control': 'private, max-age=31536000, immutable',
  'x-content-type-options': 'nosniff',
}

/** Host plugin body — serve the reading font, and nothing else. */
export function apply(ctx) {
  /** Read once on first request; cleared on failure so a fixed file recovers. */
  let pending

  const read = () => {
    pending ??= readFile(FONT_FILE).catch((error) => {
      pending = undefined
      throw error
    })
    return pending
  }

  const serve = async (request) => {
    try {
      const bytes = await read()
      return new Response(request.method === 'HEAD' ? null : bytes, {
        headers: { ...HEADERS, 'content-length': String(bytes.byteLength) },
      })
    } catch {
      return new Response('reading font unavailable', {
        status: 404,
        headers: { 'cache-control': 'no-store' },
      })
    }
  }

  // A styling plugin must never take the host down: a missing route only means
  // the stylesheet falls back to the system serif.
  try {
    ctx.effect(
      () => ctx.connection.fetch.register({ path: ROUTE, methods: ['GET', 'HEAD'], requestBody: 'buffered', fetch: serve }),
      'dsh-theme: reading font route',
    )
  } catch (error) {
    console.warn(`dsh-theme: reading font route unavailable (${error?.message ?? error}); falling back to system serif`)
  }
}

/** Load after the connection service exists; the route registration needs it. */
export const inject = ['connection']
