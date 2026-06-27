export type Locale = "en" | "pt";

export const siteConfig = {
  brand: {
    name: "Balloon Garlands & Event Decor",
    location: "Orlando, Florida",
    serviceArea: "Orlando and nearby areas",
  },
  contact: {
    whatsapp: {
      display: "+1 (863) 443-9539",
      href: "https://wa.me/18634439539",
      prefilledMessage:
        "Hi! I'd like to request a quote for balloon and event decor. My event date is:",
    },
    phone: {
      display: "+1 (863) 412-4103",
      href: "tel:+18634124103",
    },
    email: null as string | null,
  },
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
  address: null as string | null,
  reviews: {
    enabled: false,
    items: [] as { name: string; text: string; eventType?: string }[],
  },
  seo: {
    canonicalBase:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
    ogImage: "/images/hero/hero-balloon-garland.png",
  },
  images: {
    hero: "/images/hero/hero-balloon-garland.png",
    emotional: "/images/emotional/emotional-celebration.png",
    services: {
      birthday: "/images/services/service-birthday.png",
      babyShower: "/images/services/service-baby-shower.png",
      wedding: "/images/services/service-wedding.png",
      corporate: "/images/services/service-corporate.png",
      customGarland: "/images/services/service-custom-garland.png",
      graduation: "/images/services/service-graduation.png",
    },
    gallery: [
      { src: "/gallery/gallery-01.png", category: "organic-arch" },
      { src: "/gallery/gallery-02.png", category: "backdrop" },
      { src: "/gallery/gallery-03.png", category: "cake-table" },
      { src: "/gallery/gallery-04.png", category: "pedestal" },
      { src: "/gallery/gallery-05.png", category: "marquee-numbers" },
      { src: "/gallery/gallery-06.png", category: "baby" },
      { src: "/gallery/gallery-07.png", category: "adult" },
      { src: "/gallery/gallery-08.png", category: "corporate" },
    ],
  },
} as const;

const safeAnswerEn =
  "Availability and setup details depend on the event location, date and selected decor. Contact us for a personalized answer.";

const safeAnswerPt =
  "Disponibilidade e detalhes de instalação dependem do local, da data e da decoração escolhida. Entre em contato para uma resposta personalizada.";

