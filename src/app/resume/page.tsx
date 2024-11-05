"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,

} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

type aboutInfoType = {
  fieldName: string,
  fieldValue: string
}

type aboutType = {
  title: string,
  description: string,
  info: aboutInfoType[]
}

const about: aboutType = {
  title: "About me",
  description: 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia minus ducimus voluptatem.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bek Baimamatov"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+996) 220 64 34 66"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years"
    },
    {
      fieldName: "Skype",
      fieldValue: "Bek.99"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kyrgyzstan"
    },
    {
      fieldName: "Email",
      fieldValue: "bektursun0599@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Kyrgyz"
    },
  ]
}

type experienceItemsType = {
  company: string,
  position: string,
  duration: string,
}

type experianceType = {
  icon: string,
  title: string,
  description: string,
  items: experienceItemsType[]
}

const experience: experianceType = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: 
  `Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Corporis mollitia minus ducimus voluptatem.`,
   items: [
    {
      company: "Zeon IT Hub",
      position: "Front End Developer",
      duration: "Summer 2022",
    },
    {
      company: "Motion-Web LLC Academy",
      position: "Front End Developer",
      duration: "Autumn 2023",
    },
    {
      company: "E-commerce-Startup",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
   ]
}

type educationsItemsType = {
  institution: string,
  degree: string,
  duration: string,
}

type educationsType = {
  icon: string,
  title: string,
  description: string,
  items: educationsItemsType[]
}

const educations: educationsType = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: 
  `Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Corporis mollitia minus ducimus voluptatem.`,
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

type skillListType = {
  icon: React.ReactNode,
  name: string,
}

type skillsTypeType = {
  title: string,
  description: string,
  skillList: skillListType[]
}

const skills: skillsTypeType = {
  title: "My skills",
  description: 
  `Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Corporis mollitia minus ducimus voluptatem.`,
   skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "js"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js"
    },
    {
      icon: <FaFigma/>,
      name: "figma"
    },
   ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn",}
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea
                  className="h-[400px]"
                >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                    <li 
                    key={index}
                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educations.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{educations.description}</p>
                <ScrollArea
                  className="h-[400px]"
                >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educations.items.map((item, index) => (
                    <li 
                    key={index}
                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-auto">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                  {
                    about.info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume