import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mb-20`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohamed Aziz Ouerfelli</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computer Science Student Engineer <br className='sm:block hidden' />
          </p>
          <div className="mt-4 relative z-20">
            <SocialLinks />
          </div>
        </div>

        {/* Profile Photo */}
        <motion.div 
          className="flex flex-col items-center mt-8 md:mt-0"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#915EFF] relative">
            <img
              src="./photo.jpg"
              alt="Mohamed Aziz Ouerfelli"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      <div className="hidden sm:block absolute inset-0">
        <ComputersCanvas />
      </div>

      <div className='hidden sm:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
