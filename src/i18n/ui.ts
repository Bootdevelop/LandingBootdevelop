export const languages = { es: 'Español', en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const email = 'support@bootdevelop.com';

export type ServiceKey = 'software' | 'mvp' | 'architecture' | 'cloud' | 'ai' | 'security';
export const serviceKeys: ServiceKey[] = ['software', 'mvp', 'architecture', 'cloud', 'ai', 'security'];

interface Service {
  title: string;
  short: string;
  intro: string;
  body: string[];
  areas: string[];
}

interface Dict {
  meta: { home: string; description: string; services: string; about: string; contact: string };
  nav: { home: string; services: string; allServices: string; about: string; contact: string; cta: string; menu: string; language: string };
  hero: { badge: string; title: string; subtitle: string; primary: string; secondary: string };
  home: {
    servicesTitle: string;
    servicesText: string;
    approachTitle: string;
    approachText: string;
    whyTitle: string;
  };
  steps: { title: string; text: string }[];
  why: { title: string; text: string }[];
  service: { areas: string; cta: string; securityCta: string };
  services: Record<ServiceKey, Service>;
  about: { title: string; text: string; body: string[]; valuesTitle: string; values: { title: string; text: string }[]; };
  contact: { title: string; text: string; emailLabel: string; locationLabel: string; location: string; responseLabel: string; response: string; write: string; copy: string; copied: string; tipsTitle: string; tips: string[] };
  cta: { title: string; text: string; button: string };
  footer: { tagline: string; rights: string; company: string };
}

export const ui: Record<Lang, Dict> = {
  es: {
    meta: {
      home: 'Bootdevelop | Desarrollo de software, cloud e IA para empresas',
      description: 'Servicios IT para empresas: desarrollo de software a medida, MVP, arquitectura de microservicios, cloud y DevOps, inteligencia artificial y seguridad.',
      services: 'Servicios',
      about: 'Empresa',
      contact: 'Contacto',
    },
    nav: { home: 'Inicio', services: 'Servicios', allServices: 'Todos los servicios', about: 'Empresa', contact: 'Contacto', cta: 'Contactar', menu: 'Menú', language: 'Idioma' },
    hero: {
      badge: 'Ingeniería de software para empresas',
      title: 'Tecnología que impulsa tu negocio',
      subtitle: 'Desarrollamos software a medida, diseñamos arquitecturas cloud y aplicamos inteligencia artificial. Del primer MVP a plataformas complejas en producción.',
      primary: 'Hablemos de tu proyecto',
      secondary: 'Ver servicios',
    },
    home: {
      servicesTitle: 'Nuestros servicios',
      servicesText: 'Un único equipo para diseñar, construir y operar tus soluciones tecnológicas.',
      approachTitle: 'Cómo trabajamos',
      approachText: 'Un proceso claro, con entregas frecuentes y visibilidad total.',
      whyTitle: 'Por qué Bootdevelop',
    },
    steps: [
      { title: 'Análisis', text: 'Entendemos tus objetivos, el contexto técnico y las prioridades.' },
      { title: 'Propuesta', text: 'Definimos alcance, arquitectura, plazos y presupuesto.' },
      { title: 'Desarrollo', text: 'Iteraciones cortas con entregas y seguimiento continuo.' },
      { title: 'Despliegue y soporte', text: 'Puesta en producción, monitorización y mantenimiento.' },
    ],
    why: [
      { title: 'Experiencia sénior', text: 'Ingenieros con más de una década en proyectos reales.' },
      { title: 'Comunicación directa', text: 'Un interlocutor técnico durante todo el proyecto.' },
      { title: 'Calidad y seguridad', text: 'Buenas prácticas, pruebas y seguridad desde el inicio.' },
      { title: 'Preparado para crecer', text: 'Software diseñado para escalar con tu negocio, de los primeros usuarios a miles.' },
    ],
    service: { areas: 'Cómo podemos ayudarte', cta: 'Solicitar propuesta', securityCta: 'Hablar de seguridad' },
    services: {
      software: {
        title: 'Desarrollo de software a medida',
        short: 'Aplicaciones web, móviles y backends.',
        intro: 'Construimos el software que tu negocio necesita, adaptado a tus procesos e integrado con los sistemas que ya utilizas.',
        body: ["Cada empresa trabaja de una forma distinta, y su software debería reflejarlo. Diseñamos y desarrollamos aplicaciones a medida que se adaptan a tus procesos, ya sea una plataforma web, una app móvil o el backend que lo conecta todo.", "Nos integramos con lo que ya utilizas, desde un ERP o un CRM hasta servicios de terceros, y cuando hace falta modernizamos sistemas existentes sin detener el negocio."],
        areas: ["Aplicaciones web y móviles", "Backends y APIs", "Integraciones con ERP, CRM y terceros", "Modernización de sistemas existentes"],
      },
      mvp: {
        title: 'Desarrollo de MVP',
        short: 'De la idea al producto en semanas.',
        intro: 'Convertimos una idea en un producto funcional en pocas semanas, con una base técnica preparada para crecer.',
        body: ["Cuando una idea necesita validarse, lo importante es llegar a usuarios reales cuanto antes sin comprometer el futuro del producto.", "Te ayudamos a decidir qué construir primero, lo desarrollamos en pocas semanas y lo ponemos en producción sobre una base técnica que pueda crecer contigo."],
        areas: ["Definición de alcance y prioridades", "Diseño y prototipado", "Desarrollo y lanzamiento", "Evolución a partir de datos reales"],
      },
      architecture: {
        title: 'Arquitectura de software',
        short: 'Microservicios, APIs y sistemas escalables.',
        intro: 'Diseñamos y evolucionamos arquitecturas de software que escalan con tu negocio y se mantienen con facilidad.',
        body: ["Cuando un producto crece, la arquitectura marca la diferencia entre avanzar con agilidad o quedarse atascado. Revisamos lo que tienes, detectamos los cuellos de botella y proponemos una evolución realista.", "Trabajamos con microservicios, arquitecturas orientadas a eventos y APIs bien definidas, siempre buscando sistemas escalables y fáciles de mantener, sin añadir complejidad innecesaria."],
        areas: ["Revisión de arquitectura", "Microservicios y eventos", "Diseño de APIs", "Rendimiento y escalabilidad"],
      },
      cloud: {
        title: 'Cloud y DevOps',
        short: 'Migración cloud, Kubernetes y CI/CD.',
        intro: 'Llevamos tu infraestructura a la nube y automatizamos su operación para desplegar más rápido y con menos riesgo.',
        body: ["Llevamos tu infraestructura a la nube o mejoramos la que ya tienes, en AWS, Azure u otros proveedores.", "Automatizamos despliegues, definimos la infraestructura como código y añadimos la monitorización necesaria para que tu equipo publique con confianza y los costes se mantengan bajo control."],
        areas: ["Migraciones a la nube", "Kubernetes y contenedores", "CI/CD e infraestructura como código", "Monitorización y costes"],
      },
      ai: {
        title: 'Soluciones de IA',
        short: 'Asistentes con LLM, automatización y datos.',
        intro: 'Aplicamos inteligencia artificial a casos de uso concretos para automatizar tareas y aprovechar mejor tus datos.',
        body: ["La inteligencia artificial aporta valor cuando resuelve un problema concreto. Analizamos dónde puede ayudar en tu negocio y la llevamos a producción de forma práctica.", "Desde asistentes que responden sobre tu documentación hasta la automatización de tareas repetitivas o el análisis de datos, integramos la IA en tus sistemas cuidando la privacidad y el control de la información."],
        areas: ["Asistentes y chatbots con LLM", "Búsqueda sobre documentación interna", "Automatización de procesos", "Análisis de datos"],
      },
      security: {
        title: 'Ciberseguridad',
        short: 'Auditorías de seguridad y pentesting.',
        intro: "Revisamos la seguridad de tus aplicaciones e infraestructura cloud y comprobamos su resistencia como lo haría un atacante, siempre de forma controlada.",
        body: ["La seguridad forma parte de cómo trabajamos en cada proyecto. Además, ayudamos a empresas a conocer el estado real de sus aplicaciones e infraestructura mediante auditorías de seguridad y pruebas de intrusión.", "Cada caso es diferente, así que adaptamos el alcance a tu entorno y seguimos metodologías abiertas y reconocidas. Al final recibes un informe claro, con los riesgos priorizados y un plan para corregirlos, y si lo necesitas te acompañamos en la remediación."],
        areas: ["Auditorías de seguridad", "Pruebas de intrusión (pentesting)", "Revisión de código y configuración", "Remediación y seguimiento"],
      },
    },
    about: {
      title: 'Sobre Bootdevelop',
      text: 'Una empresa de ingeniería de software con sede en Barcelona.',
      body: [
        "Bootdevelop nació en Barcelona en 2015 con una idea sencilla: construir software que funcione en producción y que las empresas puedan mantener y hacer crecer. Desde entonces hemos acompañado a startups, pymes y empresas consolidadas en proyectos de muy distinta escala.",
        "Hoy combinamos desarrollo, arquitectura, cloud y seguridad para ofrecer soluciones completas. Trabajamos como un equipo técnico sénior que se implica en cada proyecto de principio a fin, con comunicación directa y sin intermediarios.",
        "Apostamos por relaciones a largo plazo: preferimos entender bien tu negocio antes de escribir la primera línea de código, y seguir a tu lado cuando el producto ya está en manos de tus usuarios."
      ],
      valuesTitle: 'Nuestros principios',
      values: [
        { title: 'Transparencia', text: 'Visibilidad total del avance, del código y de los costes.' },
        { title: 'Calidad', text: 'Software probado, documentado y fácil de mantener.' },
        { title: 'Compromiso', text: 'Nos responsabilizamos del resultado, no solo de las horas.' },
      ],
    },
    contact: {
      title: 'Contacto',
      text: 'Cuéntanos qué necesitas. Te responderá un ingeniero, no un comercial.',
      emailLabel: 'Correo',
      locationLabel: 'Ubicación',
      location: 'Barcelona, España',
      responseLabel: 'Tiempo de respuesta',
      response: 'Menos de 24 horas laborables',
      write: 'Escribir un correo', copy: 'Copiar dirección', copied: 'Copiado', tipsTitle: 'Para responderte mejor, cuéntanos:', tips: ['Qué necesitas y en qué punto está el proyecto', 'Plazos o fechas importantes', 'Tecnologías o sistemas que ya utilizáis'],
    },
    cta: { title: '¿Tienes un proyecto en mente?', text: 'Cuéntanos qué necesitas y te responderemos en menos de 24 horas.', button: 'Contactar' },
    footer: { tagline: 'Desarrollo de software, cloud e inteligencia artificial para empresas.', rights: 'Todos los derechos reservados.', company: 'Empresa' },
  },

  en: {
    meta: {
      home: 'Bootdevelop | Software development, cloud and AI for businesses',
      description: 'IT services for businesses: custom software development, MVPs, microservices architecture, cloud and DevOps, artificial intelligence and security.',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    nav: { home: 'Home', services: 'Services', allServices: 'All services', about: 'About', contact: 'Contact', cta: 'Contact us', menu: 'Menu', language: 'Language' },
    hero: {
      badge: 'Software engineering for businesses',
      title: 'Technology that moves your business forward',
      subtitle: 'We build custom software, design cloud architectures and apply artificial intelligence. From a first MVP to complex platforms in production.',
      primary: 'Discuss your project',
      secondary: 'View services',
    },
    home: {
      servicesTitle: 'Our services',
      servicesText: 'One team to design, build and run your technology.',
      approachTitle: 'How we work',
      approachText: 'A clear process with frequent deliveries and full visibility.',
      whyTitle: 'Why Bootdevelop',
    },
    steps: [
      { title: 'Discovery', text: 'We understand your goals, technical context and priorities.' },
      { title: 'Proposal', text: 'We define scope, architecture, timeline and budget.' },
      { title: 'Development', text: 'Short iterations with regular deliveries and follow-up.' },
      { title: 'Launch and support', text: 'Production release, monitoring and maintenance.' },
    ],
    why: [
      { title: 'Senior expertise', text: 'Engineers with over a decade of hands-on experience.' },
      { title: 'Direct communication', text: 'One technical point of contact throughout the project.' },
      { title: 'Quality and security', text: 'Best practices, testing and security from day one.' },
      { title: 'Built to scale', text: 'Software designed to grow with your business, from the first users to thousands.' },
    ],
    service: { areas: 'How we can help', cta: 'Request a proposal', securityCta: 'Talk about security' },
    services: {
      software: {
        title: 'Custom Software Development',
        short: 'Web, mobile and backend applications.',
        intro: 'We build the software your business needs, shaped around your processes and integrated with the systems you already use.',
        body: ["Every company works differently, and its software should reflect that. We design and build custom applications around your processes, whether that is a web platform, a mobile app or the backend that ties everything together.", "We integrate with what you already use, from an ERP or CRM to third-party services, and when needed we modernise existing systems without stopping the business."],
        areas: ["Web and mobile applications", "Backends and APIs", "ERP, CRM and third-party integrations", "Modernising existing systems"],
      },
      mvp: {
        title: 'MVP Development',
        short: 'From idea to product in weeks.',
        intro: 'We turn an idea into a working product in a few weeks, on a technical foundation ready to grow.',
        body: ["When an idea needs validating, what matters is reaching real users quickly without compromising the product’s future.", "We help you decide what to build first, develop it in a few weeks and launch it on a technical foundation that can grow with you."],
        areas: ["Scope and priorities", "Design and prototyping", "Development and launch", "Iterating on real data"],
      },
      architecture: {
        title: 'Software Architecture',
        short: 'Microservices, APIs and scalable systems.',
        intro: 'We design and evolve software architectures that scale with your business and stay easy to maintain.',
        body: ["As a product grows, architecture makes the difference between moving fast and getting stuck. We review what you have, find the bottlenecks and propose a realistic path forward.", "We work with microservices, event-driven architectures and well-defined APIs, always aiming for systems that scale and stay easy to maintain, without unnecessary complexity."],
        areas: ["Architecture review", "Microservices and events", "API design", "Performance and scalability"],
      },
      cloud: {
        title: 'Cloud & DevOps',
        short: 'Cloud migration, Kubernetes and CI/CD.',
        intro: 'We move your infrastructure to the cloud and automate its operation so you ship faster with less risk.',
        body: ["We move your infrastructure to the cloud or improve the one you already have, on AWS, Azure or other providers.", "We automate deployments, define infrastructure as code and put the right monitoring in place, so your team ships with confidence and costs stay under control."],
        areas: ["Cloud migration", "Kubernetes and containers", "CI/CD and infrastructure as code", "Monitoring and cost control"],
      },
      ai: {
        title: 'AI Solutions',
        short: 'LLM assistants, automation and data.',
        intro: 'We apply artificial intelligence to concrete use cases to automate work and make better use of your data.',
        body: ["Artificial intelligence adds value when it solves a specific problem. We look at where it can help your business and take it to production in a practical way.", "From assistants that answer questions about your documentation to automating repetitive work or analysing data, we integrate AI into your systems while keeping your information private and under control."],
        areas: ["LLM assistants and chatbots", "Search over internal documentation", "Process automation", "Data analysis"],
      },
      security: {
        title: 'Cybersecurity',
        short: 'Security assessments and penetration testing.',
        intro: "We review the security of your applications and cloud infrastructure and test how they hold up against a real attacker, always in a controlled way.",
        body: ["Security is part of how we work on every project. We also help companies understand the real state of their applications and infrastructure through security assessments and penetration testing.", "Every case is different, so we shape the scope around your environment and follow open, recognised methodologies. You get a clear report with prioritised risks and a plan to fix them, and we can support you through the remediation."],
        areas: ["Security assessments", "Penetration testing", "Code and configuration review", "Remediation and follow-up"],
      },
    },
    about: {
      title: 'About Bootdevelop',
      text: 'A software engineering company based in Barcelona.',
      body: [
        "Bootdevelop was founded in Barcelona in 2015 with a simple idea: build software that works in production and that companies can maintain and grow. Since then we have worked with startups, SMEs and established companies on projects of very different scale.",
        "Today we combine development, architecture, cloud and security to deliver complete solutions. We work as a senior technical team involved in every project from start to finish, with direct communication and no intermediaries.",
        "We believe in long-term relationships: we would rather understand your business properly before writing the first line of code, and stay by your side once the product is in your users’ hands."
      ],
      valuesTitle: 'Our principles',
      values: [
        { title: 'Transparency', text: 'Full visibility of progress, code and costs.' },
        { title: 'Quality', text: 'Tested, documented software that is easy to maintain.' },
        { title: 'Commitment', text: 'We own the outcome, not just the hours.' },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'Tell us what you need. An engineer will reply, not a salesperson.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'Barcelona, Spain',
      responseLabel: 'Response time',
      response: 'Within one business day',
      write: 'Write an email', copy: 'Copy address', copied: 'Copied', tipsTitle: 'To help us reply faster, include:', tips: ['What you need and where the project stands', 'Timelines or key dates', 'Technologies or systems you already use'],
    },
    cta: { title: 'Have a project in mind?', text: 'Tell us what you need and we will reply within 24 hours.', button: 'Contact us' },
    footer: { tagline: 'Software development, cloud and artificial intelligence for businesses.', rights: 'All rights reserved.', company: 'Company' },
  },

  fr: {
    meta: {
      home: 'Bootdevelop | Développement logiciel, cloud et IA pour les entreprises',
      description: 'Services informatiques pour les entreprises : développement sur mesure, MVP, architecture microservices, cloud et DevOps, intelligence artificielle et sécurité.',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
    },
    nav: { home: 'Accueil', services: 'Services', allServices: 'Tous les services', about: 'À propos', contact: 'Contact', cta: 'Nous contacter', menu: 'Menu', language: 'Langue' },
    hero: {
      badge: 'Ingénierie logicielle pour les entreprises',
      title: 'La technologie qui fait avancer votre entreprise',
      subtitle: 'Nous développons des logiciels sur mesure, concevons des architectures cloud et appliquons l’intelligence artificielle. Du premier MVP aux plateformes complexes en production.',
      primary: 'Parlons de votre projet',
      secondary: 'Voir les services',
    },
    home: {
      servicesTitle: 'Nos services',
      servicesText: 'Une seule équipe pour concevoir, développer et exploiter vos solutions.',
      approachTitle: 'Notre méthode',
      approachText: 'Un processus clair, des livraisons fréquentes et une visibilité totale.',
      whyTitle: 'Pourquoi Bootdevelop',
    },
    steps: [
      { title: 'Analyse', text: 'Nous comprenons vos objectifs, votre contexte technique et vos priorités.' },
      { title: 'Proposition', text: 'Nous définissons le périmètre, l’architecture, les délais et le budget.' },
      { title: 'Développement', text: 'Des itérations courtes avec des livraisons et un suivi continu.' },
      { title: 'Déploiement et support', text: 'Mise en production, supervision et maintenance.' },
    ],
    why: [
      { title: 'Expertise senior', text: 'Des ingénieurs avec plus de dix ans de projets concrets.' },
      { title: 'Communication directe', text: 'Un interlocuteur technique tout au long du projet.' },
      { title: 'Qualité et sécurité', text: 'Bonnes pratiques, tests et sécurité dès le départ.' },
      { title: 'Conçu pour évoluer', text: 'Un logiciel pensé pour grandir avec votre activité, des premiers utilisateurs à des milliers.' },
    ],
    service: { areas: 'Comment nous pouvons vous aider', cta: 'Demander une proposition', securityCta: 'Parler de sécurité' },
    services: {
      software: {
        title: 'Développement de logiciels sur mesure',
        short: 'Applications web, mobiles et backends.',
        intro: 'Nous développons le logiciel dont votre entreprise a besoin, adapté à vos processus et intégré à vos systèmes existants.',
        body: ["Chaque entreprise fonctionne à sa manière, et son logiciel devrait le refléter. Nous concevons et développons des applications sur mesure adaptées à vos processus : plateforme web, application mobile ou backend qui relie l’ensemble.", "Nous nous intégrons à vos outils existants, d’un ERP ou CRM aux services tiers, et lorsque c’est nécessaire nous modernisons les systèmes existants sans interrompre l’activité."],
        areas: ["Applications web et mobiles", "Backends et API", "Intégrations ERP, CRM et services tiers", "Modernisation de systèmes existants"],
      },
      mvp: {
        title: 'Développement de MVP',
        short: 'De l’idée au produit en quelques semaines.',
        intro: 'Nous transformons une idée en produit fonctionnel en quelques semaines, sur une base technique prête à évoluer.',
        body: ["Quand une idée doit être validée, l’essentiel est d’atteindre de vrais utilisateurs rapidement sans compromettre l’avenir du produit.", "Nous vous aidons à décider quoi construire en premier, le développons en quelques semaines et le mettons en production sur une base technique capable d’évoluer avec vous."],
        areas: ["Périmètre et priorités", "Design et prototypage", "Développement et lancement", "Évolution à partir de données réelles"],
      },
      architecture: {
        title: 'Architecture logicielle',
        short: 'Microservices, API et systèmes évolutifs.',
        intro: 'Nous concevons et faisons évoluer des architectures logicielles qui accompagnent votre croissance et restent simples à maintenir.',
        body: ["Quand un produit grandit, l’architecture fait la différence entre avancer vite et rester bloqué. Nous analysons l’existant, identifions les points de blocage et proposons une évolution réaliste.", "Nous travaillons avec des microservices, des architectures orientées événements et des API bien définies, pour des systèmes évolutifs et faciles à maintenir, sans complexité inutile."],
        areas: ["Revue d’architecture", "Microservices et événements", "Conception d’API", "Performance et scalabilité"],
      },
      cloud: {
        title: 'Cloud et DevOps',
        short: 'Migration cloud, Kubernetes et CI/CD.',
        intro: 'Nous migrons votre infrastructure vers le cloud et automatisons son exploitation pour livrer plus vite, avec moins de risques.',
        body: ["Nous migrons votre infrastructure vers le cloud ou améliorons celle que vous avez déjà, sur AWS, Azure ou d’autres fournisseurs.", "Nous automatisons les déploiements, décrivons l’infrastructure as code et mettons en place la supervision adaptée, pour que votre équipe livre en confiance et que les coûts restent maîtrisés."],
        areas: ["Migration vers le cloud", "Kubernetes et conteneurs", "CI/CD et infrastructure as code", "Supervision et maîtrise des coûts"],
      },
      ai: {
        title: 'Solutions d’IA',
        short: 'Assistants LLM, automatisation et données.',
        intro: 'Nous appliquons l’intelligence artificielle à des cas d’usage concrets pour automatiser des tâches et mieux exploiter vos données.',
        body: ["L’intelligence artificielle apporte de la valeur lorsqu’elle résout un problème précis. Nous identifions où elle peut aider votre activité et la mettons en production de façon pragmatique.", "Des assistants qui répondent à partir de votre documentation à l’automatisation des tâches répétitives ou à l’analyse de données, nous intégrons l’IA à vos systèmes en préservant la confidentialité et la maîtrise de vos informations."],
        areas: ["Assistants et chatbots LLM", "Recherche dans la documentation interne", "Automatisation des processus", "Analyse de données"],
      },
      security: {
        title: 'Cybersécurité',
        short: 'Audits de sécurité et tests d’intrusion.',
        intro: "Nous évaluons la sécurité de vos applications et de votre infrastructure cloud, et testons leur résistance face à un attaquant réel, toujours de manière contrôlée.",
        body: ["La sécurité fait partie de notre façon de travailler sur chaque projet. Nous aidons aussi les entreprises à connaître l’état réel de leurs applications et de leur infrastructure grâce à des audits de sécurité et des tests d’intrusion.", "Chaque cas est différent : nous adaptons le périmètre à votre environnement et suivons des méthodologies ouvertes et reconnues. Vous recevez un rapport clair avec les risques priorisés et un plan de correction, et nous pouvons vous accompagner dans la remédiation."],
        areas: ["Audits de sécurité", "Tests d’intrusion", "Revue de code et de configuration", "Remédiation et suivi"],
      },
    },
    about: {
      title: 'À propos de Bootdevelop',
      text: 'Une société d’ingénierie logicielle basée à Barcelone.',
      body: [
        "Bootdevelop a été fondée à Barcelone en 2015 avec une idée simple : construire des logiciels qui fonctionnent en production et que les entreprises peuvent maintenir et faire évoluer. Depuis, nous accompagnons des startups, des PME et des entreprises établies sur des projets de toutes tailles.",
        "Aujourd’hui, nous associons développement, architecture, cloud et sécurité pour livrer des solutions complètes. Nous travaillons comme une équipe technique senior impliquée dans chaque projet du début à la fin, avec une communication directe et sans intermédiaires.",
        "Nous privilégions les relations à long terme : nous préférons bien comprendre votre activité avant d’écrire la première ligne de code, et rester à vos côtés une fois le produit entre les mains de vos utilisateurs."
      ],
      valuesTitle: 'Nos principes',
      values: [
        { title: 'Transparence', text: 'Une visibilité totale sur l’avancement, le code et les coûts.' },
        { title: 'Qualité', text: 'Un logiciel testé, documenté et facile à maintenir.' },
        { title: 'Engagement', text: 'Nous répondons du résultat, pas seulement des heures.' },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'Expliquez-nous votre besoin. Un ingénieur vous répondra, pas un commercial.',
      emailLabel: 'E-mail',
      locationLabel: 'Adresse',
      location: 'Barcelone, Espagne',
      responseLabel: 'Délai de réponse',
      response: 'Sous un jour ouvré',
      write: 'Écrire un e-mail', copy: 'Copier l’adresse', copied: 'Copié', tipsTitle: 'Pour vous répondre au mieux, indiquez-nous :', tips: ['Votre besoin et l’état d’avancement du projet', 'Les délais ou dates importantes', 'Les technologies ou systèmes déjà en place'],
    },
    cta: { title: 'Vous avez un projet ?', text: 'Expliquez-nous votre besoin, nous vous répondrons sous 24 heures.', button: 'Nous contacter' },
    footer: { tagline: 'Développement logiciel, cloud et intelligence artificielle pour les entreprises.', rights: 'Tous droits réservés.', company: 'Entreprise' },
  },
};


export const serviceIcons = {
  software: 'code',
  mvp: 'rocket',
  architecture: 'network',
  cloud: 'cloud',
  ai: 'cpu',
  security: 'shield',
} as const satisfies Record<ServiceKey, string>;
