// robots.txt: todo el sitio es público, también para los rastreadores de buscadores y asistentes de IA.
import type { APIContext } from 'astro';

// Se citan explícitamente para dejar clara la intención; con "User-agent: *" ya tendrían acceso.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'MistralAI-User', 'CCBot',
];

export function GET({ site }: APIContext) {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /404.html',
    '',
    '# AI search and assistants are welcome. A summary for language models is at /llms.txt',
    ...aiBots.map((b) => `User-agent: ${b}`),
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', site).href}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
