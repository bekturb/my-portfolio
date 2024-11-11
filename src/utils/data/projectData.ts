import { projectType } from "@/types/projectTypes"

export const projects: projectType[] = [
    {
      num: "01",
      category: "mern stack",
      title: "project 1",
      description: `I've developed an e-commerce platform designed for seamless buying and selling, 
      inspired by marketplaces like Wildberries. The app enables users to browse a wide variety of products, manage purchases, 
      and sell items with ease.`,
      stack: [{ name: "Html 5"}, { name: "Scss"}, {name: "React"}, {name: "Node js"}],
      image: "/assets/work/thumb1.png",
      live: "https://e-commerce-store-pi-ochre.vercel.app/",
      github: "https://github.com/bekturb/e-commerce-store.git"
    },
    {
      num: "02",
      category: "mern stack",
      title: "project 2",
      description: `I developed an app exclusively for our architecture company to upload and 
      showcase the projects we've built. The platform highlights our completed works, visualizes our designs, 
      and underscores the company's unique achievements in construction and architecture`,
      stack: [{ name: "Html 5"}, { name: "Scss"}, {name: "React"}, {name: "Node js"}],
      image: "/assets/work/thumb2.png",
      live: "https://adc-project-ten.vercel.app/",
      github: "https://github.com/bekturb/adc-project.git"
    },
    {
      num: "03",
      category: "frontend",
      title: "project 3",
      description: `I created an app for our architecture firm to showcase projects that blend beauty with functionality. 
      It highlights our work, design process, and commitment to usability and accessibility.`,
      stack: [{ name: "Html 5"}, { name: "Css 3"}, {name: "Javascript"}],
      image: "/assets/work/thumb3.png",
      live: "https://wishbone-partners.vercel.app/",
      github: "https://github.com/bekturb/wishbone-partners.git"
    },
    {
      num: "04",
      category: "frontend",
      title: "project 4",
      description: `I developed an app dedicated to health and wellness,
       offering insights into foods and products that support a healthy lifestyle. 
      It’s designed to help users make informed choices for better health.`,
      stack: [{ name: "Html 5"}, { name: "Css 3"}, {name: "Javascript"}],
      image: "/assets/work/thumb4.png",
      live: "https://zeon-test-project.vercel.app/",
      github: "https://github.com/bekturb/zeon-test-project.git"
    },
    {
      num: "04",
      category: "frontend",
      title: "project 4",
      description: `I built a calculator application that provides precise 
      and user-friendly calculations, designed to simplify daily tasks and enhance productivity.`,
      stack: [{ name: "Html 5"}, { name: "Css 3"}, {name: "Javascript"}],
      image: "/assets/work/thumb5.png",
      live: "https://calculator-class.vercel.app/",
      github: "https://github.com/bekturb/Calculator-Class.git"
    },
  ]