// All copy for the GDI landing page, in Turkish and English.
// Edit text here; components only read from this file.

export type Language = 'tr' | 'en'
export type Audience = 'business' | 'admin' | 'both'
export type AgentKey = 'scientist' | 'analysis' | 'engineer'

export const site = {
  name: 'GDI',
  fullName: 'Generative Data Intelligence',
  email: 'mehmetilyasince1@gmail.com',
  url: 'https://ilyasince.dev',
  marketSourceUrl: 'https://www.fortunebusinessinsights.com/business-intelligence-bi-market-103742',
}

const tr = {
  nav: {
    agents: 'Ajanlar',
    how: 'Nasıl çalışır',
    features: 'Özellikler',
    compare: 'Farkımız',
    roadmap: 'Yol haritası',
    cta: 'Erken erişim',
    toggleTheme: 'Temayı değiştir',
    language: 'Dil',
  },

  hero: {
    title: 'Verinize sorun. Karar alın.',
    lead: 'GDI, şirketinizin dağınık verisini tek yerde toplar ve doğal dille sorduğunuz sorulara analiz, grafik ve doğrudan uygulanabilir bir öneriyle cevap verir. SQL bilmenize ya da teknik ekibi beklemenize gerek yok.',
    primary: 'Erken erişime katıl',
    secondary: 'Nasıl çalıştığını gör',
    note: 'MVP geliştirme aşamasında. Pilot şirketlerle çalışmak istiyoruz.',
  },

  demo: {
    label: 'Örnek sohbet',
    caption: 'Temsili senaryo, gerçek müşteri verisi değildir.',
    replay: 'Tekrar oynat',
    question: 'Geçen çeyrekte hangi bölgede müşteri kaybı arttı, neden?',
    steps: {
      scientist: 'Müşteri kaybını bölge ve ürün kırılımında taradım. Ege bölgesi öne çıkıyor.',
      analysis: 'Ege’de churn oranı %4,1’den %6,8’e çıktı. Artışın çoğu tek ürünlü abonelerden geliyor.',
      engineer: 'Ege için haftalık churn panosu kurdum. Oran %6’yı geçerse ekibe uyarı gidecek.',
    },
    chartTitle: 'Churn oranı, bölgelere göre',
    q1: '1. çeyrek',
    q2: '2. çeyrek',
    regions: ['Marmara', 'Ege', 'İç Anadolu', 'Akdeniz'],
    decisionLabel: 'Öneri',
    decision: 'Ege’deki tek ürünlü abonelere bu ay paket yükseltme teklifi sunun.',
  },

  problem: {
    statement: 'Biz bir BI aracı değiliz. Veriyi anlayan, karar üreten ve bu kararı aksiyona dönüştüren üç katmanlı bir yapay zekâ karar sistemiyiz.',
    problemTitle: 'Sorun',
    problem: 'Veri farklı sistemlere dağılmış durumda ve analiz teknik süreçlere bağlı. Veri büyüdükçe ve teknik olmayan ekipler cevap istedikçe içgörü üretmek de karar almak da yavaşlıyor.',
    solutionTitle: 'Çözüm',
    solution: 'Doğal dil arayüzü ve entegre veri altyapısıyla dağınık veriyi tek noktada topluyor, analiz sürecini otomatikleştiriyoruz. Sistem şirketinizin bağlamını öğreniyor ve kullanıldıkça daha isabetli hale geliyor.',
  },

  agents: {
    title: 'Üç ajan, tek karar zinciri',
    lead: 'Her soru üç katmandan geçer. Biri neyin önemli olduğunu bulur, biri nedenini ölçer, biri sonucu iş akışına bağlar.',
    items: [
      {
        key: 'scientist' as AgentKey,
        name: 'Scientist Agent',
        role: 'Fırsatı ve riski keşfeder',
        points: [
          'Yeni ürün fırsatlarını veri içgörüleriyle erken fark eder',
          'Yeni müşteri segmentlerini, cross-sell ve up-sell fırsatlarını ortaya çıkarır',
          'Şirket verisini stratejik hedeflerle ilişkilendirir',
        ],
      },
      {
        key: 'analysis' as AgentKey,
        name: 'Analysis Agent',
        role: 'Ölçer, açıklar, optimize eder',
        points: [
          'Pazarlama ve satış stratejilerini veriyle optimize eder',
          'Manuel analiz yükünü büyük ölçüde azaltır',
          'KPI’ları yalnızca raporlamaz, iş etkisine çevirir',
        ],
      },
      {
        key: 'engineer' as AgentKey,
        name: 'Engineer Agent',
        role: 'Kararı uygulamaya geçirir',
        points: [
          'Yeni kullanım senaryolarını teknik engel olmadan devreye alır',
          'Veri hazırlama, raporlama ve dashboard üretimini otomatikleştirir',
          'Stratejik aksiyonları somut öneriye ve uygulamaya dönüştürür',
        ],
      },
    ],
  },

  how: {
    title: 'Sorudan karara dört adım',
    steps: [
      {
        title: 'Verinizi bağlayın',
        text: 'Veritabanları, veri ambarı ve dosyalar tek noktada toplanır. ETL hatları yapay zekâ desteğiyle kurulur ve izlenir.',
      },
      {
        title: 'GDI verinizi tanısın',
        text: 'Şemalar otomatik keşfedilir. Tablolar arası ilişkiler, veri profili ve alan etiketleri çıkarılır, iş terimleri sözlüğe işlenir.',
      },
      {
        title: 'Doğal dille sorun',
        text: 'Sorunuz anlamsal aramayla doğru tablolara ve tanımlara eşlenir, SQL’e çevrilir ve ajanlar arasında paylaştırılır.',
      },
      {
        title: 'Kararı alın',
        text: 'Cevap grafik, rapor ya da canlı dashboard olarak gelir; yanında gerekçesi ve uygulanabilir bir öneri bulunur.',
      },
    ],
  },

  features: {
    title: 'Neler yapabilecek',
    lead: 'MVP ve sonrası için planlanan özellikler. Her biri, iş kullanıcısı ya da veri yöneticisi için tasarlandı.',
    audience: {
      business: 'İş kullanıcısı',
      admin: 'Veri yöneticisi',
      both: 'Herkes',
    } as Record<Audience, string>,
    groups: [
      {
        name: 'Ajan sistemi',
        items: [
          {
            name: 'Ajan orkestrasyonu',
            text: 'Birden fazla yapay zekâ ajanını veri analizi, sorgu işleme ve otomatik içgörü için koordine eder; görev dağıtımını ve sonuçların birleştirilmesini yönetir.',
            audience: 'both' as Audience,
          },
        ],
      },
      {
        name: 'Sohbet arayüzü',
        items: [
          {
            name: 'Doğal dil sorgu arayüzü',
            text: 'İş kullanıcıları veriye günlük dilde soru sorar; sorular SQL’e çevrilir, sonuçlar anlaşılır biçimde sunulur.',
            audience: 'business' as Audience,
          },
          {
            name: 'Sohbetle rapor oluşturma',
            text: 'İhtiyacınızı anlatırsınız, ajan raporu kurar ve biçimlendirir.',
            audience: 'business' as Audience,
          },
        ],
      },
      {
        name: 'Raporlama',
        items: [
          {
            name: 'Etkileşimli dashboard üretici',
            text: 'Sorulara ve veri örüntülerine göre görselleştirmeleri otomatik oluşturur; gerçek zamanlı güncellenir ve özelleştirilebilir.',
            audience: 'business' as Audience,
          },
          {
            name: 'Gerçek zamanlı analiz motoru',
            text: 'Sorgu çalıştırmayı ajanlarla optimize eder, sık istenen içgörüleri önbelleğe alır.',
            audience: 'business' as Audience,
          },
        ],
      },
      {
        name: 'ETL ve veri yönetimi',
        items: [
          {
            name: 'Otomatik ETL hattı yöneticisi',
            text: 'Veri hatlarını kurar, izler ve optimize eder; hataları ve kalite sorunlarını otomatik yakalar, dönüşüm önerir.',
            audience: 'admin' as Audience,
          },
          {
            name: 'Akıllı dönüşüm motoru',
            text: 'Yönetici tercihlerinden öğrenerek en uygun dönüşümleri önerir; ETL mantığında sürüm takibi ve geri alma sunar.',
            audience: 'admin' as Audience,
          },
          {
            name: 'Veri kalitesi izleme',
            text: 'Anomalileri yakalar, veri bütünlüğünü doğrular, düzeltme önerir ve anlık uyarı gönderir.',
            audience: 'admin' as Audience,
          },
          {
            name: 'Otomatik şema keşfi ve kataloglama',
            text: 'Veri kaynaklarını ve şemaları keşfeder, belgeler; metadata deposunu günceller ve veri setleri arası ilişkileri önerir.',
            audience: 'admin' as Audience,
          },
        ],
      },
      {
        name: 'Altyapı',
        items: [
          {
            name: 'Güvenli çok kiracılı altyapı',
            text: 'Rol bazlı erişim, şirketler arası veri izolasyonu ve ölçeklenebilir işlem gücü. Yönetici ve iş kullanıcısı yetkileri ayrıdır.',
            audience: 'both' as Audience,
          },
        ],
      },
    ],
  },

  impact: {
    title: 'Şirketinize etkisi',
    items: [
      {
        title: 'Büyüme',
        text: 'Yeni ürün ve segment fırsatları erken görülür, pazarlama ve satış veriyle yönetilir.',
        results: ['Daha hızlı ürün geliştirme döngüsü', 'Daha yüksek müşteri kazanımı', 'Gelir için yeni fırsatlar'],
      },
      {
        title: 'Operasyon',
        text: 'Veri hazırlama, raporlama ve dashboard işi otomatikleşir; teknik ekip bağımlılığı azalır.',
        results: ['Hedef: %50–80 daha hızlı analiz döngüsü', 'Daha düşük analitik ve mühendislik maliyeti', 'Daha az hata, daha tutarlı kararlar'],
      },
      {
        title: 'Strateji',
        text: 'KPI’lar iş etkisine çevrilir, organizasyon tek bir doğruluk kaynağından beslenir.',
        results: ['Yönetim kademeleri arasında hizalanma', 'Veri ile strateji arasındaki kopukluğun kapanması', 'Daha hızlı ve tutarlı yönetim kararları'],
      },
    ],
  },

  compare: {
    title: 'Klasik BI araçlarından farkı',
    lead: 'Power BI, Tableau, Looker, Qlik ve Oracle Analytics güçlü raporlama araçları. GDI ise raporun bittiği yerden, karar ve aksiyondan devam ediyor.',
    colFeature: 'Konu',
    colBi: 'Klasik BI araçları',
    colBiShort: 'Klasik BI',
    colGdi: 'GDI',
    rows: [
      ['Kim kullanır', 'Analistler ve teknik ekip', 'Teknik bilgisi olmayan herkes'],
      ['Soru nasıl sorulur', 'Sorgu, model ve dashboard kurarak', 'Günlük dille, sohbet ederek'],
      ['Veri hazırlığı', 'Elle kurulan ETL ve modeller', 'Yapay zekâ destekli, otomatik'],
      ['Çıktı', 'Grafik ve rapor', 'İçgörü, öneri ve aksiyon'],
      ['Zamanla', 'Aynı kalır', 'Şirket bağlamını öğrenir, isabeti artar'],
    ],
    marketTitle: 'İş zekâsı pazarı',
    market2025: '30–35 milyar $',
    market2030: '65–70 milyar $',
    marketLabel2025: '2025 tahmini',
    marketLabel2030: '2030 tahmini',
    marketSource: 'Kaynak: Fortune Business Insights',
  },

  model: {
    title: 'Fiyatlandırma modeli',
    lead: 'SaaS abonelik. Paketler kullanıcı sayısı, veri hacmi ve özellik setine göre kademelenir.',
    plans: [
      { name: 'Abonelik paketleri', text: 'Ekip büyüklüğüne ve veri hacminize göre kademeli aylık paketler.' },
      { name: 'Kurumsal', text: 'Özel entegrasyon, danışmanlık ve ileri seviye analiz hizmetleri.' },
      { name: 'API ve premium', text: 'API erişimi ve premium özellikler için kullanım bazlı fiyatlandırma.' },
    ],
  },

  roadmap: {
    title: 'Neredeyiz',
    status: { done: 'Tamamlandı', active: 'Sürüyor', next: 'Sırada', later: 'Sonra' },
    items: [
      {
        status: 'done' as const,
        title: 'Pazar araştırması ve ürün kapsamı',
        text: 'Sektördeki raporlama ve veri yönetişimi ürünleri incelendi; ihtiyaçlara göre ürün kapsamı belirlendi.',
      },
      {
        status: 'active' as const,
        title: 'MVP mimarisi ve altyapı',
        text: 'Vektör veritabanı (Qdrant) kuruldu. Doküman yükleme, temel anlamsal arama ve embedding stratejisi üzerinde çalışıyoruz.',
      },
      {
        status: 'next' as const,
        title: 'Ajanlar ve sohbet arayüzü',
        text: 'Ajan orkestrasyonu, doğal dil sorgu arayüzü, ETL yöneticisi ve dashboard üretici.',
      },
      {
        status: 'later' as const,
        title: 'Kurumsal pilotlar, ardından global pazar',
        text: 'Ürünü önce kurumsal müşterilerle sahada doğrulayıp ardından uluslararası pazara açılmak.',
      },
    ],
  },

  team: {
    title: 'Ekip',
    text: 'Veri bilimi, yapay zekâ, yazılım geliştirme ve ürün yönetimi deneyimi olan bir ekibiz. Büyük veriyle çalışıyor, makine öğrenmesi modelleri geliştiriyoruz. MVP’yi kullanıcı geri bildirimleriyle hızlı iterasyonlarla büyütüyoruz.',
  },

  contact: {
    title: 'Pilot şirketlerden biri olun',
    lead: 'Verisini daha hızlı karara çevirmek isteyen bir ekipseniz yazın. Erken erişim sunuyor, ürünü sizin ihtiyaçlarınızla birlikte şekillendiriyoruz.',
    name: 'Ad soyad',
    company: 'Şirket',
    email: 'İş e-postası',
    message: 'Hangi veriyle, hangi soruları cevaplamak istiyorsunuz?',
    submit: 'Erken erişim iste',
    sent: 'E-posta uygulamanız açıldı. Mesajı gönderdiğinizde size döneceğiz.',
    required: 'Ad, e-posta ve mesaj gerekli.',
    direct: 'Doğrudan yazmak isterseniz:',
    mailSubject: 'GDI erken erişim talebi',
  },

  footer: {
    rights: 'Tüm hakları saklıdır.',
  },

  meta: {
    title: 'GDI — Generative Data Intelligence',
    description: 'Şirket verinizle doğal dille konuşun. GDI dağınık veriyi tek yerde toplar, analiz eder ve kararı aksiyona dönüştürür.',
  },
}

