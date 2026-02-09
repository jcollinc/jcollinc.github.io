export const meta = {
  name: 'Jon-Collin Chinje',
  location: 'Queens, New York',
  role: 'Software Engineer',
  summary:
    'I build resilient, human-centered web experiences with a bias toward clarity, iteration, and long-term maintainability.'
};

export const links = {
  email: 'j.chinje@gmail.com',
  github: 'https://github.com/jcollinc',
  linkedin: 'https://www.linkedin.com/in/jon-collin-chinje/',
  medium: 'https://medium.com/@j.chinje',
  resume: '/resume.pdf'
};

export const hero = {
  headline: 'Building things for myself that hopefully are useful for other people too',
  subheadline:
    "I like building things and I like delighting folks",
  heroImage: '/images/jon-collin.jpeg',
  bullets: [
    'Software engineer with a focus on TypeScript and React',
    'AWS Open Source Fellow who enjoys collaborative problem solving',
    'Forever student of good UX, clean architecture, and joyful tooling'
  ],
  ctaPrimary: {
    label: 'Résumé',
    href: links.resume
  },
  ctaSecondary: {
    label: 'Say hello',
    href: 'mailto:j.chinje@gmail.com'
  }
};

export const about = {
  title: "Hello, I'm Jon-Collin",
  body: [
    "I’ve trained my eye for both detail and design, and delight in translating complex ideas into dependable, people-centric tools. Lately I’ve been working on the expense-splitting app, PayTogether, and the FPL companion app, myFPL - both of which I hope serve as a reflection of this.",
    "When I’m not working, I’m probably playing guitar, taking a wrong turn, or learning yet another way to brew a cup of coffee (there are too many)."
  ]
};

export const experience = [
  {
    company: 'Droit',
    role: 'Knowledge Engineer'
  },
  {
    company: 'Amazon Web Services (via MLH)',
    role: 'Software Engineer Fellow'
  },
  {
    company: 'YRCI',
    role: 'Documentation and QA Analyst'
  }
];

export const education = [
  {
    institution: 'Major League Hacking',
    program: 'Open Source Fellowship'
  },
  {
    institution: 'Flatiron School',
    program: 'Software Engineering Bootcamp'
  },
  {
    institution: 'George Mason University',
    program: 'B.S. Economics'
  }
];

export const projects = [
  {
    name: 'Maja Labs',
    description:
      'The independent software studio and legal entity behind my production applications, including PayTogether and myFPL.',
    impact:
      'A home for "thoughtfully crafted software," unifying my ventures under a shared commitment to design quality and engineering rigor.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    demo: 'https://majalabs.net',
    demoLabel: 'Visit site',
    image: '/projects/majalabs.png'
  },
  {
    name: 'PayTogether',
    description:
      'Bill-splitting and expense tracking app that facilitates managing group finances.',
    impact:
      'Currently in private beta. Features smart settle-up suggestions, spending analytics, receipt scanning, and customizable themes to help groups stay on top of shared expenses.',
    tags: ['React', 'TypeScript', 'Next.js', 'PostgreSQL'],
    demo: 'https://paytogether.io',
    demoLabel: 'Learn more',
    app: 'https://app.paytogether.io',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.paytogether',
    image: '/projects/paytogether.png'
  },
  {
    name: 'myFPL',
    description:
      'Mobile-first PWA for Fantasy Premier League that combines real-time tracking with AI-driven decision support.',
    impact:
      'Features live effective points calculation, algorithmic transfer recommendations, and personalized weekly AI analysis reports to help managers rank higher.',
    tags: ['Next.js', 'Supabase', 'OpenAI', 'Stripe'],
    demo: 'https://myfpl.co/about',
    demoLabel: 'Learn more',
    app: 'https://www.myfpl.co',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.myfpl.app',
    image: '/projects/myfpl.png'
  },
  {
    name: 'ToneBook',
    description:
      'Practice companion for musicians featuring structured routines, lesson planning, and progress tracking.',
    impact:
      'Improves practice consistency by translating music pedagogy into actionable daily habits.',
    tags: ['React', 'Ruby on Rails', 'PostgreSQL'],
    code: 'https://github.com/jcollinc/capstone',
    demo: 'https://www.youtube.com/watch?v=lY9g-pIvGqk',
    image: '/projects/tone.png'
  }
];

export const writing = [
  {
    title: 'Here, There, or Everywhere: An Introduction to JavaScript Scope',
    description: 'Demystifying how JavaScript decides where to look for your variables.',
    date: 'March 9, 2022',
    url: 'https://medium.com/@j.chinje/here-there-or-everywhere-an-introduction-to-javascript-scope-11c486670749'
  },
  {
    title: 'Site Navigation with the useHistory() Hook',
    description: 'Hands-on guide for taming client-side routing in React.',
    date: 'March 31, 2022',
    url: 'https://medium.com/@j.chinje/quick-guide-to-site-navigation-with-the-usehistory-hook-eceef7cbc6fa'
  },
  {
    title: 'A Useful Approach to Light / Dark Mode in your React App',
    description: 'Designing theme systems with CSS custom properties and empathy.',
    date: 'April 21, 2022',
    url: 'https://medium.com/@j.chinje/a-useful-approach-to-light-dark-mode-in-your-react-app-6d08ab6c5b4'
  }
];

export const skills = {
  toolkit: [
    'TypeScript',
    'JavaScript',
    'Python',
    'React',
    'Next.js',
    'Node.js',
    'Ruby on Rails',
    'SQL',
    'GraphQL',
    'AWS',
    'PostgreSQL',
    'Tailwind CSS'
  ],
  values: [
    'Empathy for teammates and users',
    'Accessibility is non-negotiable',
    'Continuous delivery of small wins',
    'Documentation as an act of service'
  ]
};

