import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const SocialMediaLinks = [
  { icon: <BsFacebook />, link: "https://www.facebook.com/chibuike.ilonze.1" },
  { icon: <BsInstagram />, link: "https://www.instagram.com/cmi_james/" },
  { icon: <BsTwitter />, link: "https://twitter.com/BikeManJames" },
  { icon: <BsYoutube />, link: "https://www.youtube.com/channel/UC2QSounnzDEUIPflJMfyQWA" },
];

const FooterImages = () => {
  return (
    <div className="flex gap-7">
      {SocialMediaLinks.map((item, index) => (
        <div key={index} className="w-7 h-7">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FooterImages;
