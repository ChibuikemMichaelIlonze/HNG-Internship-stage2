import React from "react";
import FooterImages from "./FooterImages";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center items-center gap-6 my-10 px-10 md:px-16 lg:px-28 text-center">
      <FooterImages />

      <div className="flex gap-2 md:gap-10 flex-col sm:flex-row">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>

      <div>
        <p className="opacity-70">
          &#169; <span>{currentYear}</span> MovieHunt by Ilonze Chibuikem
          Michael
        </p>
      </div>
    </div>
  );
};

export default Footer;
