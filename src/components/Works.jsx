import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
<div className="w-full flex flex-col gap-6">
  <motion.div
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-6 max-w-3xl leading-[32px] flex flex-col gap-5 text-secondary text-[16px]"
  >
    <p>
      The projects below represent a curated selection of my professional experience and technical capabilities. Each project highlights my ability to architect and deliver scalable solutions, work with modern technologies, and manage end-to-end development with precision and creativity.
    </p>

    <p>
      While many of my most impactful contributions are housed within private company repositories and cannot be shared publicly due to confidentiality agreements, they’ve been instrumental in sharpening my skills and delivering meaningful results.
    </p>

    <p>
      One of my publicly accessible and active projects is my own portfolio website,{" "}
      <a
        href="https://asiaunfolded.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-500 transition"
      >
        AsiaUnfolded.com
      </a>
      . This full-stack travel blog platform is hosted securely with HTTPS and built with performance, accessibility, and SEO best practices in mind. It features in-depth articles on Asia’s most beautiful and culturally significant destinations, reflecting my ability to deliver user-friendly, content-rich web applications from the ground up.
    </p>
  </motion.div>
</div>




      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
