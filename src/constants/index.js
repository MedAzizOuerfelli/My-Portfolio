import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  angular,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-End Development",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: mobile,
  },
  {
    title: "Machine Learning",
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
    name: "cpp",
    icon: cpp,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name:"python",
    icon: python,
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
    name: "3D Portfolio",
    description:
      "A modern 3D portfolio website built with React, Three.js, and Tailwind CSS. Features smooth animations, 3D models, and responsive design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MedAzizOuerfelli/My-Portfolio",
  },
  {
    name: "Freelance Platform",
    description:
      "The project aims to create an online platform where freelancers can showcase their skills, and clients can post projects. It connects both sides and offers tools for managing projects, payments, and reviews.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name:"Express Js",
        color:"orange-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MedAzizOuerfelli/PFA",
  },
  {
    name: "Real-Time Object Detection",
    description:
      "A computer vision project that implements real-time object detection using machine learning and deep learning techniques. The system can identify and track multiple objects in video streams with high accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "orange-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MedAzizOuerfelli/",
  },
];

export { services, technologies, testimonials, projects };