export const content = {
  en: {
    meta: {
      title: "Custom Balloon Garlands & Event Decor in Orlando, FL",
      description:
        "Custom balloon garlands and event decor for birthdays, baby showers, weddings, corporate events and special celebrations in Orlando, Florida. Request a personalized quote.",
      lang: "en",
    },
    nav: {
      services: "Services",
      gallery: "Gallery",
      howItWorks: "How It Works",
      faq: "FAQ",
      contact: "Contact",
      getQuote: "Get a Free Quote",
    },
    hero: {
      eyebrow: "Custom Balloon Decor • Orlando, Florida",
      title: "Turn Your Celebration Into a Moment Everyone Remembers",
      subtitle:
        "Custom balloon garlands and event decor for birthdays, baby showers, weddings, corporate events and special celebrations — designed, delivered and professionally installed across the Orlando area.",
      ctaPrimary: "Check Your Date & Get a Free Quote",
      ctaSecondary: "Message Us on WhatsApp",
      urgency: "Popular weekends can fill quickly. Check your date today.",
      benefits: [
        "Custom designs",
        "Professional on-site setup",
        "Photo-ready decorations",
        "Serving the Orlando area",
      ],
    },
    services: {
      title: "Beautiful Decor for Every Celebration",
      subtitle:
        "Every setup is customized around your theme, colors, venue and special moment.",
      cta: "Request This Style",
      items: [
        {
          id: "birthday",
          image: siteConfig.images.services.birthday,
          title: "Birthday Parties",
          description:
            "From sweet first birthdays to milestone celebrations, we design balloon garlands and accents that match your theme and make the guest of honor shine.",
        },
        {
          id: "baby-shower",
          image: siteConfig.images.services.babyShower,
          title: "Baby Showers & Gender Reveals",
          description:
            "Soft palettes, thoughtful details and photo-ready backdrops for welcoming little ones — including custom color reveals and nursery-inspired styling.",
        },
        {
          id: "wedding",
          image: siteConfig.images.services.wedding,
          title: "Weddings & Special Events",
          description:
            "Elegant balloon installations for ceremonies, receptions and intimate celebrations — designed to complement your venue and romantic aesthetic.",
        },
        {
          id: "corporate",
          image: siteConfig.images.services.corporate,
          title: "Corporate Decorations",
          description:
            "Polished balloon decor for business openings, team celebrations and branded events — professional, on-brand and ready for your guests.",
        },
        {
          id: "custom-garland",
          image: siteConfig.images.services.customGarland,
          title: "Custom Balloon Garlands",
          description:
            "Organic arches, statement walls and entrance installations tailored to your color story, venue layout and vision — no two designs are alike.",
        },
        {
          id: "graduation",
          image: siteConfig.images.services.graduation,
          title: "Graduations & Anniversaries",
          description:
            "Sophisticated setups for graduations, milestone anniversaries and adult celebrations — bold accents, elegant palettes and memorable photo moments.",
        },
      ],
    },
    gallery: {
      title: "Designed to Impress. Made for Amazing Photos.",
      subtitle:
        "Browse illustrative decor examples. Replace these with your own project photos anytime.",
      instagramCta: "Follow us on Instagram",
      instagramPlaceholder: "Instagram gallery coming soon",
      altPrefix: "Illustrative balloon decor example",
      categories: {
        "organic-arch": "Organic balloon arch",
        backdrop: "Balloon backdrop",
        "cake-table": "Cake table styling",
        pedestal: "Pedestal balloon decor",
        "marquee-numbers": "Marquee number display",
        baby: "Baby shower decor",
        adult: "Adult celebration decor",
        corporate: "Corporate event decor",
      },
    },
    benefits: {
      title: "More Than Balloons — A Complete Event Experience",
      items: [
        {
          title: "Custom-Made for Your Event",
          description:
            "Your colors, theme and celebration are used to create a design that feels truly personal.",
        },
        {
          title: "Professional On-Site Setup",
          description:
            "We deliver and install the decor so you can focus on enjoying your event.",
        },
        {
          title: "High-Quality Materials",
          description:
            "Carefully selected materials help create a polished and professional result.",
        },
        {
          title: "Made for Memorable Photos",
          description:
            "Every setup is planned to become a beautiful backdrop for your guests and memories.",
        },
        {
          title: "Decor for Every Occasion",
          description:
            "From intimate celebrations to corporate events, every project is adapted to the occasion.",
        },
      ],
    },
    howItWorks: {
      title: "Your Dream Setup in Three Simple Steps",
      cta: "Start Planning My Event",
      steps: [
        {
          title: "Tell Us About Your Event",
          description:
            "Share your date, location, theme, colors and inspiration.",
        },
        {
          title: "Receive Your Custom Proposal",
          description:
            "We create a personalized decor concept based on your celebration.",
        },
        {
          title: "We Deliver and Set Everything Up",
          description:
            "Our team prepares the installation so everything is ready for your event.",
        },
      ],
    },
    emotional: {
      title: "You Create the Memories. We Create the Setting.",
      description:
        "From the first photo to the final celebration, your event deserves a setting that feels as special as the moment itself.",
      cta: "Let's Create Something Beautiful",
    },
    testimonials: {
      title: "Real Client Reviews Coming Soon",
      description:
        "We are gathering feedback from recent celebrations. Check back soon or contact us to learn more about our work.",
    },
    quote: {
      title: "Check Your Date and Request a Custom Quote",
      description:
        "Tell us a little about your celebration and we'll contact you to discuss the perfect setup.",
      submit: "Check Availability & Request My Quote",
      quickTitle: "Check Your Date",
      quickDescription: "Planning an event? Share your date and we'll follow up.",
      quickSubmit: "Check Availability",
      fields: {
        fullName: "Full name",
        phone: "Phone or WhatsApp",
        email: "Email address",
        eventDate: "Event date",
        eventType: "Event type",
        venue: "Venue or city",
        indoorOutdoor: "Indoor or outdoor event",
        colors: "Preferred colors or theme",
        guests: "Approximate number of guests",
        description: "Description or inspiration",
        contactMethod: "Preferred contact method",
        budget: "Estimated budget (optional)",
        privacy: "I agree to be contacted about my event request and have read the",
        privacyLink: "Privacy Policy",
      },
      eventTypes: [
        "Birthday party",
        "Baby shower",
        "Gender reveal",
        "Wedding",
        "Anniversary",
        "Graduation",
        "Bridal shower",
        "Corporate event",
        "Business opening",
        "Custom themed event",
        "Other",
      ],
      indoorOutdoorOptions: ["Indoor", "Outdoor", "Not sure yet"],
      contactMethods: ["Phone call", "WhatsApp", "Email"],
      success: "Thank you! We received your request and will contact you soon.",
      error: "Something went wrong. Please try again or message us on WhatsApp.",
      loading: "Sending your request...",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How far in advance should I book?",
          answer: safeAnswerEn,
        },
        {
          question: "Do you create completely custom designs?",
          answer:
            "Yes. Every project starts with your theme, colors, venue and inspiration. We design decor tailored to your celebration rather than one-size-fits-all packages.",
        },
        {
          question: "Do you deliver and install the decorations?",
          answer:
            "Yes. We provide professional on-site setup so your decor is ready before your guests arrive. Setup details are confirmed in your personalized quote.",
        },
        {
          question: "Which areas around Orlando do you serve?",
          answer:
            "We serve Orlando, Florida and nearby areas. Share your venue or city when requesting a quote and we will confirm availability for your location.",
        },
        {
          question: "Can you decorate outdoor events?",
          answer: safeAnswerEn,
        },
        {
          question: "Can I send photos of my inspiration?",
          answer:
            "Absolutely. Inspiration photos help us understand your vision. Include links or descriptions in your quote request, or send them when we follow up.",
        },
        {
          question: "Do you decorate corporate events?",
          answer:
            "Yes. We create polished balloon decor for business openings, team celebrations, brand activations and corporate gatherings across the Orlando area.",
        },
        {
          question: "How do I reserve my event date?",
          answer: safeAnswerEn,
        },
        {
          question: "Is removal or teardown included?",
          answer: safeAnswerEn,
        },
        {
          question: "Can you accommodate last-minute events?",
          answer: safeAnswerEn,
        },
      ],
    },
    finalCta: {
      title: "Your Celebration Deserves a Beautiful Setting",
      description:
        "Tell us your date, theme and vision. We'll help turn it into an unforgettable event.",
      ctaPrimary: "Check My Date",
      ctaSecondary: "Message on WhatsApp",
      serviceArea: "Serving Orlando and nearby areas.",
    },
    sectionCta: {
      text: "Ready to bring your vision to life?",
      button: "Check Your Date & Get a Free Quote",
    },
    engagementPrompt: {
      text: "Planning an event? Check if your date is available.",
      button: "Check My Date",
    },
    footer: {
      serviceArea: "Service area: Orlando, Florida and nearby areas.",
      navigation: "Navigation",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "All rights reserved.",
      followUs: "Follow us",
    },
    thankYou: {
      title: "Your Request Was Received!",
      description:
        "Thank you for reaching out. We will review your celebration details and contact you soon to discuss your custom decor.",
      whatsapp: "Continue on WhatsApp",
      back: "Back to Home",
    },
    mobileBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      quote: "Get Quote",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 2026",
      sections: [
        {
          title: "Information We Collect",
          body: "When you submit a quote request, we collect the information you provide, such as your name, contact details, event date, venue and celebration preferences.",
        },
        {
          title: "How We Use Your Information",
          body: "We use your information to respond to your inquiry, prepare a personalized quote and coordinate event decor services you request.",
        },
        {
          title: "Contact",
          body: "For privacy-related questions, contact us by phone or WhatsApp using the details on this website.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: June 2026",
      sections: [
        {
          title: "Services",
          body: "Balloon Garlands & Event Decor provides custom balloon and event decoration services in the Orlando, Florida area. Specific services, pricing and scheduling are confirmed in your personalized quote.",
        },
        {
          title: "Quotes and Booking",
          body: "Submitting a quote request does not guarantee availability. Event dates, setup details and terms are confirmed directly with you before your celebration.",
        },
        {
          title: "Contact",
          body: "For questions about these terms, contact us by phone or WhatsApp using the details on this website.",
        },
      ],
    },
  },
  pt: {
    meta: {
      title: "Guirlandas de Balões e Decoração de Eventos em Orlando, FL",
      description:
        "Guirlandas de balões e decoração personalizada para aniversários, chá de bebê, casamentos, eventos corporativos e celebrações especiais em Orlando, Flórida. Solicite um orçamento.",
      lang: "pt",
    },
    nav: {
      services: "Serviços",
      gallery: "Galeria",
      howItWorks: "Como Funciona",
      faq: "Perguntas",
      contact: "Contato",
      getQuote: "Orçamento Grátis",
    },
    hero: {
      eyebrow: "Decoração com Balões • Orlando, Flórida",
      title: "Transforme Sua Celebração em um Momento Inesquecível",
      subtitle:
        "Guirlandas de balões e decoração personalizada para aniversários, chá de bebê, casamentos, eventos corporativos e celebrações especiais — projetadas, entregues e instaladas profissionalmente na região de Orlando.",
      ctaPrimary: "Verifique Sua Data e Peça um Orçamento Grátis",
      ctaSecondary: "Fale Conosco no WhatsApp",
      urgency: "Fins de semana populares podem esgotar. Verifique sua data hoje.",
      benefits: [
        "Designs personalizados",
        "Instalação profissional no local",
        "Decoração pronta para fotos",
        "Atendemos a região de Orlando",
      ],
    },
    services: {
      title: "Decoração Linda para Cada Celebração",
      subtitle:
        "Cada montagem é personalizada de acordo com seu tema, cores, local e momento especial.",
      cta: "Solicitar Este Estilo",
      items: [
        {
          id: "birthday",
          image: siteConfig.images.services.birthday,
          title: "Festas de Aniversário",
          description:
            "Do primeiro aniversário às celebrações marcantes, criamos guirlandas e detalhes que combinam com seu tema e destacam o aniversariante.",
        },
        {
          id: "baby-shower",
          image: siteConfig.images.services.babyShower,
          title: "Chá de Bebê e Revelação",
          description:
            "Paletas suaves, detalhes delicados e cenários fotogênicos para receber o bebê — incluindo revelações de gênero e estilos inspirados em nursery.",
        },
        {
          id: "wedding",
          image: siteConfig.images.services.wedding,
          title: "Casamentos e Eventos Especiais",
          description:
            "Instalações elegantes para cerimônias, recepções e celebrações íntimas — projetadas para complementar seu local e estética romântica.",
        },
        {
          id: "corporate",
          image: siteConfig.images.services.corporate,
          title: "Decoração Corporativa",
          description:
            "Decoração profissional para inaugurações, celebrações de equipe e eventos de marca — polida, alinhada à identidade e pronta para seus convidados.",
        },
        {
          id: "custom-garland",
          image: siteConfig.images.services.customGarland,
          title: "Guirlandas Personalizadas",
          description:
            "Arcos orgânicos, paredes de destaque e instalações de entrada adaptadas às suas cores, layout do local e visão — nenhum design é igual.",
        },
        {
          id: "graduation",
          image: siteConfig.images.services.graduation,
          title: "Formaturas e Aniversários",
          description:
            "Montagens sofisticadas para formaturas, aniversários marcantes e celebrações adultas — detalhes marcantes, paletas elegantes e momentos memoráveis.",
        },
      ],
    },
    gallery: {
      title: "Projetado para Impressionar. Feito para Fotos Incríveis.",
      subtitle:
        "Veja exemplos ilustrativos de decoração. Substitua por fotos dos seus projetos quando quiser.",
      instagramCta: "Siga-nos no Instagram",
      instagramPlaceholder: "Galeria do Instagram em breve",
      altPrefix: "Exemplo ilustrativo de decoração com balões",
      categories: {
        "organic-arch": "Arco orgânico de balões",
        backdrop: "Painel de balões",
        "cake-table": "Mesa do bolo",
        pedestal: "Decoração em pedestal",
        "marquee-numbers": "Números luminosos",
        baby: "Decoração para bebê",
        adult: "Decoração adulta",
        corporate: "Decoração corporativa",
      },
    },
    benefits: {
      title: "Mais que Balões — Uma Experiência Completa",
      items: [
        {
          title: "Feito Sob Medida para Seu Evento",
          description:
            "Suas cores, tema e celebração são usados para criar um design verdadeiramente pessoal.",
        },
        {
          title: "Instalação Profissional no Local",
          description:
            "Entregamos e instalamos a decoração para você focar em aproveitar seu evento.",
        },
        {
          title: "Materiais de Alta Qualidade",
          description:
            "Materiais selecionados com cuidado para um resultado polido e profissional.",
        },
        {
          title: "Feito para Fotos Memoráveis",
          description:
            "Cada montagem é planejada para ser um cenário lindo para seus convidados e memórias.",
        },
        {
          title: "Decoração para Toda Ocasião",
          description:
            "De celebrações íntimas a eventos corporativos, cada projeto é adaptado à ocasião.",
        },
      ],
    },
    howItWorks: {
      title: "Sua Decoração dos Sonhos em Três Passos Simples",
      cta: "Começar a Planejar Meu Evento",
      steps: [
        {
          title: "Conte Sobre Seu Evento",
          description:
            "Compartilhe data, local, tema, cores e inspiração.",
        },
        {
          title: "Receba Sua Proposta Personalizada",
          description:
            "Criamos um conceito de decoração baseado na sua celebração.",
        },
        {
          title: "Entregamos e Montamos Tudo",
          description:
            "Nossa equipe prepara a instalação para tudo estar pronto no seu evento.",
        },
      ],
    },
    emotional: {
      title: "Você Cria as Memórias. Nós Criamos o Cenário.",
      description:
        "Da primeira foto à celebração final, seu evento merece um cenário tão especial quanto o momento.",
      cta: "Vamos Criar Algo Lindo",
    },
    testimonials: {
      title: "Avaliações Reais de Clientes em Breve",
      description:
        "Estamos reunindo feedback de celebrações recentes. Volte em breve ou entre em contato para saber mais sobre nosso trabalho.",
    },
    quote: {
      title: "Verifique Sua Data e Solicite um Orçamento",
      description:
        "Conte um pouco sobre sua celebração e entraremos em contato para discutir a montagem perfeita.",
      submit: "Verificar Disponibilidade e Solicitar Orçamento",
      quickTitle: "Verifique Sua Data",
      quickDescription: "Planejando um evento? Informe sua data e entraremos em contato.",
      quickSubmit: "Verificar Disponibilidade",
      fields: {
        fullName: "Nome completo",
        phone: "Telefone ou WhatsApp",
        email: "E-mail",
        eventDate: "Data do evento",
        eventType: "Tipo de evento",
        venue: "Local ou cidade",
        indoorOutdoor: "Evento interno ou externo",
        colors: "Cores ou tema preferidos",
        guests: "Número aproximado de convidados",
        description: "Descrição ou inspiração",
        contactMethod: "Forma de contato preferida",
        budget: "Orçamento estimado (opcional)",
        privacy: "Concordo em ser contatado sobre meu pedido e li a",
        privacyLink: "Política de Privacidade",
      },
      eventTypes: [
        "Festa de aniversário",
        "Chá de bebê",
        "Revelação de gênero",
        "Casamento",
        "Aniversário de casamento",
        "Formatura",
        "Chá de panela",
        "Evento corporativo",
        "Inauguração",
        "Evento temático personalizado",
        "Outro",
      ],
      indoorOutdoorOptions: ["Interno", "Externo", "Ainda não sei"],
      contactMethods: ["Ligação", "WhatsApp", "E-mail"],
      success: "Obrigado! Recebemos seu pedido e entraremos em contato em breve.",
      error: "Algo deu errado. Tente novamente ou fale conosco no WhatsApp.",
      loading: "Enviando seu pedido...",
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        {
          question: "Com quanta antecedência devo reservar?",
          answer: safeAnswerPt,
        },
        {
          question: "Vocês criam designs totalmente personalizados?",
          answer:
            "Sim. Cada projeto começa com seu tema, cores, local e inspiração. Projetamos decoração sob medida para sua celebração.",
        },
        {
          question: "Vocês entregam e instalam a decoração?",
          answer:
            "Sim. Fazemos instalação profissional no local para sua decoração estar pronta antes dos convidados. Detalhes são confirmados no orçamento personalizado.",
        },
        {
          question: "Quais áreas ao redor de Orlando vocês atendem?",
          answer:
            "Atendemos Orlando, Flórida e regiões próximas. Informe seu local ao solicitar orçamento e confirmaremos disponibilidade.",
        },
        {
          question: "Vocês decoram eventos ao ar livre?",
          answer: safeAnswerPt,
        },
        {
          question: "Posso enviar fotos de inspiração?",
          answer:
            "Com certeza. Fotos de inspiração nos ajudam a entender sua visão. Inclua links ou descrições no pedido de orçamento.",
        },
        {
          question: "Vocês decoram eventos corporativos?",
          answer:
            "Sim. Criamos decoração profissional para inaugurações, celebrações de equipe e eventos corporativos na região de Orlando.",
        },
        {
          question: "Como reservo a data do meu evento?",
          answer: safeAnswerPt,
        },
        {
          question: "A remoção está incluída?",
          answer: safeAnswerPt,
        },
        {
          question: "Vocês atendem eventos de última hora?",
          answer: safeAnswerPt,
        },
      ],
    },
    finalCta: {
      title: "Sua Celebração Merece um Cenário Lindo",
      description:
        "Conte sua data, tema e visão. Ajudaremos a transformar em um evento inesquecível.",
      ctaPrimary: "Verificar Minha Data",
      ctaSecondary: "Mensagem no WhatsApp",
      serviceArea: "Atendemos Orlando e regiões próximas.",
    },
    sectionCta: {
      text: "Pronto para dar vida à sua visão?",
      button: "Verifique Sua Data e Peça um Orçamento Grátis",
    },
    engagementPrompt: {
      text: "Planejando um evento? Verifique se sua data está disponível.",
      button: "Verificar Minha Data",
    },
    footer: {
      serviceArea: "Área de atendimento: Orlando, Flórida e regiões próximas.",
      navigation: "Navegação",
      contact: "Contato",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      copyright: "Todos os direitos reservados.",
      followUs: "Siga-nos",
    },
    thankYou: {
      title: "Recebemos Seu Pedido!",
      description:
        "Obrigado pelo contato. Analisaremos os detalhes da sua celebração e entraremos em contato em breve.",
      whatsapp: "Continuar no WhatsApp",
      back: "Voltar ao Início",
    },
    mobileBar: {
      call: "Ligar",
      whatsapp: "WhatsApp",
      quote: "Orçamento",
    },
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: junho de 2026",
      sections: [
        {
          title: "Informações que Coletamos",
          body: "Ao enviar um pedido de orçamento, coletamos as informações fornecidas, como nome, contato, data do evento, local e preferências de decoração.",
        },
        {
          title: "Como Usamos Suas Informações",
          body: "Usamos suas informações para responder sua solicitação, preparar um orçamento personalizado e coordenar os serviços de decoração solicitados.",
        },
        {
          title: "Contato",
          body: "Para questões de privacidade, entre em contato por telefone ou WhatsApp usando os dados neste site.",
        },
      ],
    },
    terms: {
      title: "Termos de Serviço",
      lastUpdated: "Última atualização: junho de 2026",
      sections: [
        {
          title: "Serviços",
          body: "Balloon Garlands & Event Decor oferece decoração personalizada com balões na região de Orlando, Flórida. Serviços, preços e agendamento são confirmados no orçamento personalizado.",
        },
        {
          title: "Orçamentos e Reservas",
          body: "Enviar um pedido de orçamento não garante disponibilidade. Datas, detalhes de instalação e termos são confirmados diretamente com você.",
        },
        {
          title: "Contato",
          body: "Para dúvidas sobre estes termos, entre em contato por telefone ou WhatsApp usando os dados neste site.",
        },
      ],
    },
  },
} as const;

export type SiteContent = (typeof content)[Locale];

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "pt" : "en";
}

export function getLocalePath(locale: Locale): string {
  return locale === "pt" ? "/pt" : "/";
}
