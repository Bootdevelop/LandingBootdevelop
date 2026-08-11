/* ─────────────────────────────────────────────────────────
   bootdevelop · client script
   ───────────────────────────────────────────────────────── */

(() => {
    'use strict';

    // ─── i18n dictionary ──────────────────────────────────
    const i18n = {
        es: {
            'meta.title': 'Bootdevelop — Senior Software Engineering',
            'meta.desc':  'Bootdevelop — Senior software engineering desde Barcelona. MVPs, IA, cloud, marketplaces y desarrollo a medida.',

            'nav.01': 'servicios',
            'nav.02': 'experiencia',
            'nav.03': 'sobre',
            'nav.04': 'proyectos',
            'nav.05': 'contacto',

            'status.available': 'disponible',

            'hero.eyebrow': 'senior software engineering · barcelona, es · est. 2015',
            'hero.title.1': 'Construimos software',
            'hero.title.2_pre': 'que se atreve a ',
            'hero.title.2_em':  'salir a producción.',
            'hero.lede':       'MVPs, IA, cloud, marketplaces y desarrollo a medida. Equipo senior. Código que no se rompe el viernes a las seis de la tarde.',
            'hero.cta.primary': 'Iniciar un proyecto',
            'hero.cta.ghost':   'Ver trabajos recientes',
            'hero.card.line1': '$ whoami',
            'hero.card.line2': '└─ luis ferrer raventós',
            'hero.card.line3': '└─ fundador · bootdevelop',
            'hero.card.line4': '└─ barcelona · desde 2015',
            'hero.card.line5': '$ stack',
            'hero.card.line6': '└─ typescript · python · go',
            'hero.card.line7': '└─ k8s · azure · aws',
            'hero.card.line8': '└─ tensorflow · gpt · llms',
            'hero.card.line9': '└─ flutter · node · postgres',
            'hero.card.line10': '$ status',
            'hero.card.line11': '└─ ◉ aceptando proyectos',

            'sec.01.title': 'Servicios',
            'sec.01.meta':  '5 capacidades',
            'sec.01.lede':  'Trabajamos como un equipo de ingeniería senior contratado por proyecto. Nada de juniors aprendiendo a tu costa, nada de PowerPoints. Sólo código que pasa a producción.',

            'srv.01.title': 'Creación de MVP',
            'srv.01.tags':  'planificación · arquitectura · release',
            'srv.01.desc':  'Acelera tu idea de producto al mercado con nuestros servicios de creación de MVP. Aprovechando la planificación estratégica y la experiencia, aseguramos que tu MVP sea escalable, modular y listo para el éxito.',
            'srv.02.title': 'Desarrollo de Software a Medida',
            'srv.02.tags':  'backend · full-stack · plataformas',
            'srv.02.desc':  'Desde el concepto inicial hasta la implementación final, desarrollamos soluciones de software a medida, incluyendo sistemas de backend, aplicaciones full-stack y todo lo necesario.',
            'srv.03.title': 'Soluciones de IA',
            'srv.03.tags':  'análisis · automatización · gpt · modelos',
            'srv.03.desc':  'Implementamos soluciones de Inteligencia Artificial personalizadas. Desde análisis de datos hasta automatización y compromiso con el cliente, aprovechamos la IA para optimizar e innovar tus operaciones.',
            'srv.04.title': 'Desarrollo Multiplataforma',
            'srv.04.tags':  'web · móvil · desktop',
            'srv.04.desc':  'Crea experiencias cohesivas para tu audiencia en cualquier dispositivo. Construimos aplicaciones responsivas, funcionales y atractivas para plataformas web, móviles y de escritorio.',
            'srv.05.title': 'Comercio Electrónico',
            'srv.05.tags':  'marketplaces · apis · integraciones',
            'srv.05.desc':  'Desarrollamos plataformas de comercio electrónico personalizadas e integraciones de mercado para optimizar tu canal de ventas digitales.',

            'sec.02.title': 'Experiencia',
            'sec.02.meta':  '10+ años',
            'sec.02.col.eng': 'ingeniería',
            'sec.02.col.com': 'comercio · integración',

            'exp.eng.01.title': 'IA & Machine Learning',
            'exp.eng.01.desc':  'Diseño y desarrollo de soluciones de IA utilizando LLMs, IA generativa y machine learning, desde la experimentación hasta producción.',
            'exp.eng.02.title': 'Optimización del Sistema y Eficiencia en la Nube',
            'exp.eng.02.desc':  'Optimización del rendimiento del sistema y la nube con herramientas de monitoreo y análisis de costes. Implementaciones ágiles CI/CD para Kubernetes y plataformas en el cloud.',
            'exp.eng.03.title': 'Desarrollo Multiplataforma',
            'exp.eng.03.desc':  'Desarrollo de aplicaciones escalables web, móviles y de escritorio utilizando Flutter, además de lanzamiento de las apps a producción.',
            'exp.eng.04.title': 'Liderazgo y Colaboración',
            'exp.eng.04.desc':  'Liderado y colaborado con equipos en entornos ágiles, fomentando la innovación y asegurando la entrega exitosa de proyectos de alto impacto a través de la colaboración efectiva y la experiencia técnica.',

            'exp.com.01.title': 'Integración con APIs de Marketplaces',
            'exp.com.01.desc':  'Implementación completa de APIs de marketplaces para automatizar actualizaciones de catálogos de productos y gestionar pedidos de clientes en mercados como Amazon, Pink Connect, CDON, Rakuten y Mirakl.',
            'exp.com.02.title': 'Amazon SP API',
            'exp.com.02.desc':  'Integración con Amazon Vendor Retail API para gestión de almacenes, envíos, stocks y facturas.',
            'exp.com.03.title': 'Integración de Comercio Electrónico',
            'exp.com.03.desc':  'Gestión y optimización de tiendas de comercio electrónico a través de plataformas como PrestaShop, Magento, Shopify y WooCommerce.',
            'exp.com.04.title': 'Integraciones de ERP Odoo',
            'exp.com.04.desc':  'Integración de sistemas ERP Odoo, optimizando procesos de negocio al conectarlos con diversas plataformas para una eficiencia operacional integral.',

            'sec.03.title': 'Sobre nosotros',
            'sec.03.meta':  'est. 2015',
            'about.cap.label': 'FIG. 01',
            'about.cap.text':  'Luis Ferrer Raventós, fundador',
            'about.quote.pre': 'Mi misión es simple: ',
            'about.quote.em':  'transformar tus ideas en realidad',
            'about.quote.post':' combinando tecnología con innovación.',
            'about.p1':        'Hola, soy <strong>Luis Ferrer</strong>, la fuerza impulsora detrás de Bootdevelop. Con una carrera que comenzó en 2013 como desarrollador de software independiente, rápidamente hice la transición a fundar Bootdevelop en 2015, enfocándome en crear aplicaciones móviles innovadoras impulsadas por IA y soluciones SaaS.',
            'about.p2':        'A lo largo de los años, he navegado por diversos proyectos, cada uno ampliando el horizonte y refinando el enfoque de Bootdevelop. Desde Barcelona, España, he liderado proyectos que van desde la creación de MVPs para startups hasta integraciones complejas de comercio electrónico para mercados establecidos.',
            'about.p3':        '¿Hablamos?',
            'stat.01': 'años de experiencia',
            'stat.02': 'clientes satisfechos',
            'stat.03': 'proyectos completados',

            'sec.04.title': 'Proyectos',
            'sec.04.meta':  'selección',
            'pro.01.tag':   '/ ia · time tracking',
            'pro.01.title': 'Twinflow',
            'pro.01.desc':  'MVP de seguimiento de tiempo potenciado por inteligencia artificial.',
            'pro.02.tag':   '/ gpt-4 · chatbot',
            'pro.02.title': 'Larry Vocabulary',
            'pro.02.desc':  'ChatBot de aprendizaje de idiomas potenciado por GPT-4.',
            'pro.03.tag':   '/ marketplace · automation',
            'pro.03.title': 'Amazon SP API',
            'pro.03.desc':  'Integración completa con Amazon Selling Partner API.',
            'pro.04.tag':   '/ retail · b2b',
            'pro.04.title': 'Amazon Vendor Retail',
            'pro.04.desc':  'Almacenes, envíos, stocks y facturación automatizada.',
            'pro.05.tag':   '/ devops · infra',
            'pro.05.title': 'Kubernetes Migration',
            'pro.05.desc':  'Migración de clúster Kubernetes con cero downtime.',
            'pro.06.tag':   '/ cloud · azure',
            'pro.06.title': 'Azure Cloud Migration',
            'pro.06.desc':  'Migración de infraestructura a la nube de Azure.',
            'pro.07.tag':   '/ marketplace · b2b',
            'pro.07.title': 'Beepallet',
            'pro.07.desc':  'Marketplace B2B para la compra-venta de palets.',
            'pro.08.tag':   '/ slack · teams',
            'pro.08.title': 'convly',
            'pro.08.desc':  'Conexión bidireccional entre Microsoft Teams y Slack.',

            'sec.05.title':       'Contacto',
            'sec.05.meta':        'respuesta < 24h',
            'contact.head.em':    '¿Tienes un proyecto',
            'contact.head.rest':  'que merezca salir a producción?',
            'contact.lede':       'Cuéntame de qué se trata. Una llamada de quince minutos suele ser suficiente para saber si encajamos.',
            'contact.copied':     '✓ copiado',

            'footer.left':  'bootdevelop · barcelona, es',
            'footer.mid':   '· luis ferrer raventós',
            'footer.right': 'volver arriba',
        },

        en: {
            'meta.title': 'Bootdevelop — Senior Software Engineering',
            'meta.desc':  'Bootdevelop — Senior software engineering from Barcelona. MVPs, AI, cloud, marketplaces and bespoke software.',

            'nav.01': 'services',
            'nav.02': 'experience',
            'nav.03': 'about',
            'nav.04': 'work',
            'nav.05': 'contact',

            'status.available': 'available',

            'hero.eyebrow': 'senior software engineering · barcelona, es · est. 2015',
            'hero.title.1': 'We build software',
            'hero.title.2_pre': 'that dares to ',
            'hero.title.2_em':  'ship to production.',
            'hero.lede':       'MVPs, AI, cloud, marketplaces and bespoke development. A senior team. Code that doesn\'t break on Friday at six p.m.',
            'hero.cta.primary': 'Start a project',
            'hero.cta.ghost':   'See recent work',
            'hero.card.line1': '$ whoami',
            'hero.card.line2': '└─ luis ferrer raventós',
            'hero.card.line3': '└─ founder · bootdevelop',
            'hero.card.line4': '└─ barcelona · since 2015',
            'hero.card.line5': '$ stack',
            'hero.card.line6': '└─ typescript · python · go',
            'hero.card.line7': '└─ k8s · azure · aws',
            'hero.card.line8': '└─ tensorflow · gpt · llms',
            'hero.card.line9': '└─ flutter · node · postgres',
            'hero.card.line10': '$ status',
            'hero.card.line11': '└─ ◉ accepting projects',

            'sec.01.title': 'Services',
            'sec.01.meta':  '5 capabilities',
            'sec.01.lede':  'We work as a senior engineering team hired by the project. No juniors learning at your expense, no slide decks. Just code that ships to production.',

            'srv.01.title': 'MVP Creation',
            'srv.01.tags':  'planning · architecture · release',
            'srv.01.desc':  'Bring your product idea to market faster with our MVP creation services. With strategic planning and experience, we ensure your MVP is scalable, modular and ready to succeed.',
            'srv.02.title': 'Custom Software Development',
            'srv.02.tags':  'backend · full-stack · platforms',
            'srv.02.desc':  'From initial concept to final deployment, we build tailor-made software solutions including backend systems, full-stack applications and everything in between.',
            'srv.03.title': 'AI Solutions',
            'srv.03.tags':  'analytics · automation · gpt · models',
            'srv.03.desc':  'We deliver custom AI solutions. From data analysis to automation and customer engagement, we leverage AI to optimise and innovate your operations.',
            'srv.04.title': 'Cross-Platform Development',
            'srv.04.tags':  'web · mobile · desktop',
            'srv.04.desc':  'Build cohesive experiences for your audience across every device. We craft responsive, functional and engaging applications for web, mobile and desktop.',
            'srv.05.title': 'E-Commerce Solutions',
            'srv.05.tags':  'marketplaces · apis · integrations',
            'srv.05.desc':  'We develop custom e-commerce platforms and marketplace integrations to optimise your digital sales channels.',

            'sec.02.title': 'Experience',
            'sec.02.meta':  '10+ years',
            'sec.02.col.eng': 'engineering',
            'sec.02.col.com': 'commerce · integration',

            'exp.eng.01.title': 'AI & Machine Learning',
            'exp.eng.01.desc':  'Designed and delivered AI solutions using LLMs, generative AI, and machine learning, from experimentation to production.',
            'exp.eng.02.title': 'System & Cloud Efficiency',
            'exp.eng.02.desc':  'Optimised system and cloud performance using monitoring and cost-analysis tools. Agile CI/CD pipelines for Kubernetes and cloud platforms.',
            'exp.eng.03.title': 'Cross-Platform Development',
            'exp.eng.03.desc':  'Built scalable web, mobile and desktop applications using Flutter, plus production releases of those apps.',
            'exp.eng.04.title': 'Leadership & Collaboration',
            'exp.eng.04.desc':  'Led and collaborated with teams in agile environments, fostering innovation and ensuring successful delivery of high-impact projects through effective collaboration and technical expertise.',

            'exp.com.01.title': 'Marketplace API Integrations',
            'exp.com.01.desc':  'End-to-end implementation of marketplace APIs to automate product catalogue updates and manage customer orders on Amazon, Pink Connect, CDON, Rakuten and Mirakl.',
            'exp.com.02.title': 'Amazon SP API',
            'exp.com.02.desc':  'Integration with Amazon Vendor Retail API for warehouse management, shipping, stock and invoicing.',
            'exp.com.03.title': 'E-Commerce Integration',
            'exp.com.03.desc':  'Management and optimisation of e-commerce stores across PrestaShop, Magento, Shopify and WooCommerce.',
            'exp.com.04.title': 'Odoo ERP Integrations',
            'exp.com.04.desc':  'Odoo ERP system integration, streamlining business processes by connecting them with various platforms for end-to-end operational efficiency.',

            'sec.03.title': 'About',
            'sec.03.meta':  'est. 2015',
            'about.cap.label': 'FIG. 01',
            'about.cap.text':  'Luis Ferrer Raventós, founder',
            'about.quote.pre': 'My mission is simple: ',
            'about.quote.em':  'turn your ideas into reality',
            'about.quote.post':' by combining technology with innovation.',
            'about.p1':        'Hi, I\'m <strong>Luis Ferrer</strong>, the driving force behind Bootdevelop. My career began in 2013 as an independent software developer, and I quickly transitioned to founding Bootdevelop in 2015, focusing on building innovative AI-powered mobile applications and SaaS solutions.',
            'about.p2':        'Over the years I\'ve navigated diverse projects, each broadening the horizon and refining Bootdevelop\'s focus. From Barcelona, Spain, I\'ve led projects ranging from MVP creation for startups to complex e-commerce integrations for established marketplaces.',
            'about.p3':        'Want to talk?',
            'stat.01': 'years of experience',
            'stat.02': 'happy clients',
            'stat.03': 'projects shipped',

            'sec.04.title': 'Work',
            'sec.04.meta':  'selected',
            'pro.01.tag':   '/ ai · time tracking',
            'pro.01.title': 'Twinflow',
            'pro.01.desc':  'AI-powered time tracking MVP.',
            'pro.02.tag':   '/ gpt-4 · chatbot',
            'pro.02.title': 'Larry Vocabulary',
            'pro.02.desc':  'GPT-4 powered language-learning chatbot.',
            'pro.03.tag':   '/ marketplace · automation',
            'pro.03.title': 'Amazon SP API',
            'pro.03.desc':  'Full integration with Amazon Selling Partner API.',
            'pro.04.tag':   '/ retail · b2b',
            'pro.04.title': 'Amazon Vendor Retail',
            'pro.04.desc':  'Warehouses, shipping, stock and automated invoicing.',
            'pro.05.tag':   '/ devops · infra',
            'pro.05.title': 'Kubernetes Migration',
            'pro.05.desc':  'Zero-downtime Kubernetes cluster migration.',
            'pro.06.tag':   '/ cloud · azure',
            'pro.06.title': 'Azure Cloud Migration',
            'pro.06.desc':  'Infrastructure migration to Azure cloud.',
            'pro.07.tag':   '/ marketplace · b2b',
            'pro.07.title': 'Beepallet',
            'pro.07.desc':  'B2B marketplace for buying and selling pallets.',
            'pro.08.tag':   '/ slack · teams',
            'pro.08.title': 'convly',
            'pro.08.desc':  'Two-way bridge between Microsoft Teams and Slack.',

            'sec.05.title':       'Contact',
            'sec.05.meta':        'reply < 24h',
            'contact.head.em':    'Got a project',
            'contact.head.rest':  'worth shipping to production?',
            'contact.lede':       'Tell me about it. A fifteen-minute call is usually enough to know if we\'re a fit.',
            'contact.copied':     '✓ copied',

            'footer.left':  'bootdevelop · barcelona, es',
            'footer.mid':   '· luis ferrer raventós',
            'footer.right': 'back to top',
        },

        fr: {
            'meta.title': 'Bootdevelop — Senior Software Engineering',
            'meta.desc':  'Bootdevelop — Ingénierie logicielle senior depuis Barcelone. MVP, IA, cloud, marketplaces et développement sur mesure.',

            'nav.01': 'services',
            'nav.02': 'expérience',
            'nav.03': 'à propos',
            'nav.04': 'projets',
            'nav.05': 'contact',

            'status.available': 'disponible',

            'hero.eyebrow': 'senior software engineering · barcelone, es · depuis 2015',
            'hero.title.1': 'Nous construisons des logiciels',
            'hero.title.2_pre': 'qui osent ',
            'hero.title.2_em':  'partir en production.',
            'hero.lede':       'MVP, IA, cloud, marketplaces et développement sur mesure. Une équipe senior. Du code qui ne casse pas le vendredi à dix-huit heures.',
            'hero.cta.primary': 'Démarrer un projet',
            'hero.cta.ghost':   'Voir les projets récents',
            'hero.card.line1': '$ whoami',
            'hero.card.line2': '└─ luis ferrer raventós',
            'hero.card.line3': '└─ fondateur · bootdevelop',
            'hero.card.line4': '└─ barcelone · depuis 2015',
            'hero.card.line5': '$ stack',
            'hero.card.line6': '└─ typescript · python · go',
            'hero.card.line7': '└─ k8s · azure · aws',
            'hero.card.line8': '└─ tensorflow · gpt · llms',
            'hero.card.line9': '└─ flutter · node · postgres',
            'hero.card.line10': '$ status',
            'hero.card.line11': '└─ ◉ projets bienvenus',

            'sec.01.title': 'Services',
            'sec.01.meta':  '5 capacités',
            'sec.01.lede':  'Nous travaillons comme une équipe d\'ingénierie senior engagée à la mission. Pas de juniors qui apprennent à vos frais, pas de PowerPoint. Juste du code qui passe en production.',

            'srv.01.title': 'Création de MVP',
            'srv.01.tags':  'planification · architecture · release',
            'srv.01.desc':  'Accélérez la mise sur le marché de votre produit avec nos services de création de MVP. Grâce à une planification stratégique et à l\'expérience, nous garantissons un MVP évolutif, modulaire et prêt à réussir.',
            'srv.02.title': 'Développement Logiciel sur Mesure',
            'srv.02.tags':  'backend · full-stack · plateformes',
            'srv.02.desc':  'Du concept initial au déploiement final, nous concevons des solutions logicielles sur mesure : systèmes backend, applications full-stack et tout le nécessaire.',
            'srv.03.title': 'Solutions d\'IA',
            'srv.03.tags':  'analyse · automatisation · gpt · modèles',
            'srv.03.desc':  'Nous mettons en œuvre des solutions d\'intelligence artificielle personnalisées. De l\'analyse de données à l\'automatisation et à la relation client, nous tirons parti de l\'IA pour optimiser et innover vos opérations.',
            'srv.04.title': 'Développement Multiplateforme',
            'srv.04.tags':  'web · mobile · desktop',
            'srv.04.desc':  'Créez des expériences cohérentes pour votre audience sur tous les appareils. Nous concevons des applications réactives, fonctionnelles et engageantes pour le web, le mobile et le desktop.',
            'srv.05.title': 'Solutions E-Commerce',
            'srv.05.tags':  'marketplaces · apis · intégrations',
            'srv.05.desc':  'Nous développons des plateformes e-commerce sur mesure et des intégrations marketplace pour optimiser vos canaux de vente numériques.',

            'sec.02.title': 'Expérience',
            'sec.02.meta':  '10+ ans',
            'sec.02.col.eng': 'ingénierie',
            'sec.02.col.com': 'commerce · intégration',

            'exp.eng.01.title': 'IA & Machine Learning',
            'exp.eng.01.desc':  'Conception et développement de solutions d\'IA utilisant les LLM, l’IA générative et le machine learning, de l\'expérimentation jusqu\'à la mise en production.',
            'exp.eng.02.title': 'Optimisation Système & Efficacité Cloud',
            'exp.eng.02.desc':  'Optimisation des performances système et cloud avec des outils de monitoring et d\'analyse de coûts. Pipelines CI/CD agiles pour Kubernetes et plateformes cloud.',
            'exp.eng.03.title': 'Développement Multiplateforme',
            'exp.eng.03.desc':  'Développement d\'applications web, mobiles et desktop évolutives avec Flutter, ainsi que la mise en production de ces applications.',
            'exp.eng.04.title': 'Leadership & Collaboration',
            'exp.eng.04.desc':  'Direction et collaboration avec des équipes en environnement agile, favorisant l\'innovation et garantissant la livraison réussie de projets à fort impact grâce à une collaboration efficace et une expertise technique.',

            'exp.com.01.title': 'Intégration d\'APIs Marketplace',
            'exp.com.01.desc':  'Implémentation complète d\'APIs marketplace pour automatiser les mises à jour de catalogues produits et gérer les commandes clients sur Amazon, Pink Connect, CDON, Rakuten et Mirakl.',
            'exp.com.02.title': 'Amazon SP API',
            'exp.com.02.desc':  'Intégration avec l\'API Amazon Vendor Retail pour la gestion d\'entrepôts, des expéditions, des stocks et des factures.',
            'exp.com.03.title': 'Intégration E-Commerce',
            'exp.com.03.desc':  'Gestion et optimisation de boutiques e-commerce sur PrestaShop, Magento, Shopify et WooCommerce.',
            'exp.com.04.title': 'Intégrations ERP Odoo',
            'exp.com.04.desc':  'Intégration de systèmes ERP Odoo, optimisant les processus métier en les connectant à diverses plateformes pour une efficacité opérationnelle de bout en bout.',

            'sec.03.title': 'À propos',
            'sec.03.meta':  'depuis 2015',
            'about.cap.label': 'FIG. 01',
            'about.cap.text':  'Luis Ferrer Raventós, fondateur',
            'about.quote.pre': 'Ma mission est simple : ',
            'about.quote.em':  'transformer vos idées en réalité',
            'about.quote.post':' en combinant technologie et innovation.',
            'about.p1':        'Bonjour, je suis <strong>Luis Ferrer</strong>, la force motrice derrière Bootdevelop. Ma carrière a débuté en 2013 en tant que développeur logiciel indépendant, et j\'ai rapidement fondé Bootdevelop en 2015, en me concentrant sur la création d\'applications mobiles innovantes basées sur l\'IA et de solutions SaaS.',
            'about.p2':        'Au fil des années, j\'ai navigué entre divers projets, chacun élargissant l\'horizon et affinant l\'orientation de Bootdevelop. Depuis Barcelone, en Espagne, j\'ai dirigé des projets allant de la création de MVP pour des startups à des intégrations e-commerce complexes pour des marketplaces établies.',
            'about.p3':        'On en parle ?',
            'stat.01': 'ans d\'expérience',
            'stat.02': 'clients satisfaits',
            'stat.03': 'projets livrés',

            'sec.04.title': 'Projets',
            'sec.04.meta':  'sélection',
            'pro.01.tag':   '/ ia · time tracking',
            'pro.01.title': 'Twinflow',
            'pro.01.desc':  'MVP de suivi du temps propulsé par l\'IA.',
            'pro.02.tag':   '/ gpt-4 · chatbot',
            'pro.02.title': 'Larry Vocabulary',
            'pro.02.desc':  'Chatbot d\'apprentissage des langues propulsé par GPT-4.',
            'pro.03.tag':   '/ marketplace · automation',
            'pro.03.title': 'Amazon SP API',
            'pro.03.desc':  'Intégration complète avec l\'API Amazon Selling Partner.',
            'pro.04.tag':   '/ retail · b2b',
            'pro.04.title': 'Amazon Vendor Retail',
            'pro.04.desc':  'Entrepôts, expéditions, stocks et facturation automatisée.',
            'pro.05.tag':   '/ devops · infra',
            'pro.05.title': 'Kubernetes Migration',
            'pro.05.desc':  'Migration de cluster Kubernetes sans interruption.',
            'pro.06.tag':   '/ cloud · azure',
            'pro.06.title': 'Azure Cloud Migration',
            'pro.06.desc':  'Migration d\'infrastructure vers le cloud Azure.',
            'pro.07.tag':   '/ marketplace · b2b',
            'pro.07.title': 'Beepallet',
            'pro.07.desc':  'Marketplace B2B pour l\'achat et la vente de palettes.',
            'pro.08.tag':   '/ slack · teams',
            'pro.08.title': 'convly',
            'pro.08.desc':  'Pont bidirectionnel entre Microsoft Teams et Slack.',

            'sec.05.title':       'Contact',
            'sec.05.meta':        'réponse < 24h',
            'contact.head.em':    'Avez-vous un projet',
            'contact.head.rest':  'qui mérite de partir en production ?',
            'contact.lede':       'Parlez-m\'en. Un appel de quinze minutes suffit généralement à savoir si nous nous accordons.',
            'contact.copied':     '✓ copié',

            'footer.left':  'bootdevelop · barcelone, es',
            'footer.mid':   '· luis ferrer raventós',
            'footer.right': 'haut de page',
        },
    };

    const SUPPORTED = ['es', 'en', 'fr'];
    const STORE_KEY = 'bootdev.lang';

    function detectLang() {
        try {
            const stored = localStorage.getItem(STORE_KEY);
            if (stored && SUPPORTED.includes(stored)) return stored;
        } catch (_) { /* private mode */ }

        const langs = navigator.languages || [navigator.language || 'en'];
        for (const l of langs) {
            const code = (l || '').slice(0, 2).toLowerCase();
            if (SUPPORTED.includes(code)) return code;
        }
        return 'en';
    }

    function applyLang(lang) {
        const dict = i18n[lang];
        if (!dict) return;

        document.documentElement.lang = lang;
        document.title = dict['meta.title'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = dict[key];
            if (val == null) return;
            const useHtml = el.hasAttribute('data-i18n-html');
            if (useHtml) el.innerHTML = val;
            else el.textContent = val;
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const val = dict[key];
            if (val != null) el.setAttribute('aria-label', val);
        });

        try { localStorage.setItem(STORE_KEY, lang); } catch (_) {}

        document.querySelectorAll('.lang-switch button').forEach(b => {
            b.setAttribute('aria-current', b.dataset.lang === lang ? 'true' : 'false');
        });
    }

    function buildLangSwitch(initial) {
        const status = document.querySelector('.topbar-status');
        if (!status) return;
        const wrap = document.createElement('span');
        wrap.className = 'lang-switch';
        SUPPORTED.forEach((l, i) => {
            if (i > 0) {
                const sep = document.createElement('span');
                sep.textContent = '/';
                sep.style.color = 'var(--ink-faint)';
                wrap.appendChild(sep);
            }
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.lang = l;
            btn.textContent = l;
            btn.setAttribute('aria-current', l === initial ? 'true' : 'false');
            btn.addEventListener('click', () => applyLang(l));
            wrap.appendChild(btn);
        });
        status.appendChild(wrap);
    }

    // ─── live Barcelona clock ─────────────────────────────
    function startClock() {
        const el = document.getElementById('bcn-time');
        if (!el) return;
        const fmt = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Madrid',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        });
        const tick = () => {
            el.textContent = `BCN ${fmt.format(new Date())}`;
        };
        tick();
        setInterval(tick, 30 * 1000);
    }

    // ─── reveal on scroll ─────────────────────────────────
    function startReveal() {
        const els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(el => el.classList.add('is-visible'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        els.forEach(el => io.observe(el));
    }

    // ─── stat counters ────────────────────────────────────
    function startCounters() {
        const els = document.querySelectorAll('[data-count]');
        if (!els.length || !('IntersectionObserver' in window)) {
            els.forEach(el => el.textContent = el.getAttribute('data-count'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'), 10);
                const dur = 1100;
                const start = performance.now();
                const step = (now) => {
                    const t = Math.min((now - start) / dur, 1);
                    const eased = 1 - Math.pow(1 - t, 3);
                    el.textContent = Math.round(target * eased);
                    if (t < 1) requestAnimationFrame(step);
                    else el.textContent = target;
                };
                requestAnimationFrame(step);
                io.unobserve(el);
            });
        }, { threshold: 0.5 });
        els.forEach(el => io.observe(el));
    }

    // ─── mobile menu ──────────────────────────────────────
    function startMenu() {
        const btn = document.getElementById('menu-toggle');
        const nav = document.querySelector('.topbar-nav');
        if (!btn || !nav) return;
        btn.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open');
            btn.classList.toggle('is-open', open);
            btn.setAttribute('aria-expanded', String(open));
        });
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                nav.classList.remove('is-open');
                btn.classList.remove('is-open');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ─── footer year ──────────────────────────────────────
    function setYear() {
        const y = document.getElementById('year');
        if (y) y.textContent = String(new Date().getFullYear());
    }

    // ─── init ─────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        const lang = detectLang();
        buildLangSwitch(lang);
        applyLang(lang);
        startClock();
        startReveal();
        startCounters();
        startMenu();
        setYear();
    });

})();
