"use client";

import {toast} from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";
import { info } from "@/utils/data/contactInfoData";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [text, setText] = useState<string>("");

  const telegramBotToken: string | undefined = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const telegramChatId: string | undefined = process.env.NEXT_PUBLIC_CHAT_ID;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  console.log(telegramBotToken, "telegramBotToken")

  try {
    await axios.post(url, {
      chat_id: telegramChatId,
      text: `Firstname: ${firstname},
      Lastname: ${lastname}, 
      Email: ${email}, 
      Phone: ${phone}, 
      Service: ${service}, 
      ${text},
      `,
    });
    toast.success('Message sent successfully!');
  } catch (error) {
    toast.error('Failed to send message.');
  }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Feel free to reach out! Send a message through the form or
                contact me directly on Telegram for quick communication.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input onChange={(e) => setFirstname(e.target.value)} type="firstname" placeholder="Firstname" />
                <Input onChange={(e) => setLastname(e.target.value)} type="lastname" placeholder="Lastname" />
                <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <Input onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Phone" />
              </div>
              <Select onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Backend Development</SelectItem>
                    <SelectItem value="mst">Frontend Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                onChange={(e) => setText(e.target.value)}
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
