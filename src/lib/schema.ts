// Datos estructurados (schema.org, JSON-LD) para buscadores y asistentes de IA.
// Un único @graph por página: organización, sitio web, página, migas de pan y, según el caso, servicio.
import { ui, langs, serviceKeys, email, type Lang } from '../i18n/ui';
import { legal, company } from '../i18n/legal';
import { path, type Page } from '../i18n/routes';

const inLang = { es: 'es-ES', en: 'en', fr: 'fr' } as const;

export function buildSchema(opts: { site: URL; lang: Lang; page: Page; title: string; description: string }) {
  const { site, lang, page, title, description } = opts;
  const t = ui[lang];
  const abs = (p: string) => new URL(p, site).href;
  const orgId = abs('/#organization');
  const siteId = abs('/#website');
  const url = abs(path(lang, page));

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: 'Bootdevelop',
    legalName: company.name,
    url: site.href,
    logo: { '@type': 'ImageObject', url: abs('/brand/logo.png'), width: 422, height: 76 },
    image: abs('/brand/bootdevelop-social-v3.jpg'),
    description: t.meta.description,
    email,
    taxID: company.nif,
    vatID: `ES${company.nif}`,
    foundingDate: '2015-06-02',
    foundingLocation: { '@type': 'Place', name: 'Barcelona, Spain' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Trafalgar, 4, planta 9',
      postalCode: '08010',
      addressLocality: 'Barcelona',
      addressRegion: 'Cataluña',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email,
      availableLanguage: ['es', 'en', 'fr', 'ca'],
    },
    areaServed: 'Europe',
    knowsAbout: [
      'Custom software development', 'MVP development', 'Software architecture', 'Microservices',
      'Cloud computing', 'DevOps', 'Kubernetes', 'Artificial intelligence', 'Large language models', 'Cybersecurity', 'Penetration testing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.nav.services,
      itemListElement: serviceKeys.map((k) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: t.services[k].title, url: abs(path(lang, { kind: 'service', key: k })) },
      })),
    },
    // Añade aquí perfiles oficiales (LinkedIn, GitHub...) cuando existan
    sameAs: [] as string[],
  };

  const website = {
    '@type': 'WebSite',
    '@id': siteId,
    url: site.href,
    name: 'Bootdevelop',
    inLanguage: langs.map((l) => inLang[l]),
    publisher: { '@id': orgId },
  };

  // Migas de pan
  const home = { name: t.nav.home, url: abs(path(lang, { kind: 'home' })) };
  const crumbs =
    page.kind === 'home' ? [] :
    page.kind === 'service' ? [home, { name: t.services[page.key].title, url }] :
    page.kind === 'about' ? [home, { name: t.nav.about, url }] :
    page.kind === 'contact' ? [home, { name: t.nav.contact, url }] :
    page.kind === 'legal' ? [home, { name: legal[lang].docs[page.key].nav, url }] : [];

  const breadcrumb = crumbs.length
    ? {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
      }
    : undefined;

  const pageType =
    page.kind === 'about' ? 'AboutPage' :
    page.kind === 'contact' ? 'ContactPage' : 'WebPage';

  const webpage = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: inLang[lang],
    isPartOf: { '@id': siteId },
    about: { '@id': orgId },
    ...(breadcrumb && { breadcrumb: { '@id': breadcrumb['@id'] } }),
  };

  const extra: object[] = [];
  if (page.kind === 'service') {
    const s = t.services[page.key];
    extra.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: s.title,
      serviceType: s.title,
      description: s.intro,
      url,
      provider: { '@id': orgId },
      areaServed: 'Europe',
      availableLanguage: ['es', 'en', 'fr'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t.service.areas,
        itemListElement: s.areas.map((a) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: a } })),
      },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webpage, ...(breadcrumb ? [breadcrumb] : []), ...extra],
  };
}
