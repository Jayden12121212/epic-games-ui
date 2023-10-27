import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const ParallaxHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Calculate the scale based on scroll position
  const scale =
    1 - scrollY / (typeof window !== "undefined" ? window.innerHeight : 1);

  const videoParallaxStyle = {
    backgroundPositionY: `${-scrollY / 2}px`, // Apply the parallax effect to the video
  };

  const style = {
    transform: `scale(${scale < 0 ? 0 : scale})`, // Apply the scale transform
  };

  const textFadeStyle = {
    opacity: 1 - scrollY / 300, // Adjust 300 as needed for the text fade
    transition: "opacity 0.3s", // Add a smooth transition effect
  };

  return (
    <div className={styles.parallaxHero}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
        style={{ ...style, ...videoParallaxStyle }} // Apply both scale and parallax styles
      >
        <source
          src="https://cdn2.unrealengine.com/homepage-opener-5a55a50aaa4c.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div style={textFadeStyle} className={styles.content}>
        <div className={styles.text_container}>
          <h1 className={styles.title} style={textFadeStyle}>
            Built by developers. <br /> For developers. <br /> With fair terms for all. <br /> Let's
            build incredible <br /> things together.
          </h1>
          <button className={styles.cta} style={textFadeStyle}>
            <span>Learn More About UE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
