export const meta = {
  name: 'Jon-Collin Chinje',
  location: 'Queens, New York',
  role: 'Software Engineer',
  summary:
    'I build resilient, human-centered web experiences with a bias toward clarity, iteration, and long-term maintainability.'
};

export const placeholders = {
  cityDehumidifierLink: '{{cityDehumidifierLink}}'
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
    "It's a perfect match: I like building things and I like delighting folks",
  heroImage: '/images/jon-collin.jpeg',
  bullets: [
    'Full-stack engineer with a focus on TypeScript and React',
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
  title: "Salut, I'm Jon-Collin",
  body: [
    "I'm mostly driven by dissatisfaction. Dissatisfaction with the portrait I'm currently staring at that I'm now noticing is a little bit off center, with audio recordings where the mix isn't quite right, with systems that work but aren't optimal, with sweltering New York summers that last far too long...",
    `Fortunately, most of these I can fix. My current project is a city-scale dehumidifier. More on that effort ${placeholders.cityDehumidifierLink}.`,
    "I’ve trained my eye for both detail and design, and delight in translating complex ideas into dependable, people-centric tools. Lately I’ve been building the expense-splitting app, PayTogether, which I hope serves as a reflection of this.",
    "When I’m not working, I’m probably playing guitar, taking a wrong turn, or learning yet another way to brew a cup of coffee (there are lots - perhaps too many)."
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
    name: 'PayTogether',
    description:
      'Bill-splitting and expense tracking app that facilitates managing group finances.',
    impact:
      'Currently in private beta. Features smart settle-up suggestions, spending analytics, and customizable themes to help groups stay on top of shared expenses.',
    tags: ['React', 'TypeScript', 'Next.js', 'PostgreSQL'],
    code: '',
    demo: 'https://paytogether.io',
    image: '/projects/paytogether.png'
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
  },
  {
    name: 'Bubblegram',
    description:
      'AWS Amplify-powered social app where friends exchange “bubble” photo stories in private feeds.',
    impact: 'Prototyped in a weekend hackathon, validating Amplify’s speed for authenticated media sharing.',
    tags: ['AWS Amplify', 'React', 'GraphQL'],
    code: 'https://github.com/jcollinc/Bubblegram',
    demo: 'https://www.youtube.com/watch?v=X2OwRFLXRzY',
    image: '/projects/bubble.png'
  },
  {
    name: 'Dotify',
    description:
      'A Spotify-inspired music explorer with playlist management and playback powered by React and Sinatra.',
    impact:
      'Strengthened full-stack fundamentals by designing communication patterns between RESTful APIs and React state.',
    tags: ['React', 'Sinatra', 'SQLite'],
    code: 'https://github.com/jcollinc/Dotify',
    demo: 'https://www.youtube.com/watch?v=PeQ3-VH7qQ4',
    image: '/projects/dotify.png'
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

