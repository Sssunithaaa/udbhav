import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../style";
import { SectionWrapper } from '../hoc';
import { textVariantt } from "../utils/motion";
import { collage } from "../assets";
import { useNavigate } from "react-router-dom";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const line1 = "Udbhav";

const Hero = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 1700); // Adjust this timeout based on your motion.div animation duration
    return () => clearTimeout(timeout);
  }, []);
  const navigate = useNavigate()
  return (
    <section className="relative w-full h-[80vh] lg:h-[85vh] mx-auto z-[100001]">
      <div className={`${styles.paddingX} absolute inset-0 lg:top-[150px] top-[90px] max-w-7xl  flex lg:flex-row flex-col items-start gap-5 `}>
        <div className=" h-fit flex flex-col  items-center w-[100%]">
          <motion.div variants={textVariantt(0.8)}>
            <h1 className={`lg:text-[55px] text-[30px]  text-center text-white font-bold`}>
              Step into the pulse of creativity at 
            </h1>
            <p className={`text-[35px] mt-2 text-white`}></p>
          </motion.div>
          <motion.h3
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            delay="2.2"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  variants={letter}
                  className={`lg:text-[60px] text-[50px] orange-text-gradient text-left font-bold`}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>
          <div className="flex w-full justify-center font-semibold items-center my-3">
            
            <motion.div variants={textVariantt(2)}>
             <button onClick={()=>navigate("/events")} className="px-3 py-3 w-[200px] bg-[#f44829] text-black font-semibold text-[18px]  rounded-lg hover:opacity-90"> Explore events</button>
            </motion.div>
          </div>
        </div>
        {/* <div className="lg:w-[50%] mx-auto flex justify-center items-center top-[10px]">
          <img src={collage} alt="" srcset="" />
        </div> */}
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "");
