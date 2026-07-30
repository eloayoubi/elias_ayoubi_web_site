/**
 * Zentrales Datenmodell des Portfolios.
 * Sämtliche Inhalte stammen aus dem Lebenslauf (Lebenslauf_Elias_Ayoubi.pdf).
 */

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  summary: string;
}

export interface Project {
  id: string;
  role: string;
  period: string;
  client: string;
  title: string;
  category: 'Mobile' | 'Web' | 'Design' | 'Backend' | 'IoT';
  summary: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
}

export interface SkillGroup {
  name: string;
  icon: string;
  skills: string[];
}

export interface EducationEntry {
  title: string;
  kind: 'Studium' | 'Zertifikat';
  icon: string;
}

export interface Resume {
  name: string;
  title: string;
  taglines: string[];
  aboutIntro: string;
  about: string[];
  stats: { value: string; label: string }[];
  contact: ContactInfo;
  languages: LanguageSkill[];
  experience: ExperienceEntry[];
  projects: Project[];
  skillGroups: SkillGroup[];
  education: EducationEntry[];
}

export const RESUME: Resume = {
  name: 'Elias Ayoubi',
  title: 'Senior IT-Berater · Lead Flutter Developer',
  taglines: [
    'Lead Flutter Developer',
    'Senior IT-Berater',
    'UX/UI-Designer',
    'Experte für digitale Barrierefreiheit',
    'Full-Stack-Entwickler',
  ],
  aboutIntro:
    'Seit acht Jahren bin ich mit Neugier und Leidenschaft in der Softwareentwicklung tätig.',
  about: [
    'In der Finanzbranche habe ich bisher die meiste Erfahrung sammeln können – das spiegelt sich in meinem Portfolio mit namhaften Kunden wider. Für die Fidelity Fondsbank, Union Investment, VisualVest und die GLS Bank habe ich mobile Apps für iOS und Android entwickelt.',
    'Besonders begeistert mich die agile Produktentwicklung: Ich bringe frische Denkanstöße ein und entwickle Anwendungen mit Begeisterung und Weitblick weiter. Als Gründer von barriere-frei.digital unterstütze ich außerdem Unternehmen dabei, Websites und Apps barrierefrei und BFSG-konform umzusetzen.',
  ],
  stats: [
    { value: '8+', label: 'Jahre Erfahrung' },
    { value: '4', label: 'Banking-Apps (iOS & Android)' },
    { value: '12+', label: 'Projekte' },
    { value: 'WCAG 2.2', label: 'Barrierefreiheit im Fokus' },
  ],
  contact: {
    phone: '0157 7613 7738',
    email: 'elias.ayoubi@icloud.com',
    location: 'Darmstadt',
  },
  languages: [
    { name: 'Deutsch', level: 'Muttersprache' },
    { name: 'Englisch', level: 'Verhandlungssicher' },
  ],
  experience: [
    {
      period: '2025 – heute',
      role: 'Lead Flutter Developer',
      company: 'Fidelity Fondsbank',
      summary:
        'Verantwortlich für die Neuentwicklung der mobilen Anwendung der Fidelity Fondsbank: Verwaltung von Fonds sowie Analyse von Depots inklusive grafischer Darstellungen zur Performanceübersicht.',
    },
    {
      period: '2024 – 2025',
      role: 'Gründer & Barrierefreiheits-Berater',
      company: 'barriere-frei.digital',
      summary:
        'Unterstützung von Unternehmen bei der Umsetzung barrierefreier Websites und Apps gemäß dem Barrierefreiheitsstärkungsgesetz (BFSG) durch Prüfungen, Design-Optimierung und Entwicklungsberatung.',
    },
    {
      period: '2022 – 2024',
      role: 'Senior Flutter Developer',
      company: 'Union Investment',
      summary:
        'Erweiterung der VisualVest-Codebase (Flutter) im Sinne der Whitelabel-Fähigkeit für das Rewriting der alten Union App. Konzeption, Architekturmodellierung, Testautomatisierung sowie Integration von Matomo Tracking, Sentry Logging und Tracing.',
    },
    {
      period: '2021 – 2023',
      role: 'Flutter Developer (Flutter & Java)',
      company: 'VisualVest GmbH',
      summary:
        'Entwicklung einer Vertriebsplattform für Investmentfondsprodukte durch einen Robo-Advisor – Fragestrecke, Antragsstrecke, Kundendashboard und Transaktionsprozesse.',
    },
    {
      period: '2021 – 2022',
      role: 'Flutter Developer & Scrum Master',
      company: 'GLS Bank',
      summary:
        'Betreuung und Weiterentwicklung der Flutter App und des Java-Backends mit 50 % Scrum-Master-Anteil. Führung von 20 Projektmitgliedern und Unterstützung des Product Owners.',
    },
    {
      period: '2017 – 2021',
      role: 'Fullstack Developer',
      company: 'Software AG',
      summary:
        'Fullstack-Entwicklung verschiedenster Anwendungen mit Software-AG-Produkten. Demo-Agent für die Cumulocity IoT Device Management Platform, Integration von Okta und Optimierung von Suchalgorithmen mit Apache Lucene.',
    },
  ],
  projects: [
    {
      id: 'fidelity',
      role: 'Lead Flutter Developer',
      period: '06.2025 – heute',
      client: 'Fidelity Fondsbank',
      title: 'Relaunch der Fidelity Fondsbank App',
      category: 'Mobile',
      summary:
        'Federführende Neukonzeption und technische Umsetzung der mobilen App – eine moderne, hoch performante Plattform zur Verwaltung von Fonds und zur detaillierten Depotanalyse.',
      highlights: [
        'Implementierung der Kernfunktionalitäten unter Berücksichtigung von Best Practices für Performance und Skalierbarkeit',
        'Depotanalyse & Visualisierung: komplexe Module zur grafischen Darstellung der Fonds-Performance und Analyse der Depotstruktur',
        'Fonds- und Portfolioverwaltung: Logik für die flexible Verwaltung von Fondspositionen',
        'Aufbau und Definition des gesamten Design Systems in Figma als Single Source of Truth',
        'Sicherstellung der Einhaltung relevanter Barrierefreiheitsrichtlinien (WCAG)',
        'Code Reviews, Testautomatisierung und Etablierung einer zukunftssicheren App-Architektur',
        'Integration robuster Sicherheitsmechanismen, z. B. biometrische Authentifizierung',
      ],
      technologies: ['Flutter', 'Dart', 'Figma', 'Design System', 'WCAG 2.2', 'UI/UX'],
      featured: true,
    },
    {
      id: 'barrierefrei',
      role: 'Gründer & Berater für Digitale Barrierefreiheit',
      period: '10.2024 – 07.2025',
      client: 'barriere-frei.digital',
      title: 'Beratung für digitale Barrierefreiheit',
      category: 'Web',
      summary:
        'Gründung einer spezialisierten Beratung für praxisnahe und gesetzeskonforme digitale Barrierefreiheit nach dem Barrierefreiheitsstärkungsgesetz (BFSG).',
      highlights: [
        'Barrierefreiheits-Checks für Webseiten und mobile Apps inkl. Zertifizierung und BFSG-konformer Erklärung',
        'Entwicklungsberatung zur technischen Umsetzung barrierefreier Anwendungen',
        'Individuelle Maßnahmen statt Standardlösungen – maßgeschneidert und schnell umsetzbar',
        'Optimierung der Nutzererfahrung (UX) zur Verbesserung von Usability und Zugänglichkeit',
        'Transparente Preisgestaltung, besonders für KMU und Startups',
        'Kombination aus rechtlichem und technischem Know-how',
      ],
      technologies: ['WCAG 2.2', 'BFSG', 'Figma', 'UI/UX', 'SEO', 'Wordpress', 'AWS'],
      featured: true,
    },
    {
      id: 'healthcare',
      role: 'UX-/UI-Designer & Software-Architekt',
      period: '11.2024 – 01.2025',
      client: 'Gesundheitswesen (NDA)',
      title: 'Web- & App-Design mit Architekturkonzeption',
      category: 'Design',
      summary:
        'Design für Web und App mit Figma sowie Architekturkonzeption einer Lösung, die es Patienten ermöglicht, über ihr Handy mit dem Personal zu kommunizieren.',
      highlights: [
        'Design der Benutzeroberflächen für Web und Mobile mit Fokus auf intuitiver UX/UI für Patienten und Personal',
        'Erstellung von Prototypen und Interaktionen zur Verbesserung der Kommunikation zwischen Patienten und Gesundheitsdienstleistern',
        'Architekturkonzeption unter Berücksichtigung der Datenschutzbestimmungen im Gesundheitswesen',
        'Sicherstellung der Barrierefreiheit durch Einhaltung der WCAG-Richtlinien',
      ],
      technologies: ['Figma', 'Lucidchart', 'UX/UI', 'Architektur', 'WCAG'],
      featured: false,
    },
    {
      id: 'union',
      role: 'Senior Flutter Developer',
      period: '09.2022 – 09.2024',
      client: 'Union Investment',
      title: 'Union Depot Online App – Relaunch',
      category: 'Mobile',
      summary:
        'Neuentwicklung der Union Depot Online App im Rahmen eines umfassenden Relaunches – modern, performant und benutzerfreundlich.',
      highlights: [
        'Depotübersicht: Anzeige und Visualisierung von Fondsanlagen und deren Performance',
        'Transaktionsabwicklung: sichere Kauf- und Verkaufsprozesse für Fondsanteile',
        'Spar- und Auszahlpläne: Module zur flexiblen Verwaltung wiederkehrender Zahlungen',
        'Postfach-Integration: Abruf und Archivierung von Depotauszügen und Abrechnungen',
        'Sicherheitsmechanismen: PIN-Schutz sowie TouchID/FaceID-Authentifizierung',
        'Enge Zusammenarbeit mit UX/UI-Designern, Qualitätssicherung durch Tests und Fehleranalysen',
      ],
      technologies: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'Java', 'REST', 'Docker', 'GitLab', 'SAFe'],
      featured: true,
    },
    {
      id: 'visualvest',
      role: 'Full-Stack-Entwickler (Flutter & Java)',
      period: '09.2021 – 09.2023',
      client: 'VisualVest',
      title: 'VisualVest App – Digitale Vermögensverwaltung',
      category: 'Mobile',
      summary:
        'Weiterentwicklung und Optimierung der VisualVest App – digitale Vermögensverwaltung mit Robo-Advisor, ausgebaut zur Whitelabel-Lösung für andere Banken.',
      highlights: [
        'Portfolio-Übersicht mit detaillierter Visualisierung',
        'Investmentprozesse: Kauf-, Verkaufs- und Sparplan-Funktionen für Fondsanlagen',
        'Onboarding: geführter Investitionsprozess für neue Nutzer',
        'Whitelabel-Integration: modulare Architektur, Mandantenfähigkeit und Anbindung an unterschiedliche Backend-Systeme',
        'Push-Benachrichtigungen sowie biometrische Authentifizierung',
        'Performance-Optimierung durch effizientes State Management und Code-Refactoring',
      ],
      technologies: ['Flutter', 'Dart', 'Java', 'Kotlin', 'Swift', 'PACT', 'Jenkins', 'SonarQube', 'Scrum'],
      featured: true,
    },
    {
      id: 'gls',
      role: 'Flutter Developer & Scrum Master',
      period: '09.2021 – 12.2022',
      client: 'GLS Bank',
      title: 'GLS Banking App & Whitelabel-Integration',
      category: 'Mobile',
      summary:
        'Weiterentwicklung der GLS Banking App und Integration der VisualVest Whitelabel-Investmentlösung – plus Scrum-Master-Verantwortung für ein 20-köpfiges Team.',
      highlights: [
        'Konten- und Depotübersicht: Kontostände, Transaktionen und Investment-Portfolios',
        'Zahlungsverkehr: SEPA-Überweisungen, Daueraufträge und Lastschriften',
        'Sicherheitsfeatures: 2-Faktor-Authentifizierung und biometrische Login-Optionen',
        'Nahtlose Einbindung der VisualVest Investment-Plattform im Corporate Design der GLS Bank',
        'Planung und Durchführung von 3-wöchigen Sprints inkl. Dailies, Retrospektiven und Refinements',
        'Führung von 20 Projektmitgliedern als Scrum Master',
      ],
      technologies: ['Flutter', 'Dart', 'Java', 'REST', 'JWT', 'GitLab', 'Scrum', 'SAFe'],
      featured: true,
    },
    {
      id: 'blockchain',
      role: 'Blockchain-Entwickler & Architekt',
      period: '01.2023 – 06.2023',
      client: 'Cofinpro AG (intern)',
      title: 'Tokenisierung von Unternehmensaktien',
      category: 'Web',
      summary:
        'Lokale Blockchain-Instanz mit Polygon Edge, Smart Contracts in Solidity und ein Angular-Frontend für die transparente, manipulationssichere Verwaltung tokenisierter Aktien.',
      highlights: [
        'Entwicklung von Smart Contracts in Solidity zur Abbildung der Token-Transfers',
        'Hosting einer privaten Blockchain-Instanz mit Polygon Edge',
        'Implementierung einer Web-Oberfläche mit Angular zur Verwaltung und Anzeige der tokenisierten Aktien',
        'Sicherstellung der Skalierbarkeit und Sicherheit der Blockchain-Umgebung',
      ],
      technologies: ['Angular', 'TypeScript', 'Solidity', 'Polygon Edge', 'Spring Boot', 'Java', 'AWS'],
      featured: false,
    },
    {
      id: 'seatbooking',
      role: 'Full-Stack-Entwickler (Angular & Spring Boot)',
      period: '01.2022 – 06.2022',
      client: 'Cofinpro AG (intern)',
      title: 'Sitzplatzbuchungstool für Büroarbeitsplätze',
      category: 'Web',
      summary:
        'Webanwendung zur effizienten und sicheren Verwaltung von Büroarbeitsplätzen während der Corona-Pandemie – mit interaktivem Büroplan und Admin-Dashboard.',
      highlights: [
        'Konzeption und Umsetzung mit Angular (Frontend) und Spring Boot (Backend)',
        'Interaktiver Büroplan zur Auswahl und Reservierung freier Sitzplätze',
        'Buchungsregeln zur Einhaltung von Abstands- und Hygienevorschriften',
        'Single Sign-On mit OAuth2 sowie Admin-Dashboard für HR und Facility-Management',
        'Automatisierte E-Mail-Benachrichtigungen und Cloud-Deployment',
        'Datenbankdesign mit PostgreSQL',
      ],
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'OAuth2', 'AWS'],
      featured: false,
    },
    {
      id: 'iot-agent',
      role: 'Softwareentwickler – IoT-Experte',
      period: '02.2021 – 08.2021',
      client: 'Software AG (intern)',
      title: 'Generischer IoT Device Management Agent',
      category: 'IoT',
      summary:
        'Plattformunabhängiger IoT-Agent, der auf jedem Python-fähigen Gerät installiert werden kann und über REST & MQTT mit der zentralen Plattform kommuniziert.',
      highlights: [
        'Architektur & Entwicklung eines flexiblen Agenten für heterogene IoT-Geräte',
        'Implementierung mit Python zur plattformübergreifenden Nutzung',
        'Integration von REST & MQTT für eine zuverlässige Geräteverwaltung',
        'Simulation von Firmware- und Softwareupdates direkt auf den Geräten',
      ],
      technologies: ['Python', 'MQTT', 'Docker', 'REST', 'Cumulocity IoT'],
      featured: false,
    },
    {
      id: 'smarthome',
      role: 'Softwareentwickler',
      period: '01.2021 – 09.2021',
      client: 'Selbstständig',
      title: 'Privates Smart-Home-System',
      category: 'IoT',
      summary:
        'Verteiltes System zur Automatisierung und Steuerung von Smart-Home-Geräten auf Basis von MQTT, OpenAPI und Thrift.',
      highlights: [
        'Design & Implementierung eines verteilten Systems für die Smart-Home-Steuerung',
        'MQTT für die Echtzeit-Kommunikation zwischen Geräten',
        'OpenAPI zur Bereitstellung einer flexiblen API für externe Anwendungen',
        'Thrift zur effizienten Serialisierung und Kommunikation zwischen Diensten',
      ],
      technologies: ['Python', 'MQTT', 'Raspberry Pi', 'OpenAPI', 'Thrift'],
      featured: false,
    },
    {
      id: 'okta',
      role: 'Full-Stack-Entwickler',
      period: '04.2020 – 09.2020',
      client: 'Software AG (intern)',
      title: 'Migration von Active Directory zu Okta',
      category: 'Backend',
      summary:
        'Planung und Umsetzung der Migration des Identity & Access Managements von Active Directory zu Okta – cloudbasiert, skalierbar und sicher.',
      highlights: [
        'Analyse der bestehenden AD-Architektur und Definition der Migrationsstrategie',
        'Integration von Okta als zentrale Authentifizierungsplattform',
        'Anbindung bestehender Anwendungen mit OAuth 2.0 / OpenID Connect (OIDC)',
        'Synchronisation der Benutzerverwaltung zwischen AD und Okta',
        'Testen und Absichern des Migrationsprozesses',
      ],
      technologies: ['Okta', 'OAuth 2.0', 'LDAP', 'Java', 'Python', 'Docker'],
      featured: false,
    },
    {
      id: 'lucene',
      role: 'Java-Softwareentwickler',
      period: '04.2019 – 09.2019',
      client: 'Software AG (intern)',
      title: 'Suchoptimierung mit Apache Lucene',
      category: 'Backend',
      summary:
        'Optimierung der Suchfunktion mit Apache Lucene zur Verbesserung von Trefferquote, Performance und Relevanz der Suchergebnisse.',
      highlights: [
        'Anpassung der Scoring-Methoden und Indexierungsstrategie zur Leistungssteigerung',
        'Implementierung von Synonym- und Stemming-Funktionen für präzisere Suchergebnisse',
        'Entwicklung eines maßgeschneiderten Query-Parsers für komplexe Suchanfragen',
        'Performance-Optimierung durch Benchmarking und Testing',
      ],
      technologies: ['Java', 'Apache Lucene', 'Elasticsearch', 'PostgreSQL', 'Maven'],
      featured: false,
    },
  ],
  skillGroups: [
    {
      name: 'Sprachen & Frameworks',
      icon: 'code',
      skills: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'Angular', 'TypeScript', 'Python', 'Swift', 'Kotlin', 'HTML', 'CSS', 'SQL'],
    },
    {
      name: 'Design & Barrierefreiheit',
      icon: 'palette',
      skills: ['Figma', 'UI/UX', 'Design Systems', 'WCAG 2.2', 'BFSG', 'User-Interviews', 'Canva'],
    },
    {
      name: 'Testing & Qualität',
      icon: 'verified',
      skills: ['JUnit', 'Mockito', 'PACT', 'SonarQube', 'Testautomatisierung', 'Clean Code'],
    },
    {
      name: 'DevOps & Tools',
      icon: 'build',
      skills: ['GitLab', 'Jenkins', 'Docker', 'Maven', 'Gradle', 'Rundeck', 'Keycloak', 'AWS', 'Postman'],
    },
    {
      name: 'Daten & Schnittstellen',
      icon: 'api',
      skills: ['REST', 'OpenAPI / Swagger', 'PostgreSQL', 'MySQL', 'MQTT', 'JSON', 'JWT'],
    },
    {
      name: 'Methoden & Monitoring',
      icon: 'group_work',
      skills: ['Scrum', 'SAFe', 'Domain Driven Design', 'Jira', 'Confluence', 'Matomo', 'Sentry'],
    },
  ],
  education: [
    { title: 'B. Sc. Informatik (Dual)', kind: 'Studium', icon: 'school' },
    { title: 'Zertifizierter Scrum Master', kind: 'Zertifikat', icon: 'workspace_premium' },
    { title: 'Figma Design System', kind: 'Zertifikat', icon: 'design_services' },
  ],
};
