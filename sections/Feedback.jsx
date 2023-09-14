'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] bborder-[#6a6a6a] relative"
        >
          <div className="feedback-gradient"/>
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[-36px] text-white">Neville</h4>
            <p className="mt-[8px] text-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder | Metaversus</p>
            <p className="mt-[8px] text-normal sm:text-[22px] text-[16px] sm:leading-[45px] leading-[39px] text-white">
            “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
            </p>
          </div>
        </motion.div>

        <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
        >
          <img src="/planet-09.png" alt="planet-09"
          className="w-full lg:h-[610px] h-autp min-h-[210px] object-cover rounded-[40px]" />
          <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <a href="#explore">
            <img src="/stamp.png" alt="stamp" 
            className="w-[155px] h-[155px] object-contain"/>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
  </section>
);

export default Feedback;
