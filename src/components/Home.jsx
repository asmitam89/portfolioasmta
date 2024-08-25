import React, { useEffect, useRef } from "react";
import pdf from "../pdf/asmitacv.pdf";
import hero from "./data/profile.jpg";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Asmita",
        "I'm full stack Web developer",
        " Frontend Web Developer (React JS)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h3 ref={typedRef}></h3>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline text-light">
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
