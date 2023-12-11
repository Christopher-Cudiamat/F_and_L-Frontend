"use client";

import React from "react";
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton } from "react-share";
import { FaFacebookSquare, FaShareAlt } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const ShareButtons = () => {
  return (
    <div className='flex items-center gap-x-6 mt-8 text-blue-800'>
      <FaShareAlt
        size={24}
        className='text-slate-600'
      />
      <FacebookShareButton url={"https://www.facebook.com/"}>
        <FaFacebookSquare
          size={30}
          className='hover:text-blue-700'
        />
      </FacebookShareButton>
      <InstapaperShareButton url={"https://www.facebook.com/"}>
        <RiInstagramFill
          size={30}
          className='hover:text-blue-700'
        />
      </InstapaperShareButton>
      <TwitterShareButton url={"https://www.facebook.com/"}>
        <FaSquareTwitter
          size={30}
          className='hover:text-blue-700'
        />
      </TwitterShareButton>
    </div>
  );
};

export default ShareButtons;
