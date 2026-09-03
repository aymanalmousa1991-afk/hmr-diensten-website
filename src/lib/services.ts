export interface Service {
  slug: string;
  title: string;
  category: "schoonmaak" | "verhuizing";
  short: string;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
}

export const services: Service[] = [
  {
    slug: "schoonmaak-woningen",
    title: "Schoonmaak woningen",
    category: "schoonmaak",
    short: "Grondige en verzorgde schoonmaak voor uw woning.",
    image: "/uploads/diensten/schoonmaak-woningen.jpg",
    description:
      "Een strak en schoon huis. Onze professionele woningschoonmaak zorgt voor een frisse en hygi\u00ebnische leefomgeving, van woonkamer tot badkamer.",
    highlights: [
      "Regelmatig onderhoud of eenmalige grote schoonmaak",
      "Milieuvriendelijke schoonmaakmiddelen",
      "Flexibel inplannen, ook in het weekend",
    ],
    included: [
      "Woon-, slaap- en kinderkamers",
      "Keuken en badkamer grondig gereinigd",
      "Afstoffen, stofzuigen en dweilen",
    ],
  },
  {
    slug: "bedrijfsschoonmaak",
    title: "Bedrijfsschoonmaak",
    category: "schoonmaak",
    short: "Een professionele en representatieve bedrijfsruimte.",
    image: "/uploads/diensten/bedrijfsschoonmaak.jpg",
    description:
      "Uw bedrijf verdient een stralend schone werkomgeving. Wij verzorgen een complete en betrouwbare schoonmaak voor uw bedrijfsruimte.",
    highlights: [
      "Representatieve uitstraling voor klanten en medewerkers",
      "Op maat gemaakte schoonmaakroosters",
      "Ervaren en gecertificeerd personeel",
    ],
    included: [
      "Kantoren, vergaderzalen en receptie",
      "Sanitaire ruimtes en pantry",
      "Vloeronderhoud en afvalinzameling",
    ],
  },
  {
    slug: "kantoorschoonmaak",
    title: "Kantoorschoonmaak",
    category: "schoonmaak",
    short: "Een productieve werkplek begint met een schoon kantoor.",
    image: "/uploads/diensten/kantoorschoonmaak.jpg",
    description:
      "Een schoon kantoor verhoogt de productiviteit en maakt een professionele indruk. Wij zorgen voor een hygi\u00ebnische en prettige werkomgeving.",
    highlights: [
      "Dagelijks, wekelijks of periodiek onderhoud",
      "Minimaal hinder tijdens werktijden",
      "Vaste en vertrouwde contactpersoon",
    ],
    included: [
      "Werkplekken en desktops gereinigd",
      "Vergaderzalen en ontspanningsruimtes",
      "Koffiecorners en keukens",
    ],
  },
  {
    slug: "gebouwen-en-vve",
    title: "Gebouwen & VvE",
    category: "schoonmaak",
    short: "Schoonmaak voor (woon)gebouwen en verenigingen van eigenaren.",
    image: "/uploads/diensten/gebouwen-en-vve.jpg",
    description:
      "Voor appartementencomplexen, kantoorgebouwen en VvE's bieden wij een complete en onderhoudende schoonmaak van alle gemeenschappelijke ruimtes.",
    highlights: [
      "Gemeenschappelijke ruimtes en trappenhuizen",
      "Structureel onderhoud voor heel het gebouw",
      "Duurzame en ADR-conforme verwerking",
    ],
    included: [
      "Ingangen, hallen en trappenhuizen",
      "Liften en gemeenschappelijke gangen",
      "Buitenruimtes en bergingen",
    ],
  },
  {
    slug: "winkels-en-horeca",
    title: "Winkels & horeca",
    category: "schoonmaak",
    short: "Een aantrekkelijke zaak die gastvrij en schoon overkomt.",
    image: "/uploads/diensten/winkels-en-horeca.jpg",
    description:
      "Eerste indruk is belangrijk. Wij houden uw winkel of horecazaak hygi\u00ebnisch en aantrekkelijk voor uw klanten.",
    highlights: [
      "Schoonmaak buiten openingstijden",
      "Hyg\u00ef\u00ebne conform horeca- en winkelnormen",
      "Snel en discreet te werk",
    ],
    included: [
      "Winkelinrichting en etalages",
      "Sanitaire ruimtes en kleedkamers",
      "Keuken en horecaruimtes",
    ],
  },
  {
    slug: "dieptereiniging",
    title: "Dieptereiniging",
    category: "schoonmaak",
    short: "Een intensieve en grondige reiniging van binnen tot buiten.",
    image: "/uploads/diensten/dieptereiniging.jpg",
    description:
      "Een grondige, intensieve reiniging die verder gaat dan gewoon schoonmaken. Ideaal voor bijvoorbeeld tapijten, meubels, voegen en moeilijke vlekken.",
    highlights: [
      "Verwijdert hardnekkig vuil en vlekken",
      "Geschikt voor tapijt, bekleding en voegen",
      "Fris \u00e9n grondig, met het juiste materiaal",
    ],
    included: [
      "Tapijten, matrassen en bekleding",
      "Keuken, badkamer en tegelwerk",
      "Binnen- en buitengevelreiniging",
    ],
  },
  {
    slug: "ramen-wassen",
    title: "Ramen wassen",
    category: "schoonmaak",
    short: "Streeploos helder zicht voor elke ruimte.",
    image: "/uploads/diensten/ramen-wassen.jpg",
    description:
      "Professioneel raamwerk met een vlekkeloos resultaat. Van woningen tot kantoren en winkelpanden \u2013 wij zorgen voor streeploos schone ramen.",
    highlights: [
      "Binnen- en buitenzijde van ruiten",
      "Werk met hoogwerker waar nodig",
      "Streeploos resultaat, snel en veilig",
    ],
    included: [
      "Ruiten en kozijnen",
      "Ramen op hoogte (hoogwerker)",
      "Gevel- en glasbewassing",
    ],
  },
  {
    slug: "oplevering-en-verhuisschoonmaak",
    title: "Oplevering & verhuisschoonmaak",
    category: "schoonmaak",
    short: "Sleutelklaar en fris bij oplevering of verhuizing.",
    image: "/uploads/diensten/oplevering-en-verhuisschoonmaak.jpg",
    description:
      "Verhuist u in of uit? Wij zorgen voor een grondige opleveringsschoonmaak, zodat u uw borg terugkrijgt en fris in uw nieuwe woning trekt.",
    highlights: [
      "Complete eindschoonmaak voor oplevering",
      "Voldoen aan verhuur- en verzekeringseisen",
      "Snel in te plannen rond uw verhuizing",
    ],
    included: [
      "De hele woning of bedrijfspand",
      "Keuken, sanitair en vloeren",
      "Kozijnen, radiatoren en plinten",
      "Volstaan aan opleveringsinspectie",
    ],
  },
  {
    slug: "periodieke-schoonmaak",
    title: "Periodieke schoonmaak",
    category: "schoonmaak",
    short: "Een vast ritme voor een constante schone omgeving.",
    image: "/uploads/diensten/periodieke-schoonmaak.jpg",
    description:
      "Plan uw schoonmaak op vaste momenten. Een periodiek contract zorgt voor een constant schone en hygi\u00ebnische omgeving, precies op uw ritme.",
    highlights: [
      "Wekelijks, tweewekelijks of maandelijks",
      "Vaste, vertrouwde medewerkers",
      "Scherpe tarieven bij abonnement",
    ],
    included: [
      "Vaste afspraken op uw voorkeursmoment",
      "Consistente kwaliteit en vertrouwen",
      "Weinig onderhoud van uw kant",
    ],
  },
  {
    slug: "verhuisservice",
    title: "Verhuisservice",
    category: "verhuizing",
    short: "Zorgeloos verhuizen met onze complete service.",
    image: "/uploads/diensten/verhuisservice.jpg",
    description:
      "Van inpakken tot uitpakken: wij nemen de hele verhuizing uit handen. U hoeft alleen nog op de verhuisdag klaar te zijn voor uw nieuwe thuis.",
    highlights: [
      "Professionele en ervaren verhuizers",
      "Zorgvuldig omgaan met uw inboedel",
      "Snel en effici\u00ebnt te werk",
    ],
    included: [
      "Inpakken en inboedelbescherming",
      "Laden, rijden en lossen",
      "Uitpakken en meubels plaatsen",
    ],
  },
  {
    slug: "bedrijfsverhuizing",
    title: "Bedrijfsverhuizing",
    category: "verhuizing",
    short: "Uw kantoor of bedrijf verhuisd zonder stilstand.",
    image: "/uploads/diensten/bedrijfsverhuizing.webp",
    description:
      "Wij verhuizen uw kantoor of bedrijf compleet, snel en met minimale stilstand. Uw collega's kunnen zo snel mogelijk weer aan de slag.",
    highlights: [
      "Planning rondom uw bedrijfsprocessen",
      "Inventariseren en professioneel inpakken",
      "Kantoormeubilair en apparatuur zorgvuldig",
    ],
    included: [
      "Inventarislijst en verhuisplanning",
      "Inpakken, transport en uitpakken",
      "Opnieuw opbouwen op de nieuwe locatie",
    ],
  },
  {
    slug: "woningontruiming",
    title: "Woningontruiming",
    category: "verhuizing",
    short: "Volledige en respectvolle leegruiming van uw woning.",
    image: "/uploads/diensten/woningontruiming.jpg",
    description:
      "Wij ontruimen uw woning volledig en respectvol. Van inboedel tot achtergelaten spullen \u2013 wij regelen alles netjes en verantwoord.",
    highlights: [
      "Volledig en snel opgeruimd",
      "Respectvolle en zorgvuldige werkwijze",
      "Duurzame afvoer en verantwoorde verwerking",
    ],
    included: [
      "Complete leegruiming van de woning",
      "Afvoer en duurzame verwerking",
      "Achterlaten van een schone woning",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(
  category: Service["category"]
): Service[] {
  return services.filter((s) => s.category === category);
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "schoonmaak",
    title: "Schoonmaak",
    description:
      "Professionele schoonmaakdiensten voor woningen en bedrijven.",
  },
  {
    slug: "verhuizing",
    title: "Verhuizing & Transport",
    description:
      "Verhuis- en transportdiensten, van woningontruiming tot bedrijfsverhuizing.",
  },
];
