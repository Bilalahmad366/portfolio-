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
  evernest,
  bubblebanner,
  ecommerce,
  jobportal,
  netflixclone,
  portfolio3d,
  randommeals,
  collagegen,
  rentservice,
  solarbilling,
  theCovenest,
  inventorySaas,
  nottingham,
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
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    title: "Lead Developer",
    company_name: "Optimus Algos",
    icon: optimus,
    iconBg: "#383E56",
    date: "July 2022 - August 2025",
    points: [
      "Led the development of SaaS-based projects and managed the complete development lifecycle from concept to deployment.",
      "Developed dynamic and scalable web applications using Vue.js, Next.js, React.js, JavaScript, and TypeScript.",
      "Built and maintained full-stack applications with Node.js, Laravel, and MongoDB, ensuring high performance and scalability.",
      "Designed and integrated RESTful APIs, implemented authentication using JWT, and managed CI/CD pipelines for continuous deployment.",
      "Collaborated with cross-functional teams to ensure seamless integration between frontend and backend systems.",
      "Optimized website performance, accessibility, and SEO to improve user engagement and search engine visibility.",
      "Provided technical leadership, conducted code reviews, and mentored junior developers to uphold best practices and coding standards.",
    ],
  },
  {
    title: "Full-Stack Lead Developer",
    company_name: "Evernest Marketing",
    icon: evernest,
    iconBg: "#E6DEDD",
    date: "September 2025 - Present",
    points: [
      "Leading multiple full-stack projects including travel websites (like Booking.com), real estate platforms, and corporate websites.",
      "Developed and deployed TheCovenest.com, a live platform, and HCPL website, ensuring full functionality and responsiveness.",
      "Worked with React.js, Next.js, Vue.js, Node.js, Laravel, and MongoDB for building high-performance, scalable web applications.",
      "Implemented RESTful APIs, authentication, and payment gateways for booking and e-commerce functionalities.",
      "Optimized frontend and backend performance, ensuring fast load times, cross-browser compatibility, and mobile-first design.",
      "Collaborated with designers and stakeholders to deliver high-quality user experiences across all projects.",
      "Mentored team members, performed code reviews, and implemented best practices in coding and project management.",
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
    name: "Inventory-SaaS",
    description:
      "A comprehensive inventory management system with a fully role-based dashboard, advanced permissions, bulk product uploads, sales points, purchase reports, and real-time analytics. Developed to handle end-to-end inventory operations efficiently.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "SaaS", color: "pink-text-gradient" },
      { name: "Dashboard", color: "orange-text-gradient" },
      { name: "Role-based", color: "purple-text-gradient" },
    ],
    image: inventorySaas,
    source_code_link: "https://inventory-saas.netlify.app/",
  },
  {
    name: "Nottingham Travel",
    description:
      "A full-stack travel booking platform built with Next.js, featuring a powerful admin dashboard that manages real-time hotel, flight, and package bookings. The system allows administrators to track bookings, update availability, manage payments, and generate reports, ensuring smooth operations and an optimized user experience.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Admin Dashboard", color: "orange-text-gradient" },
      { name: "Real-time Booking", color: "purple-text-gradient" },
    ],
    image: nottingham,
    source_code_link: "#", // Update if there’s a live demo or repo link
  },
  {
    name: "TheCovenest.com",
    description:
      "A fully live real estate platform built with Node.js and Vue.js. Features a responsive frontend and a comprehensive admin dashboard for managing listings, user accounts, bookings, and content dynamically. End-to-end development including API integrations and performance optimization.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "Real Estate", color: "pink-text-gradient" },
      { name: "Dashboard", color: "orange-text-gradient" },
      { name: "Full-stack", color: "purple-text-gradient" },
    ],
    image: theCovenest,
    source_code_link: "https://thecovenest.com",
  },
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
    source_code_link:
      "https://github.com/Bilalahmad366/random-collage-generator",
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
