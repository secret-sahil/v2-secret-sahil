module.exports = {
  email: 'contact@mrsahil.in',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/secret-sahil',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/secret-sahil',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/secretsahil',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/secret-sahil',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/secret-sahil',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/pensieve',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
