import React from 'react';
import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

type socialsType = {
    icon: React.JSX.Element;
    path: string;
}

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const socials: socialsType[] = [
    { icon: <FaGithub/>, path: "https://github.com/bekturb"},
    { icon: <FaLinkedin/>, path: "https://linkedin.com/in/bektursun-baimamatov-764315278"},
    { icon: <FaTelegram/>, path: "https://t.me/beka_baitur"},
    { icon: <FaInstagram/>, path: "https://www.instagram.com/bektursun_baimamatov"},
]

const Social = ({containerStyles, iconStyles}: SocialProps) => {

  return (
    <div className={containerStyles}>
        {
            socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default Social