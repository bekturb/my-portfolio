import { contactInfoType } from "@/types/contactInfoTypes";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const info: contactInfoType[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+(996) 220 64 34 66",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bektursun0599@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bishkek, Zh.Abdrahmanov, 129",
  },
];
