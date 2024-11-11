import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiRedux, SiVite} from "react-icons/si";
import { skillsType } from "@/types/skillsTypes";

export const skills: skillsType = {
  title: "My skills",
  description: `I bring strong expertise in both front-end and 
  back-end development, with skills in React and Next, Redux Toolkit, and responsive 
  design for creating engaging user interfaces. On the backend, I have experience with Node.js,
   Express, and building scalable server architectures.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiVite />,
      name: "vite",
    },
  ],
};
