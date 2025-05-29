import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { FaCode } from "react-icons/fa";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section id="tech" className="relative w-full min-h-screen mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>My skills</p>
          <div className="flex items-center justify-center gap-4">
            <FaCode className="text-[40px] text-white" />
            <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
          </div>
        </motion.div>

        {isMobile ? (
          <div className='mt-20 grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {technologies.map((technology) => (
              <motion.div
                key={technology.name}
                className='bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className='w-16 h-16 object-contain'
                />
                <p className='text-black text-[14px] text-center font-medium'>{technology.name}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
