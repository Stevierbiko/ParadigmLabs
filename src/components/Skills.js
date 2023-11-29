import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl  mt-64 w-full text-center">
        Our Capabilities
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Design
        </motion.div>
        <Skill name="Websites & Digital Platforms" x="-20vw" y="2vw" />
        <Skill name="Branding & Identity" x="-5vw" y="-10vw" />
        <Skill name="Web3 Experience Design" x="0vw" y="12vw" />
        <Skill name="eCommerce Experiences" x="-20vw" y="-15vw" />
        <Skill name="Go-To-Market Strategy" x="-5vw" y="-10vw" />
        <Skill name="Rapid Prototyping" x="15vw" y="-12vw" />
        <Skill name="User Journey Mapping" x="32vw" y="-5vw" />
        <Skill name="Design Systems" x="0vw" y="-20vw" />
        <Skill name="Industry & Consumer Research" x="-25vw" y="18vw" />
        <Skill name="Trends & Insights" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
