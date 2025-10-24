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
  headline: 'Shipping accessible products with curiosity and care.',
  subheadline:
    "I'm a software engineer who loves untangling complexity – from tone generation apps for musicians to cloud-first experiences at AWS.",
  heroImage: '/images/jon-collin.jpeg',
  bullets: [
    'Full-stack engineer with a focus on TypeScript and React',
    'AWS Open Source Fellow who enjoys collaborative problem solving',
    'Forever student of good UX, clean architecture, and joyful tooling'
  ],
  ctaPrimary: {
    label: 'View resume',
    href: links.resume
  },
  ctaSecondary: {
    label: 'Say hello',
    href: 'mailto:j.chinje@gmail.com'
  }
};

export const about = {
  title: "Hi, I'm Jon-Collin",
  body: [
    "I came to engineering through a love of music, language, and the systems that bring them to life. Flatiron School and the Major League Hacking Open Source Fellowship sharpened my ability to learn fast, communicate clearly, and deliver dependable software.",
    "Most recently I partnered with teams at Amazon Web Services to explore how developers adopt new tooling. The work taught me how to craft experiments, listen for signal, and iterate without losing sight of the humans involved.",
    "Outside of code you'll find me practicing trumpet, taking photos around New York, or experimenting with new coffee beans. These creative routines keep my sense of play alive and make me a better collaborator."
  ]
};

export const experience = [
  {
    company: 'Amazon Web Services',
    role: 'Software Engineering Fellow',
    start: '2022',
    end: '2022',
    highlights: [
      'Paired with AWS maintainers to evaluate developer workflows for open-source tooling.',
      'Built feedback dashboards that surfaced actionable insights for product teams.',
      'Facilitated weekly demos and retrospectives to align fellows around shared learnings.'
    ]
  }
];

export const education = [
  {
    institution: 'Major League Hacking',
    program: 'Open Source Fellowship',
    start: '2022',
    end: '2022'
  },
  {
    institution: 'Flatiron School',
    program: 'Software Engineering Bootcamp',
    start: '2022',
    end: '2022'
  },
  {
    institution: 'George Mason University',
    program: 'B.S. Economics',
    start: '2012',
    end: '2017'
  }
];

export const projects = [
  {
    name: 'ToneBook',
    description:
      'Practice companion for brass musicians featuring structured routines, lesson planning, and progress tracking.',
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
  },
  {
    name: 'Study Room',
    description:
      'Community message board with a virtual coffee bar to help classmates stay connected.',
    impact: 'Explored REST conventions and front-end state patterns using a JSON Server backend.',
    tags: ['React', 'REST APIs', 'State Management'],
    code: 'https://github.com/jcollinc/Study-Room',
    demo: 'https://www.youtube.com/watch?v=Xx0XEUWkUIY',
    image: '/projects/study-room.png'
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
    'React',
    'Next.js',
    'Node.js',
    'Ruby on Rails',
    'GraphQL',
    'AWS',
    'PostgreSQL',
    'Tailwind CSS',
    'Jest'
  ],
  values: [
    'Clarity over cleverness',
    'Empathy for teammates and users',
    'Accessibility is non-negotiable',
    'Continuous delivery of small wins',
    'Documentation as an act of service'
  ]
};

export const contact = {
  headline: "Let’s collaborate.",
  description:
    'I love partnering with teams who care about reliable, human-centered products. Tell me about your project, or just share a great song recommendation.',
  email: links.email
};
