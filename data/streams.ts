export const streamSchedule = [
  {
    id: "monday-market-prep",
    day: "Monday",
    time: "19:00 - 20:30 CET",
    title: "Week Start Market Analysis",
    description:
      "Weekly market outlook, identify key levels and set up trading plan for the week.",
    duration: "90 min",
    type: "analyse",
    recurring: true,
  },
  {
    id: "wednesday-live-trading",
    day: "Wednesday",
    time: "20:00 - 21:00 CET",
    title: "Live Trading Session",
    description:
      "Real-time trading with live market analysis, entry/exit timing and risk management.",
    duration: "60 min",
    type: "trading",
    recurring: true,
  },
  {
    id: "friday-week-review",
    day: "Friday",
    time: "18:30 - 20:00 CET",
    title: "Week Review & Q&A",
    description:
      "Look back on the week, trade reviews, Q&A session and preparation for next week.",
    duration: "90 min",
    type: "review",
    recurring: true,
  },
];

export const streamTopics = [
  {
    category: "Market Analysis",
    topics: [
      "Daily & weekly market structure analysis",
      "Key support and resistance levels",
      "Institutional order flow reading",
      "News impact and event trading",
      "Multi-timeframe correlation",
    ],
  },
  {
    category: "Live Trading",
    topics: [
      "Real-time entry and exit strategies",
      "Risk management during trades",
      "Position sizing decisions",
      "Stop loss and take profit placement",
      "Trade management and scaling",
    ],
  },
  {
    category: "Educational Content",
    topics: [
      "SMC concept explanation with examples",
      "Common mistakes and how to avoid them",
      "Psychology tips and mindset coaching",
      "Platform setup and tools demonstration",
      "Q&A and community feedback",
    ],
  },
];

export const streamFeatures = [
  {
    feature: "Live Interaction",
    description:
      "Chat along during streams, ask questions and get direct feedback",
    icon: "MessageSquare",
  },
  {
    feature: "Recordings Available",
    description: "Miss a stream? All recordings are available for replay",
    icon: "Video",
  },
  {
    feature: "Screen Sharing",
    description: "See exactly how Aaron analyzes charts and executes trades",
    icon: "Monitor",
  },
  {
    feature: "Trade Alerts",
    description:
      "Receive alerts for interesting setups discussed during streams",
    icon: "Bell",
  },
];

export const streamPlatform = {
  name: "YouTube Live",
  description:
    "Streams are held on a private YouTube channel accessible to members",
  requirements: [
    "Stable internet connection",
    "Computer, tablet or smartphone",
    "YouTube account for chat participation",
  ],
  accessNote: "Link is shared after registration",
};
