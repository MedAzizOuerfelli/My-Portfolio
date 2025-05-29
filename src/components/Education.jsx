import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../styles';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      title: "Computer Science Engineering",
      school: "National Higher Engineering School of Tunis (ENSIT)",
      period: "2024 - Present",
      description: "Specializing in Computer Science with focus on AI, machine learning, and software engineering. Active member of various technical clubs and organizations.",
      coursework: "Related Coursework: Data Structures, Algorithms, Object-Oriented Design, Distributed Systems, Operating Systems, Linear Programming, Nonlinear Optimization, Complexity Analysis",
      location: "Tunis, Tunisia",
      image: "/ensit.jpg"
    },
    {
      title: "Preparatory School - Math-Physics",
      school: "Higher Institute of Applied Sciences and Technologies of Mahdia (ISSAT Mahdia)",
      period: "2022 - 2024",
      description: "Focused on advanced studies in mathematics, physics, and engineering sciences.",
      achievement: "Ranked 454th out of 1700 in the national Math-Physics entrance exam.",
      location: "Mahdia, Tunisia",
      image: "/issat.jpg"
    }
  ];

  return (
    <section id="education" className="relative w-full min-h-[250vh] sm:min-h-screen mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto pb-32`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-[40px] text-white" />
            <h2 className={`${styles.sectionHeadText}`}>
              Academic Education
            </h2>
          </div>
          <p className={`${styles.sectionSubText} mt-2`}>
            My educational journey
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col sm:flex-row justify-between gap-10">
          {education.map((item, index) => (
            <Tilt
              key={index}
              options={{
                max: 15,
                scale: 1.05,
                speed: 1000,
                transition: true,
              }}
              className={`w-full sm:w-[45%] ${index === 1 ? 'mt-[600px] sm:mt-0' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="relative w-full">
                  <div className="absolute inset-0 flex justify-center m-2 sm:m-3">
                    <div className="w-full bg-black-gradient rounded-xl p-3 sm:p-4 border border-white/10">
                      <div className="w-[90%] mx-auto mb-3 sm:mb-4 rounded-lg overflow-hidden border border-white/20">
                        <img
                          src={item.image}
                          alt={item.school}
                          className="w-full h-[150px] sm:h-[200px] object-cover"
                        />
                      </div>
                      <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center mb-2">
                        {item.school}
                      </h3>
                      <p className="text-secondary text-[14px] sm:text-[16px] text-center mb-2">
                        {item.title}
                      </p>
                      <p className="text-secondary text-[12px] sm:text-[14px] text-center">
                        {item.period}
                      </p>
                      <p className="text-white-100 text-[14px] mt-4">
                        {item.description}
                      </p>
                      {item.coursework && (
                        <p className="text-white-100 text-[14px] mt-4">
                          {item.coursework}
                        </p>
                      )}
                      {item.achievement && (
                        <p className="text-white-100 text-[14px] mt-4">
                          {item.achievement}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 