// Textos legales: aviso legal (LSSI-CE art. 10), privacidad (RGPD/LOPDGDD) y cookies (LSSI-CE art. 22.2).
// Datos de la sociedad según el Registro Mercantil (BORME-A-2015-116-08, acto 256404).
// Tokens que se sustituyen al renderizar: {{email}}, {{privacy}}, {{cookies}}, {{legal}}.
import type { Lang } from './ui';

export type LegalKey = 'legal' | 'privacy' | 'cookies';
export const legalKeys: LegalKey[] = ['legal', 'privacy', 'cookies'];

export const company = {
  name: 'Bootdevelop SL',
  nif: 'B66549098',
  address: 'C/ Trafalgar, 4, planta 9, 08010 Barcelona',
  registry: { tomo: '44872', folio: '37', hoja: 'B-469973', inscripcion: '1' },
};

export const updated = '2026-05-12';

interface Section { h: string; p: string[] }
interface LegalDoc { nav: string; title: string; intro: string; sections: Section[] }

interface LegalDict {
  updatedLabel: string;
  idTitle: string;
  idLabels: { name: string; nif: string; address: string; email: string; registry: string };
  registry: string;
  docs: Record<LegalKey, LegalDoc>;
}

const reg = company.registry;

export const legal: Record<Lang, LegalDict> = {
  es: {
    updatedLabel: 'Última actualización',
    idTitle: 'Datos identificativos',
    idLabels: { name: 'Titular', nif: 'NIF', address: 'Domicilio social', email: 'Correo electrónico', registry: 'Datos registrales' },
    registry: `Registro Mercantil de Barcelona, tomo ${reg.tomo}, folio ${reg.folio}, hoja ${reg.hoja}, inscripción ${reg.inscripcion}ª`,
    docs: {
      legal: {
        nav: 'Aviso legal',
        title: 'Aviso legal',
        intro: 'Información sobre el titular de este sitio web y las condiciones de uso, conforme a la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE).',
        sections: [
          { h: 'Objeto', p: ['Este sitio web presenta los servicios de Bootdevelop SL. Su acceso es libre y gratuito, y no implica ninguna relación comercial con el titular.'] },
          { h: 'Uso del sitio', p: ['Al navegar por este sitio te comprometes a usarlo de forma lícita y a no realizar acciones que puedan dañarlo, sobrecargarlo o impedir su normal funcionamiento.'] },
          { h: 'Propiedad intelectual e industrial', p: ['Los textos, el diseño, el logotipo y la marca Bootdevelop pertenecen a Bootdevelop SL o a sus licenciantes. No está permitida su reproducción, distribución o transformación sin autorización previa por escrito, salvo para uso personal y privado.'] },
          { h: 'Responsabilidad', p: ['Procuramos que la información publicada sea correcta y esté actualizada, pero no garantizamos la ausencia de errores ni la disponibilidad ininterrumpida del sitio. Bootdevelop SL no se hace responsable del contenido de sitios de terceros enlazados desde esta web.'] },
          { h: 'Protección de datos y cookies', p: ['El tratamiento de datos personales se explica en la <a href="{{privacy}}">política de privacidad</a>. El uso de almacenamiento en el navegador se explica en la <a href="{{cookies}}">política de cookies</a>.'] },
          { h: 'Legislación aplicable', p: ['Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona, salvo que la normativa aplicable establezca otro fuero.'] },
        ],
      },
      privacy: {
        nav: 'Privacidad',
        title: 'Política de privacidad',
        intro: 'Cómo tratamos los datos personales que recibimos a través de este sitio web, conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
        sections: [
          { h: 'Responsable del tratamiento', p: ['Bootdevelop SL, con NIF B66549098 y domicilio en C/ Trafalgar, 4, planta 9, 08010 Barcelona. Para cualquier cuestión sobre privacidad puedes escribir a <a href="mailto:{{email}}">{{email}}</a>.'] },
          { h: 'Qué datos tratamos', p: ['Este sitio no tiene formularios, no usa herramientas de analítica y no instala cookies. Solo tratamos los datos que nos envías por correo electrónico: tu nombre, tu dirección de correo, la empresa y la información que incluyas en el mensaje.', 'Además, el proveedor de alojamiento registra datos técnicos de las visitas (como la dirección IP, el navegador y la fecha) para garantizar la seguridad y el funcionamiento del servicio.'] },
          { h: 'Finalidad y base legal', p: ['Usamos tus datos para responder a tu consulta y, en su caso, preparar una propuesta o gestionar la relación profesional. La base legal es la aplicación de medidas precontractuales a petición tuya y nuestro interés legítimo en atender las comunicaciones que recibimos (art. 6.1.b y 6.1.f RGPD).', 'Los registros técnicos del alojamiento se tratan por interés legítimo en mantener la seguridad del sitio.'] },
          { h: 'Conservación', p: ['Conservamos los datos el tiempo necesario para atender tu consulta. Si se inicia una relación profesional, durante la misma y, después, durante los plazos que exige la ley. Pasado ese tiempo, se eliminan.'] },
          { h: 'Destinatarios', p: ['No cedemos tus datos a terceros, salvo obligación legal. Nos apoyamos en dos proveedores que actúan como encargados del tratamiento: Google (Google Workspace, correo electrónico) y GitHub (alojamiento del sitio web).', 'Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En ese caso, la transferencia se ampara en el Marco de Privacidad de Datos UE-EE. UU. o en cláusulas contractuales tipo aprobadas por la Comisión Europea.'] },
          { h: 'Tus derechos', p: ['Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:{{email}}">{{email}}</a>.', 'Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>).'] },
        ],
      },
      cookies: {
        nav: 'Cookies',
        title: 'Política de cookies',
        intro: 'Información sobre el uso de cookies y tecnologías similares en este sitio web, conforme al artículo 22.2 de la LSSI-CE.',
        sections: [
          { h: 'Este sitio no usa cookies', p: ['No instalamos cookies propias ni de terceros, ni usamos herramientas de analítica, publicidad o seguimiento. Por eso no te mostramos ningún aviso de consentimiento.'] },
          { h: 'Preferencia de idioma', p: ['Cuando eliges un idioma, lo guardamos en el almacenamiento local de tu navegador (clave <code>lang</code>) para mostrarte la web en ese idioma en tu próxima visita. Solo contiene el código del idioma, no se envía a ningún servidor y está exenta de consentimiento porque responde a una preferencia que tú has elegido.', 'Puedes borrarla en cualquier momento desde la configuración de tu navegador, eliminando los datos de este sitio.'] },
          { h: 'Cambios', p: ['Si en el futuro incorporamos cookies que requieran consentimiento, actualizaremos esta política y te lo pediremos antes de instalarlas.'] },
        ],
      },
    },
  },

  en: {
    updatedLabel: 'Last updated',
    idTitle: 'Company details',
    idLabels: { name: 'Owner', nif: 'Tax ID (NIF)', address: 'Registered office', email: 'Email', registry: 'Registration' },
    registry: `Barcelona Commercial Registry, volume ${reg.tomo}, folio ${reg.folio}, sheet ${reg.hoja}, entry ${reg.inscripcion}`,
    docs: {
      legal: {
        nav: 'Legal notice',
        title: 'Legal notice',
        intro: 'Information about the owner of this website and its terms of use, as required by Spanish Law 34/2002 on information society services and electronic commerce (LSSI-CE).',
        sections: [
          { h: 'Purpose', p: ['This website presents the services of Bootdevelop SL. Access is free and does not create any business relationship with the owner.'] },
          { h: 'Use of the site', p: ['By browsing this site you agree to use it lawfully and not to take any action that could damage it, overload it or prevent it from working normally.'] },
          { h: 'Intellectual and industrial property', p: ['The texts, design, logo and the Bootdevelop brand belong to Bootdevelop SL or its licensors. They may not be reproduced, distributed or modified without prior written permission, except for personal and private use.'] },
          { h: 'Liability', p: ['We aim to keep the information on this site accurate and up to date, but we do not guarantee that it is free of errors or that the site will always be available. Bootdevelop SL is not responsible for the content of third-party sites linked from this website.'] },
          { h: 'Data protection and cookies', p: ['How we handle personal data is explained in the <a href="{{privacy}}">privacy policy</a>. Our use of browser storage is explained in the <a href="{{cookies}}">cookie policy</a>.'] },
          { h: 'Governing law', p: ['This legal notice is governed by Spanish law. Any dispute will be submitted to the courts of Barcelona, unless applicable law provides otherwise.'] },
        ],
      },
      privacy: {
        nav: 'Privacy',
        title: 'Privacy policy',
        intro: 'How we handle the personal data we receive through this website, in line with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
        sections: [
          { h: 'Data controller', p: ['Bootdevelop SL, tax ID B66549098, registered office at C/ Trafalgar, 4, planta 9, 08010 Barcelona, Spain. For any privacy question you can write to <a href="mailto:{{email}}">{{email}}</a>.'] },
          { h: 'What data we process', p: ['This site has no forms, uses no analytics tools and sets no cookies. We only process the data you send us by email: your name, email address, company and whatever information you include in your message.', 'In addition, our hosting provider records technical data about visits (such as IP address, browser and date) to keep the service secure and running.'] },
          { h: 'Purpose and legal basis', p: ['We use your data to reply to your enquiry and, where relevant, to prepare a proposal or manage our working relationship. The legal basis is taking steps at your request before entering into a contract and our legitimate interest in answering the messages we receive (Art. 6(1)(b) and 6(1)(f) GDPR).', 'Hosting logs are processed on the basis of our legitimate interest in keeping the site secure.'] },
          { h: 'Retention', p: ['We keep your data for as long as needed to handle your enquiry. If a working relationship begins, we keep it for the duration of that relationship and then for the periods required by law. After that, it is deleted.'] },
          { h: 'Recipients', p: ['We do not share your data with third parties unless required by law. We rely on two providers acting as data processors: Google (Google Workspace, email) and GitHub (website hosting).', 'Some of these providers may process data outside the European Economic Area. Where they do, the transfer is covered by the EU-US Data Privacy Framework or by standard contractual clauses approved by the European Commission.'] },
          { h: 'Your rights', p: ['You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to <a href="mailto:{{email}}">{{email}}</a>.', 'If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>).'] },
        ],
      },
      cookies: {
        nav: 'Cookies',
        title: 'Cookie policy',
        intro: 'Information about the use of cookies and similar technologies on this website, under Article 22.2 of Spanish Law 34/2002 (LSSI-CE).',
        sections: [
          { h: 'This site does not use cookies', p: ['We do not set our own or third-party cookies, and we do not use analytics, advertising or tracking tools. That is why we do not show a consent banner.'] },
          { h: 'Language preference', p: ['When you choose a language, we save it in your browser\'s local storage (key <code>lang</code>) so the site opens in that language on your next visit. It only holds the language code, is never sent to any server and is exempt from consent because it stores a preference you chose.', 'You can delete it at any time from your browser settings by clearing this site\'s data.'] },
          { h: 'Changes', p: ['If we ever add cookies that require consent, we will update this policy and ask for your consent before setting them.'] },
        ],
      },
    },
  },

  fr: {
    updatedLabel: 'Dernière mise à jour',
    idTitle: 'Identification de l\'éditeur',
    idLabels: { name: 'Éditeur', nif: 'N° d\'identification fiscale (NIF)', address: 'Siège social', email: 'E-mail', registry: 'Immatriculation' },
    registry: `Registre du commerce de Barcelone, volume ${reg.tomo}, folio ${reg.folio}, feuille ${reg.hoja}, inscription ${reg.inscripcion}`,
    docs: {
      legal: {
        nav: 'Mentions légales',
        title: 'Mentions légales',
        intro: 'Informations sur l\'éditeur de ce site et ses conditions d\'utilisation, conformément à la loi espagnole 34/2002 sur les services de la société de l\'information et le commerce électronique (LSSI-CE).',
        sections: [
          { h: 'Objet', p: ['Ce site présente les services de Bootdevelop SL. Son accès est libre et gratuit et n\'implique aucune relation commerciale avec l\'éditeur.'] },
          { h: 'Utilisation du site', p: ['En naviguant sur ce site, vous vous engagez à l\'utiliser de manière licite et à ne pas l\'endommager, le surcharger ou en empêcher le fonctionnement normal.'] },
          { h: 'Propriété intellectuelle et industrielle', p: ['Les textes, le design, le logo et la marque Bootdevelop appartiennent à Bootdevelop SL ou à ses concédants. Toute reproduction, distribution ou modification sans autorisation écrite préalable est interdite, sauf pour un usage personnel et privé.'] },
          { h: 'Responsabilité', p: ['Nous veillons à ce que les informations publiées soient exactes et à jour, sans toutefois garantir l\'absence d\'erreurs ni la disponibilité permanente du site. Bootdevelop SL n\'est pas responsable du contenu des sites tiers accessibles par des liens depuis ce site.'] },
          { h: 'Données personnelles et cookies', p: ['Le traitement des données personnelles est décrit dans la <a href="{{privacy}}">politique de confidentialité</a>. L\'utilisation du stockage du navigateur est décrite dans la <a href="{{cookies}}">politique de cookies</a>.'] },
          { h: 'Droit applicable', p: ['Les présentes mentions légales sont régies par le droit espagnol. Tout litige relève des tribunaux de Barcelone, sauf disposition légale contraire.'] },
        ],
      },
      privacy: {
        nav: 'Confidentialité',
        title: 'Politique de confidentialité',
        intro: 'Comment nous traitons les données personnelles reçues via ce site, conformément au Règlement (UE) 2016/679 (RGPD) et à la loi organique espagnole 3/2018 (LOPDGDD).',
        sections: [
          { h: 'Responsable du traitement', p: ['Bootdevelop SL, NIF B66549098, siège social C/ Trafalgar, 4, planta 9, 08010 Barcelone, Espagne. Pour toute question relative à la confidentialité, écrivez à <a href="mailto:{{email}}">{{email}}</a>.'] },
          { h: 'Données traitées', p: ['Ce site ne comporte aucun formulaire, n\'utilise aucun outil d\'analyse et ne dépose aucun cookie. Nous traitons uniquement les données que vous nous envoyez par e-mail : votre nom, votre adresse e-mail, votre entreprise et les informations contenues dans votre message.', 'Par ailleurs, notre hébergeur enregistre des données techniques sur les visites (adresse IP, navigateur, date) afin d\'assurer la sécurité et le bon fonctionnement du service.'] },
          { h: 'Finalités et base légale', p: ['Nous utilisons vos données pour répondre à votre demande et, le cas échéant, préparer une proposition ou gérer notre relation professionnelle. La base légale est l\'exécution de mesures précontractuelles à votre demande et notre intérêt légitime à répondre aux messages reçus (art. 6.1.b et 6.1.f du RGPD).', 'Les journaux techniques de l\'hébergeur sont traités sur la base de notre intérêt légitime à assurer la sécurité du site.'] },
          { h: 'Durée de conservation', p: ['Nous conservons vos données le temps nécessaire pour traiter votre demande. Si une relation professionnelle s\'engage, pendant toute sa durée puis pendant les délais prévus par la loi. Elles sont ensuite supprimées.'] },
          { h: 'Destinataires', p: ['Nous ne communiquons pas vos données à des tiers, sauf obligation légale. Nous faisons appel à deux prestataires agissant en tant que sous-traitants : Google (Google Workspace, messagerie) et GitHub (hébergement du site).', 'Certains de ces prestataires peuvent traiter des données hors de l\'Espace économique européen. Dans ce cas, le transfert est encadré par le cadre de protection des données UE-États-Unis ou par des clauses contractuelles types approuvées par la Commission européenne.'] },
          { h: 'Vos droits', p: ['Vous pouvez exercer vos droits d\'accès, de rectification, d\'effacement, d\'opposition, de limitation du traitement et de portabilité en écrivant à <a href="mailto:{{email}}">{{email}}</a>.', 'Si vous estimez que votre demande n\'a pas été correctement traitée, vous pouvez introduire une réclamation auprès de l\'autorité espagnole de protection des données (<a href="https://www.aepd.es" rel="noopener">www.aepd.es</a>) ou de l\'autorité de votre pays.'] },
        ],
      },
      cookies: {
        nav: 'Cookies',
        title: 'Politique de cookies',
        intro: 'Informations sur l\'utilisation des cookies et technologies similaires sur ce site, conformément à l\'article 22.2 de la loi espagnole 34/2002 (LSSI-CE).',
        sections: [
          { h: 'Ce site n\'utilise pas de cookies', p: ['Nous ne déposons aucun cookie, propre ou tiers, et n\'utilisons aucun outil d\'analyse, de publicité ou de suivi. C\'est pourquoi aucun bandeau de consentement n\'est affiché.'] },
          { h: 'Préférence de langue', p: ['Lorsque vous choisissez une langue, nous l\'enregistrons dans le stockage local de votre navigateur (clé <code>lang</code>) afin d\'afficher le site dans cette langue lors de votre prochaine visite. Elle ne contient que le code de la langue, n\'est jamais envoyée à un serveur et est exemptée de consentement car elle conserve un choix que vous avez fait.', 'Vous pouvez la supprimer à tout moment depuis les réglages de votre navigateur, en effaçant les données de ce site.'] },
          { h: 'Modifications', p: ['Si nous ajoutons un jour des cookies soumis à consentement, nous mettrons à jour cette politique et vous demanderons votre accord avant de les déposer.'] },
        ],
      },
    },
  },
};
