import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vuejs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  optimus,
  bubblebanner,
  ecommerce,
  jobportal,
  netflixclone,
  portfolio3d,
  randommeals,
  collagegen,
  rentservice,
  solarbilling
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Docker & DevOps",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Web Developer",
    company_name: "Optimus Algos",
    icon: optimus,
    iconBg: "#E6DEDD",
    date: "july 2022 - present",
    points: [
      "Developed dynamic and scalable web applications using vue.js , Next.js, React.js, javascript and TypeScript.",
      "Integrated RESTful APIs and optimized frontend performance for fast load times.",
      "Worked on cross-browser compatibility and mobile-first designs.",
      "Improved website accessibility and SEO to enhance search engine ranking.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Optimus Algos",
    icon: optimus,
    iconBg: "#383E56",
    date: "jan 2023 - present",
    points: [
      "Developed and maintained web applications using React.js, Vue.js , next.js , CSS and Tailwind CSS.",
      "Implemented responsive and interactive UI components to enhance user experience.",
      "Collaborated with designers and backend developers to ensure seamless integration.",
      "Participated in code reviews and optimized performance for better scalability.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Optimus Algos",
    icon: optimus,
    iconBg: "#383E56",
    date: "april 2023 - present",
    points: [
      "Built and maintained scalable web applications using Node.js , next.js, Laravel, and MongoDB.",
      "Designed RESTful APIs and implemented authentication with JWT.",
      "Deployed applications using Docker and managed CI/CD pipelines.",
      "Collaborated with teams to optimize database queries and improve performance.",
    ],
  },
  
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bubble Banner",
    description:
      "Animated HTML/CSS/JS banner with floating bubbles for visually engaging web headers and landing pages.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: bubblebanner, 
    source_code_link: "https://github.com/Bilalahmad366/",
  },
  {
    name: "E-commerce Website",
    description:
      "Vue-based e-commerce platform using REST APIs for product browsing, cart management, and order placement.",
    tags: [
      { name: "vue", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: ecommerce, 
    source_code_link: "https://github.com/Bilalahmad366/ecomerce_web",
  },
  {
    name: "Job Portal",
    description:
      "Job portal built with Vue and Node.js, enabling job posting, searching, and user-based application tracking.",
    tags: [
      { name: "vue", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
    ],
    image: jobportal, 
    source_code_link: "https://github.com/Bilalahmad366/job-portal- ",
  },
  {
    name: "Netflix Clone",
    description:
      "A clean and responsive Netflix UI clone using HTML and CSS for layout and styling, built to mimic core visual structure.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
    ],
    image: netflixclone, 
    source_code_link: "https://github.com/Bilalahmad366/Netflex",
  },
  {
    name: "3D Portfolio",
    description:
      "An interactive 3D portfolio using React and Three.js, showcasing creative work with animated and immersive visuals.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
    ],
    image: portfolio3d, 
    source_code_link: "https://github.com/Bilalahmad366/portfolio-",
  },
  {
    name: "Random Meals App",
    description:
      "Vue app using public REST APIs where users can search meals by name, letter, or ingredients, with a clean UI.",
    tags: [
      { name: "vue", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
    ],
    image: randommeals, 
    source_code_link: "https://github.com/Bilalahmad366/random-meals",
  },
  {
    name: "Random Collage Generator",
    description:
      "Generates artistic collage-style layouts randomly, combining visual blocks in unique grid-based designs each time.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: collagegen, 
    source_code_link: "https://github.com/Bilalahmad366/random-collage-generator",
  },
 {
  name: "Rent Service & Property Management",
  description:
    "A comprehensive system to manage tenants, monthly rent reports, property sections, and CRUD operations for properties. Designed for landlords and property admins to organize rental operations efficiently.",
  tags: [
    { name: "vue", color: "blue-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
  ],
  image: rentservice,
  source_code_link: "https://github.com/Bilalahmad366/rent-service",
},
  {
    name: "Solar Billing System",
    description:
      "A utility management system to track and bill solar energy users, with tenant-level control and monthly usage summaries.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "vue", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: solarbilling, 
    source_code_link: "https://github.com/Bilalahmad366/solar-billing-system-",
  },
];

export { services, technologies, experiences, testimonials, projects };