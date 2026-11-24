// Contenido para modelos de lenguaje (https://llmstxt.org), generado a partir de los mismos textos de la web.
import { ui, langs, languages, serviceKeys, email } from '../i18n/ui';
import { legal, legalKeys, company } from '../i18n/legal';
import { path } from '../i18n/routes';

const t = ui.en;

export function llmsTxt(site: URL) {
  const abs = (p: string) => new URL(p, site).href;
  const lines = [
    '# Bootdevelop',
    '',
    `> Bootdevelop (${company.name}) is a software engineering company based in Barcelona, Spain, founded in 2015. A senior technical team that builds custom software and MVPs, designs software architecture, runs cloud and DevOps, delivers AI solutions and performs cybersecurity assessments for businesses.`,
    '',
    'Key facts:',
    `- Legal name: ${company.name} (Spanish limited company), tax ID ${company.nif}`,
    '- Location: Barcelona, Spain. Works with clients across Spain and Europe.',
    '- Founded: 2015',
    '- Clients: startups, SMEs and established companies',
    '- Way of working: one senior technical point of contact, short iterations, direct communication with no intermediaries',
    `- Contact: ${email} (reply within one business day, from an engineer)`,
    `- Languages: ${langs.map((l) => languages[l]).join(', ')}`,
    '',
    '## Services',
    '',
    ...serviceKeys.map((k) => `- [${t.services[k].title}](${abs(path('en', { kind: 'service', key: k }))}): ${t.services[k].intro} Includes: ${t.services[k].areas.join(', ')}.`),
    '',
    '## Company',
    '',
    `- [About Bootdevelop](${abs(path('en', { kind: 'about' }))}): ${t.meta.aboutDescription}`,
    `- [Contact](${abs(path('en', { kind: 'contact' }))}): ${t.meta.contactDescription}`,
    `- [Home](${abs(path('en', { kind: 'home' }))}): ${t.meta.description}`,
  ];
  lines.push(
    '',
    '## Other languages',
    '',
    ...langs.filter((l) => l !== 'en').map((l) => `- [${languages[l]}](${abs(`/${l}/`)}): same content in ${languages[l]}`),
    '',
    '## Optional',
    '',
    `- [Full site content](${abs('/llms-full.txt')}): every page as plain text in one file`,
    ...legalKeys.map((k) => `- [${legal.en.docs[k].title}](${abs(path('en', { kind: 'legal', key: k }))})`),
    '',
  );
  return lines.join('\n');
}

export function llmsFullTxt(site: URL) {
  const abs = (p: string) => new URL(p, site).href;
  const out: string[] = [
    '# Bootdevelop: full site content',
    '',
    `> Complete text of ${abs('/')} in English, for language models. Summary and links: ${abs('/llms.txt')}`,
    '',
    `## ${t.hero.title}`,
    '',
    `Source: ${abs(path('en', { kind: 'home' }))}`,
    '',
    t.hero.subtitle,
    '',
    `### ${t.home.approachTitle}`,
    '',
    t.home.approachText,
    '',
    ...t.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`),
    '',
    `### ${t.home.whyTitle}`,
    '',
    ...t.why.map((w) => `- ${w.title}: ${w.text}`),
    '',
  ];
  for (const k of serviceKeys) {
    const s = t.services[k];
    out.push(`## ${s.title}`, '', `Source: ${abs(path('en', { kind: 'service', key: k }))}`, '', s.intro, '', ...s.body.flatMap((p) => [p, '']), `${t.service.areas}:`, ...s.areas.map((a) => `- ${a}`), '');
  }
  out.push(
    `## ${t.about.title}`, '', `Source: ${abs(path('en', { kind: 'about' }))}`, '', t.about.text, '',
    ...t.about.body.flatMap((p) => [p, '']),
    `### ${t.about.valuesTitle}`, '', ...t.about.values.map((v) => `- ${v.title}: ${v.text}`), '',
    `## ${t.contact.title}`, '', `Source: ${abs(path('en', { kind: 'contact' }))}`, '', t.contact.text, '',
    `- ${t.contact.emailLabel}: ${email}`,
    `- ${t.contact.locationLabel}: ${t.contact.location}`,
    `- ${t.contact.responseLabel}: ${t.contact.response}`,
    '', t.contact.tipsTitle, ...t.contact.tips.map((x) => `- ${x}`), '',
    '## Company details', '',
    `- Legal name: ${company.name}`,
    `- Tax ID (NIF): ${company.nif}`,
    `- Registered office: ${company.address}, Spain`,
    `- ${legal.en.registry}`,
    '',
  );
  return out.join('\n');
}
