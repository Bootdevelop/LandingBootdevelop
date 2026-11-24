import { langs, serviceKeys, type Lang, type ServiceKey } from './ui';
import { legalKeys, type LegalKey } from './legal';

// URLs traducidas por idioma
const slugs = {
  services: { es: 'servicios', en: 'services', fr: 'services' },
  about: { es: 'empresa', en: 'about', fr: 'a-propos' },
  contact: { es: 'contacto', en: 'contact', fr: 'contact' },
} as const;

export const legalSlugs: Record<LegalKey, Record<Lang, string>> = {
  legal: { es: 'aviso-legal', en: 'legal-notice', fr: 'mentions-legales' },
  privacy: { es: 'privacidad', en: 'privacy', fr: 'confidentialite' },
  cookies: { es: 'cookies', en: 'cookies', fr: 'cookies' },
};

export const serviceSlugs: Record<ServiceKey, Record<Lang, string>> = {
  software: { es: 'desarrollo-a-medida', en: 'custom-software', fr: 'developpement-sur-mesure' },
  mvp: { es: 'mvp', en: 'mvp', fr: 'mvp' },
  architecture: { es: 'arquitectura-microservicios', en: 'architecture-microservices', fr: 'architecture-microservices' },
  cloud: { es: 'cloud-devops', en: 'cloud-devops', fr: 'cloud-devops' },
  ai: { es: 'inteligencia-artificial', en: 'artificial-intelligence', fr: 'intelligence-artificielle' },
  security: { es: 'ciberseguridad', en: 'cybersecurity', fr: 'cybersecurite' },
};

export type Page =
  | { kind: 'home' }
  | { kind: 'service'; key: ServiceKey }
  | { kind: 'about' }
  | { kind: 'contact' }
  | { kind: 'legal'; key: LegalKey };

export function path(lang: Lang, page: Page): string {
  switch (page.kind) {
    case 'home': return `/${lang}/`;
    case 'service': return `/${lang}/${slugs.services[lang]}/${serviceSlugs[page.key][lang]}/`;
    case 'about': return `/${lang}/${slugs.about[lang]}/`;
    case 'contact': return `/${lang}/${slugs.contact[lang]}/`;
    case 'legal': return `/${lang}/${legalSlugs[page.key][lang]}/`;
  }
}

export const alternates = (page: Page) =>
  Object.fromEntries(langs.map((l) => [l, path(l, page)])) as Record<Lang, string>;

/** Páginas del sitio, para getStaticPaths */
export function allPages(): { lang: Lang; page: Page; slug: string | undefined }[] {
  const pages: Page[] = [
    { kind: 'home' },
    ...serviceKeys.map((key) => ({ kind: 'service', key }) as Page),
    { kind: 'about' },
    { kind: 'contact' },
    ...legalKeys.map((key) => ({ kind: 'legal', key }) as Page),
  ];
  return langs.flatMap((lang) =>
    pages.map((page) => {
      const rest = path(lang, page).slice(lang.length + 2).replace(/\/$/, '');
      return { lang, page, slug: rest || undefined };
    }),
  );
}
