import first from "../assets/images/first.jpg";
import gym_home from "../assets/images/gym-home.png";
import nft_home from "../assets/images/nft-landing.png";
import plant from "../assets/images/plant.jpeg";
import profile from "../assets/images/profile-app.png";
import anime from "../assets/images/anime.png";
import salon from "../assets/images/salon-home.png";
import eccomerce from "../assets/images/eccomerce.png";
import photography from "../assets/images/studio-home.png";
import snake from "../assets/images/snake.png";

const projects = [
  {
    id: 1,
    title: 'Profile MERN App',
    subtitle: '(Full Stack User Management)',
    label: 'Profile App',
    description:
      'A full-stack MERN application where users can create, manage, and update their personal profiles securely. Includes frontend-backend integration, MongoDB database handling, REST APIs, and dynamic UI rendering.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#fc815c',
    image: profile,
    github: 'https://github.com/rihan2217/profile-mern',
    live: 'https://profile-mern-ten.vercel.app',
  },

  {
    id: 2,
    title: 'NFT Landing Page',
    subtitle: '(Modern Web3 UI)',
    label: 'NFT Landing',
    description:
      'A sleek and modern NFT landing page built using React.js and Tailwind CSS featuring responsive sections, animated UI components, and Web3-inspired design aesthetics.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    color: '#00c2ff',
    image: nft_home,
    github: 'https://github.com/rihan2217/NFT-landing-page--task2',
    live: 'https://nft-landing-page-task2.vercel.app/',
  },

  {
    id: 3,
    title: 'Plant Kart',
    subtitle: '(E-Commerce Platform)',
    label: 'Plant Kart',
    description:
      'Developed a full-stack e-commerce web application for buying plants online. Users can browse products, add items to cart, and place orders with a smooth and responsive user experience.',
    tags: ['JAVA', 'SERVLET', 'JSP', 'SQL', 'OOPS'],
    color: '#459bd5',
    image: plant,
    github: 'https://github.com/rihan2217/PLANT-KART',
    live: '',
  },

  {
    id: 4,
    title: 'IronForge Gym Website',
    subtitle: '(Fitness Demo Website)',
    label: 'IronForge Gym',
    description:
      'A modern and responsive gym website demo featuring workout sections, membership plans, trainers showcase, and strong visual UI focused on fitness branding.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#ff6b6b',
    image: gym_home,
    github: 'https://github.com/rihan2217/ironforge-gym-demo',
    live: 'https://ironforge-gym-demo.vercel.app/',
  },

  {
    id: 5,
    title: 'Mystery Salon Website',
    subtitle: '(Beauty & Salon Demo)',
    label: 'Mystery Salon',
    description:
      'A stylish salon demo website designed for beauty businesses with elegant layouts, service sections, appointment CTA, and responsive modern design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#ff9ec4',
    image: salon,
    github: 'https://github.com/rihan2217/Mystery-salon-demo',
    live: 'https://Mystery-salon-demo.vercel.app',
  },

  {
    id: 6,
    title: 'Photography Studio Website',
    subtitle: '(Creative Portfolio Demo)',
    label: 'Photography Studio',
    description:
      'A visually rich photography portfolio website showcasing galleries, hero sections, and elegant layouts designed for photographers and creative studios.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#8b5cf6',
    image: photography,
    github: 'https://github.com/rihan2217/photography-demo',
    live: 'https://photography-demo-sooty.vercel.app',
  },

  {
    id: 7,
    title: 'Anime Landing Page',
    subtitle: '[Watch & Enjoy]',
    label: 'AnimeVerse',
    description:
      'A visually engaging anime-themed landing page built with smooth animations, modern UI sections, and interactive design elements for anime fans.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Font Awesome'],
    color: '#ffe578',
    image: anime,
    github: 'https://github.com/rihan2217/Anime-verse',
    live: 'anime-verse-six.vercel.app',
  },

  {
    id: 8,
    title: 'E-Commerce Landing Page',
    subtitle: '(Shop & Live)',
    label: 'ShopEase',
    description:
      'A modern responsive shopping landing page showcasing products, categories, and promotional sections with clean UI and smooth layout design.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    color: '#fc815c',
    image: eccomerce,
    github: 'https://github.com/rihan2217/Ecomerce-landing-page',
    live: '',
  },

  {
    id: 9,
    title: 'Snake Game',
    subtitle: '(Classic Arcade Game)',
    label: 'Snake Game',
    description:
      'A fun browser-based Snake Game with smooth controls, score tracking, and responsive gameplay inspired by the classic arcade experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#47afa1',
    image: snake,
    github: 'https://github.com/rihan2217/snake-game',
    live: 'snake-game-ten-sable.vercel.app',
  },
]

export default projects