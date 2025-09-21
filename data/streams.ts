export const streamSchedule = [
  {
    id: "monday-market-prep",
    day: "Maandag",
    time: "19:00 - 20:30 CET",
    title: "Week Start Market Analysis",
    description: "Weekly market outlook, key levels identificeren en trading plan voor de week opstellen.",
    duration: "90 min",
    type: "analyse",
    recurring: true,
  },
  {
    id: "wednesday-live-trading",
    day: "Woensdag",
    time: "20:00 - 21:00 CET",
    title: "Live Trading Session",
    description: "Real-time trading met live market analyse, entry/exit timing en risk management.",
    duration: "60 min",
    type: "trading",
    recurring: true,
  },
  {
    id: "friday-week-review",
    day: "Vrijdag",
    time: "18:30 - 20:00 CET",
    title: "Week Review & Q&A",
    description: "Terugblik op de week, trade reviews, Q&A sessie en voorbereiding volgende week.",
    duration: "90 min",
    type: "review",
    recurring: true,
  },
]

export const streamTopics = [
  {
    category: "Market Analysis",
    topics: [
      "Daily & weekly market structure analyse",
      "Key support en resistance levels",
      "Institutional order flow reading",
      "News impact en event trading",
      "Multi-timeframe correlation",
    ],
  },
  {
    category: "Live Trading",
    topics: [
      "Real-time entry en exit strategieën",
      "Risk management tijdens trades",
      "Position sizing decisions",
      "Stop loss en take profit plaatsing",
      "Trade management en scaling",
    ],
  },
  {
    category: "Educational Content",
    topics: [
      "SMC concept uitleg met voorbeelden",
      "Common mistakes en hoe te vermijden",
      "Psychology tips en mindset coaching",
      "Platform setup en tools demonstratie",
      "Q&A en community feedback",
    ],
  },
]

export const streamFeatures = [
  {
    feature: "Live Interactie",
    description: "Chat mee tijdens streams, stel vragen en krijg directe feedback",
    icon: "MessageSquare",
  },
  {
    feature: "Opnames Beschikbaar",
    description: "Mis je een stream? Alle opnames zijn beschikbaar voor terugkijken",
    icon: "Video",
  },
  {
    feature: "Screen Sharing",
    description: "Zie exact hoe Aaron de charts analyseert en trades uitvoert",
    icon: "Monitor",
  },
  {
    feature: "Trade Alerts",
    description: "Ontvang alerts voor interessante setups die tijdens streams besproken worden",
    icon: "Bell",
  },
]

export const streamPlatform = {
  name: "YouTube Live",
  description: "Streams worden gehouden op een privé YouTube kanaal toegankelijk voor leden",
  requirements: [
    "Stabiele internetverbinding",
    "Computer, tablet of smartphone",
    "YouTube account voor chat participatie",
  ],
  accessNote: "Link wordt gedeeld na aanmelding",
}
