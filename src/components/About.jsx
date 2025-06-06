import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <div className="flex items-center gap-4">
          <FaUser className="text-[40px] text-white" />
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a motivated Computer Science engineering student with a strong passion for software development,
         competitive programming, data science, and cybersecurity. Throughout the year, 
         I participated in numerous competitive programming contests, 
         consistently sharpening my algorithmic thinking and coding efficiency. 
         I also competed in several Capture The Flag challenges, earning 1st, 4th, and 6th places in different events. 
         In addition, I took part in a national Data Science competition where I secured 4th place.
          I'm always eager to learn, collaborate, and take on new challenges in the tech world
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