export type Content = typeof tr

const en: Content = {
  nav: {
    agents: 'Agents',
    how: 'How it works',
    features: 'Features',
    compare: 'Why GDI',
    roadmap: 'Roadmap',
    cta: 'Early access',
    toggleTheme: 'Toggle theme',
    language: 'Language',
  },

  hero: {
    title: 'Ask your data. Make the call.',
    lead: 'GDI brings your company’s scattered data into one place and answers plain-language questions with analysis, charts and a recommendation you can act on. No SQL, no waiting on the data team.',
    primary: 'Join early access',
    secondary: 'See how it works',
    note: 'Currently building the MVP. We are looking for pilot companies.',
  },

  demo: {
    label: 'Sample conversation',
    caption: 'Illustrative scenario, not real customer data.',
    replay: 'Replay',
    question: 'Which region saw churn rise last quarter, and why?',
    steps: {
      scientist: 'Scanned churn by region and product. The Aegean region stands out.',
      analysis: 'Aegean churn went from 4.1% to 6.8%. Most of the increase comes from single-product subscribers.',
      engineer: 'Set up a weekly churn dashboard for the Aegean. The team gets an alert if it passes 6%.',
    },
    chartTitle: 'Churn rate by region',
    q1: 'Q1',
    q2: 'Q2',
    regions: ['Marmara', 'Aegean', 'Central', 'Mediterranean'],
    decisionLabel: 'Recommendation',
    decision: 'Offer an upgrade bundle to single-product subscribers in the Aegean this month.',
  },

  problem: {
    statement: 'We are not a BI tool. We are a three-layer AI decision system that understands data, makes decisions and turns them into action.',
    problemTitle: 'The problem',
    problem: 'Data is spread across systems and analysis depends on technical work. As data grows and non-technical teams need answers, both insight and decisions slow down.',
    solutionTitle: 'Our approach',
    solution: 'A natural-language interface on top of an integrated data layer brings scattered data into one place and automates analysis. The system learns your company’s context and gets sharper the more you use it.',
  },

  agents: {
    title: 'Three agents, one decision chain',
    lead: 'Every question passes through three layers. One finds what matters, one measures why, one wires the result into your workflow.',
    items: [
      {
        key: 'scientist',
        name: 'Scientist Agent',
        role: 'Finds opportunities and risks',
        points: [
          'Spots new product opportunities early from data',
          'Surfaces new customer segments and cross-sell or up-sell openings',
          'Connects company data to strategic goals',
        ],
      },
      {
        key: 'analysis',
        name: 'Analysis Agent',
        role: 'Measures, explains, optimizes',
        points: [
          'Optimizes marketing and sales strategy with data',
          'Removes most of the manual analysis work',
          'Turns KPIs into business impact, not just reports',
        ],
      },
      {
        key: 'engineer',
        name: 'Engineer Agent',
        role: 'Puts the decision to work',
        points: [
          'Ships new use cases without technical roadblocks',
          'Automates data prep, reporting and dashboards',
          'Turns strategic actions into concrete recommendations and steps',
        ],
      },
    ],
  },

  how: {
    title: 'From question to decision in four steps',
    steps: [
      {
        title: 'Connect your data',
        text: 'Databases, warehouses and files come together in one place. AI-assisted ETL pipelines are set up and monitored for you.',
      },
      {
        title: 'GDI learns your data',
        text: 'Schemas are discovered automatically. Relationships, data profiles and domain tags are extracted, and business terms go into a shared glossary.',
      },
      {
        title: 'Ask in plain language',
        text: 'Semantic search maps your question to the right tables and definitions, translates it to SQL and hands it to the agents.',
      },
      {
        title: 'Make the decision',
        text: 'The answer comes back as a chart, a report or a live dashboard, with its reasoning and a recommendation you can act on.',
      },
    ],
  },

  features: {
    title: 'What it will do',
    lead: 'Features planned for the MVP and beyond, each designed for business users or data admins.',
    audience: {
      business: 'Business users',
      admin: 'Data admins',
      both: 'Everyone',
    },
    groups: [
      {
        name: 'Agent system',
        items: [
          {
            name: 'Agent orchestration',
            text: 'Coordinates multiple AI agents for analysis, query processing and automated insights, handling task distribution and result aggregation.',
            audience: 'both',
          },
        ],
      },
      {
        name: 'Chat interface',
        items: [
          {
            name: 'Natural-language queries',
            text: 'Business users ask questions in everyday language; questions become SQL and results come back in a clear format.',
            audience: 'business',
          },
          {
            name: 'Conversational report builder',
            text: 'Describe the report you need and the agent builds and formats it.',
            audience: 'business',
          },
        ],
      },
      {
        name: 'Reporting',
        items: [
          {
            name: 'Interactive dashboard generator',
            text: 'Generates visualizations from your questions and data patterns, with real-time updates and customization.',
            audience: 'business',
          },
          {
            name: 'Real-time analytics engine',
            text: 'Uses agents to optimize query execution and caches frequently requested insights.',
            audience: 'business',
          },
        ],
      },
      {
        name: 'ETL and data management',
        items: [
          {
            name: 'Automated ETL pipeline manager',
            text: 'Configures, monitors and optimizes pipelines, catches errors and quality issues, and suggests transformations.',
            audience: 'admin',
          },
          {
            name: 'Smart transformation engine',
            text: 'Learns from admin choices to suggest the best transformations, with version control and rollback for ETL logic.',
            audience: 'admin',
          },
          {
            name: 'Data quality monitor',
            text: 'Detects anomalies, validates integrity, suggests fixes and sends real-time alerts.',
            audience: 'admin',
          },
          {
            name: 'Schema discovery and cataloging',
            text: 'Discovers and documents sources and schemas, keeps the metadata store current and suggests relationships between datasets.',
            audience: 'admin',
          },
        ],
      },
      {
        name: 'Infrastructure',
        items: [
          {
            name: 'Secure multi-tenant infrastructure',
            text: 'Role-based access, data isolation between companies and scalable compute, with separate permissions for admins and business users.',
            audience: 'both',
          },
        ],
      },
    ],
  },

  impact: {
    title: 'What it changes for you',
    items: [
      {
        title: 'Growth',
        text: 'New product and segment opportunities show up earlier, and marketing and sales run on data.',
        results: ['Faster product development cycles', 'Higher customer acquisition', 'New surfaces for revenue'],
      },
      {
        title: 'Operations',
        text: 'Data prep, reporting and dashboards are automated, so you depend less on the technical team.',
        results: ['Target: 50–80% faster analysis cycles', 'Lower analytics and engineering cost', 'Fewer errors, more consistent decisions'],
      },
      {
        title: 'Strategy',
        text: 'KPIs are translated into business impact and the whole organization works from one source of truth.',
        results: ['Alignment across management levels', 'No gap between data and strategy', 'Faster, more consistent leadership decisions'],
      },
    ],
  },

  compare: {
    title: 'How it differs from classic BI',
    lead: 'Power BI, Tableau, Looker, Qlik and Oracle Analytics are strong reporting tools. GDI picks up where the report ends: the decision and the action.',
    colFeature: 'Topic',
    colBi: 'Classic BI tools',
    colBiShort: 'Classic BI',
    colGdi: 'GDI',
    rows: [
      ['Who uses it', 'Analysts and technical teams', 'Anyone, no technical skills needed'],
      ['How you ask', 'Build queries, models and dashboards', 'In plain language, by chatting'],
      ['Data prep', 'Hand-built ETL and models', 'AI-assisted and automated'],
      ['Output', 'Charts and reports', 'Insight, recommendation and action'],
      ['Over time', 'Stays the same', 'Learns your context and gets sharper'],
    ],
    marketTitle: 'Business intelligence market',
    market2025: '$30–35B',
    market2030: '$65–70B',
    marketLabel2025: '2025 estimate',
    marketLabel2030: '2030 estimate',
    marketSource: 'Source: Fortune Business Insights',
  },

  model: {
    title: 'Pricing model',
    lead: 'SaaS subscription, tiered by number of users, data volume and feature set.',
    plans: [
      { name: 'Subscription tiers', text: 'Monthly plans that scale with your team size and data volume.' },
      { name: 'Enterprise', text: 'Custom integrations, consulting and advanced analytics services.' },
      { name: 'API and premium', text: 'Usage-based pricing for API access and premium features.' },
    ],
  },

  roadmap: {
    title: 'Where we are',
    status: { done: 'Done', active: 'In progress', next: 'Next', later: 'Later' },
    items: [
      {
        status: 'done',
        title: 'Market research and product scope',
        text: 'We reviewed the reporting and data governance products on the market and set the product scope around real needs.',
      },
      {
        status: 'active',
        title: 'MVP architecture and infrastructure',
        text: 'The vector database (Qdrant) is up. We are working on document upload, basic semantic search and the embedding strategy.',
      },
      {
        status: 'next',
        title: 'Agents and chat interface',
        text: 'Agent orchestration, the natural-language query interface, the ETL manager and the dashboard generator.',
      },
      {
        status: 'later',
        title: 'Enterprise pilots, then global',
        text: 'Prove the product with enterprise customers first, then expand to international markets.',
      },
    ],
  },

  team: {
    title: 'Team',
    text: 'We bring experience in data science, AI, software engineering and product management. We work with large-scale data and build machine learning models, and we are growing the MVP through fast iterations driven by user feedback.',
  },

  contact: {
    title: 'Become a pilot company',
    lead: 'If your team wants to turn data into decisions faster, get in touch. We offer early access and shape the product around your needs.',
    name: 'Full name',
    company: 'Company',
    email: 'Work email',
    message: 'Which data do you have, and which questions do you want answered?',
    submit: 'Request early access',
    sent: 'Your email app is open. Send the message and we will get back to you.',
    required: 'Name, email and message are required.',
    direct: 'Prefer to write directly?',
    mailSubject: 'GDI early access request',
  },

  footer: {
    rights: 'All rights reserved.',
  },

  meta: {
    title: 'GDI — Generative Data Intelligence',
    description: 'Talk to your company data in plain language. GDI brings scattered data together, analyzes it and turns decisions into action.',
  },
}

export const content: Record<Language, Content> = { tr, en }
