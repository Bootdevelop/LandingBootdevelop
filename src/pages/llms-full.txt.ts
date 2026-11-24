import type { APIContext } from 'astro';
import { llmsFullTxt } from '../lib/llms';

export async function GET({ site }: APIContext) {
  return new Response(llmsFullTxt(site!), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
