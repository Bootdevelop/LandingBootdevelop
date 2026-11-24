// Sitemap con todas las páginas en los tres idiomas y sus alternativas hreflang.
import type { APIContext } from 'astro';
import { langs, type Lang } from '../i18n/ui';
import { allPages, alternates, type Page } from '../i18n/routes';

interface Entry { loc: string; alts: Partial<Record<Lang, string>>; xDefault: boolean; lastmod?: Date }

export async function GET({ site }: APIContext) {
  const abs = (p: string) => new URL(p, site).href;
  const entries: Entry[] = [];

  const add = (lang: Lang, page: Page, opts: Partial<Entry> = {}) => {
    const alt = alternates(page);
    entries.push({ loc: abs(alt[lang]), alts: Object.fromEntries(langs.map((l) => [l, abs(alt[l])])), xDefault: true, ...opts });
  };

  for (const { lang, page } of allPages()) add(lang, page);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((e) => {
    const links = Object.entries(e.alts).map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`);
    if (e.xDefault) links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('/')}"/>`);
    return `  <url>\n    <loc>${e.loc}</loc>\n${e.lastmod ? `    <lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>\n` : ''}${links.join('\n')}\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
