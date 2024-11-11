import { educationsType } from "@/types/educationTypes"

export const educations: educationsType = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: 
    `I have a diverse educational background in web development. Currently, I’m studying at OshSU in 
    the Faculty of IR, building foundational knowledge since 2024. I completed the Front End 2.0 program 
    at Motion-Web LLC Academy in 2022, and pursued specialized online courses in Node.js backend development 
    and the MERN stack from 2022 to 2023, enhancing my expertise across full-stack technologies.`,
     items: [
      {
        institution: "OshSU",
        degree: "Faculty of IR",
        duration: "2024 present",
      },
      {
        institution: "Motion-Web LLC Academy",
        degree: "Front End 2.0",
        duration: "2021-2022",
      },
      {
        institution: "Online Course",
        degree: "Node js Backend",
        duration: "2022 - 2023",
      },
      {
        institution: "Online Course",
        degree: "Mern Stack Course",
        duration: "2022 - 2023",
      }
     ]
  }