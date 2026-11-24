import type { APIContext } from 'astro';
import { llmsTxt } from '../lib/llms';

export async function GET({ site }: APIContext) {
  return new Response(llmsTxt(site!), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
