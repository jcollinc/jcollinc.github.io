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
  headline: 'Building things for myself that, hopefully, are somewhat useful for other people as well™',
  subheadline:
    "I like building things and I like delighting folks",
  heroImage: '/images/jon-collin.jpeg',
  bullets: [
    'Built myFPL to win my work league (and to help others win theirs)',
    'Built PayTogether because I wanted to',
    'Will spend an unreasonable amount of time on a reasonable problem'
  ],
  ctaPrimary: {
    label: 'Resumé',
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
    "My most defining trait is probably that I'm willing to spend an hour automating something that saves me seconds every time I have to do it. I care a lot about the little things, because I know too well that a big thing is only as good as its worst little thing. Whether I'm encoding financial regulations into executable logic or building consumer apps like PayTogether and myFPL, that same stubbornness about the details shows up in everything I build.",
    "When I’m not working, I’m probably playing guitar, taking a wrong turn, suffering in the gym, or learning yet another coffee-brewing method (there are too many of these)."
  ]
};

export const experience = [
  {
    company: 'MajaLabs LLC',
    role: 'Software Engineer'
  },
  {
    company: 'Droit',
    role: 'Knowledge Engineer'
  },
  {
    company: 'Amazon Web Services',
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
    name: 'MajaLabs',
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
      'Bill-splitting and expense tracking app that makes managing group expenses simple.',
    impact:
      'Features smart settle-up suggestions, spending analytics, receipt scanning, and customizable themes to help groups stay on top of shared costs.',
    tags: ['React', 'TypeScript', 'Next.js', 'PostgreSQL'],
    demo: 'https://paytogether.io',
    demoLabel: 'Learn more',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.paytogether',
    appStore: 'https://apps.apple.com/us/app/paytogether-split-expenses/id6759358041',
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
    googlePlay: 'https://play.google.com/store/apps/details?id=com.myfpl.app',
    appStore: 'https://apps.apple.com/us/app/myfpl-fpl-companion/id6759417457',
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
    "TypeScript", 
    "React", 
    "Next.js", 
    "Node.js", 
    "PostgreSQL", 
    "Tailwind CSS", 
    "Supabase", 
    "Firebase", 
    "Stripe"
  ],
  values: [
    "Empathy for teammates and users",
    "Accessibility is non-negotiable",
    "Automate the boring parts",
    "Sweat the details so users don't have to"
  ]
};

