import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({ number, word, title, text }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {number} &nbsp; {word}
        </h3>
        <span className=" font-medium text-dark/75 capitalize text-primary">
          {title}
        </span>
        <p className="font-medium w-full">{text}</p>
      </motion.div>
    </li>
  );
};
const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Our process
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            number="1"
            word="BASELINING"
            title="Your initial vision and planning the next steps"
            text=" In this stage we outline the initial vision for your project. We get clear on what success looks like, who's on the project team and bottom out the highest priority risks, assumptions, issues and dependencies that we need to be aware of."
          />
          <Details
            number="2"
            word="RESEARCH"
            title="Understanding the problem your product or venture looks to solve, its impact and ways we might solve it"
            text="The research stage is where we start to build a picture of your target customer, the industry and competitive landscape. This helps us develop the strategic plan for your route to market."
          />
          <Details
            number="3"
            word="DESIGN"
            title="Designing the service, product and testing the solution with real stakeholders"
            text="We’re now starting to produce the solution, testing ideas with target users and using the feedback gained to iterate and improve the product. We'll also define your brand if it's a new venture."
          />
          <Details
            number="4"
            word="DELIVERY"
            title="Bringing your vision to life"
            text="We'll build your new product or venture as efficiently as possible using rapid prototyping techniques and tools. Upon launching, the real fun begins. Your solution is now with real users and we’re getting continuous feedback from them and our analytics. This lets us keep improving the proposition, establish product market fit and position for scaling."
          />
          <Details
            number="3"
            word="SCALE"
            title="Finding creative strategies to acquire and retain customers"
            text="Switching the focus to setting growth priorities, identifying channels for customer acquisition, measuring success, and scaling growth."
          />
        </ul>
      </div>
    </div>
  );
};

export default Process;
