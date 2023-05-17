import React from "react";
import Video from "../assets/surprise.mp4";

const Surprise = () => {
  return (
    <>
      <video width={700} height={500} controls autoplay>
        <source src={Video} type="video/mp4" />
      </video>
    </>
  );
};

export default Surprise;
