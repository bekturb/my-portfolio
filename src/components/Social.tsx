import React from 'react';
import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTelegram, FaFacebook } from "react-icons/fa";

type socialsType = {
    icon: React.JSX.Element;
    path: string;
}

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

const socials: socialsType[] = [
    { icon: <FaGithub/>, path: ""},
    { icon: <FaLinkedin/>, path: ""},
    { icon: <FaTelegram/>, path: ""},
    { icon: <FaFacebook/>, path: ""},
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