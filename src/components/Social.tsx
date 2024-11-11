import React from 'react';
import Link from 'next/link';
import { SocialProps } from '@/types/socialTypes';
import { socials } from '@/utils/data/socialData';

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