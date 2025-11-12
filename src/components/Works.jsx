import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [showFull, setShowFull] = useState(false);

   const shortDesc = description.length > 120 ? description.slice(0, 120) + "..." : description;
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
           <p className="mt-2 text-secondary text-[14px]">
            {showFull ? description : shortDesc}
            {description.length > 120 && (
              <span
                onClick={() => setShowFull(!showFull)}
                className="text-blue-400 underline cursor-pointer ml-1"
              >
                {showFull ? "Show Less" : "Show More"}
              </span>
            )}
          </p>
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
            The projects below represent a curated selection of my professional
            experience and technical capabilities. Each project highlights my
            ability to architect and deliver scalable solutions, work with
            modern technologies, and manage end-to-end development with
            precision and creativity.
          </p>

          <p>
            While many of my most impactful contributions are housed within
            private company repositories and cannot be shared publicly due to
            confidentiality agreements, they’ve been instrumental in sharpening
            my skills and delivering meaningful results.
          </p>

          <p>
            Some of my publicly accessible and active projects include:
            <ul className="list-disc ml-5 mt-2">
              <li>
                <a
                  href="https://inventory-saas.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-500 transition"
                >
                  Inventory-SaaS.netlify.app
                </a>{" "}
                — a comprehensive, full-stack{" "}
                <strong>inventory management system</strong> featuring a fully
                role-based dashboard I designed and developed. The platform
                includes advanced permissions management, allowing fine-grained
                control over admin, manager, and staff roles. Key
                functionalities include bulk product uploads, real-time
                inventory tracking, sales points management, purchase reporting,
                and complete analytics for each transaction. I implemented both
                frontend and backend, integrating complex workflows for
                inventory updates, user access control, and reporting. This SaaS
                solution ensures that all operations—from inventory addition to
                sales reporting—are secure, efficient, and fully manageable
                through the dashboard.
              </li>

              <li>
                My portfolio website:{" "}
                <a
                  href="https://asiaunfolded.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-500 transition"
                >
                  AsiaUnfolded.com
                </a>{" "}
                — a full-stack travel blog platform built with performance,
                accessibility, and SEO best practices in mind.
              </li>
              <li>
                <a
                  href="https://thecovenest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-500 transition"
                >
                  TheCovenest.com
                </a>{" "}
                — a fully live real estate website built with{" "}
                <strong>Node.js</strong> and <strong>Vue.js</strong>. The
                platform is fully responsive across all devices and features a
                comprehensive, custom-built dashboard that allows administrators
                to manage listings, user accounts, bookings, and content
                seamlessly. I handled both frontend and backend development,
                integrating APIs for property listings, search functionality,
                and dynamic content updates, ensuring a smooth and scalable user
                experience.
              </li>
              <li>
                <a
                  href="https://qdreamworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-500 transition"
                >
                  QDreamWorld.com
                </a>{" "}
                — a full-stack investment project developed for a Dubai-based
                client. Built with <strong>Node.js</strong> and{" "}
                <strong>Vue.js</strong>, the platform is fully responsive and
                features a robust admin dashboard for managing investment
                portfolios, client accounts, and dynamic content. I handled
                end-to-end development, including API integrations, performance
                optimization, and ensuring a seamless user experience for both
                clients and administrators.
              </li>

              <li>
                <a
                  href="https://thehcpl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-500 transition"
                >
                  TheHCPL.com
                </a>{" "}
                — a live corporate website developed with full-stack
                technologies, focusing on performance and user experience.
              </li>
              <li>
                <span className="italic">
                  EvernestMarketing.com — currently under development, a
                  full-stack project showcasing scalable SaaS and web solutions.
                </span>
              </li>
            </ul>
          </p>

          <p className="mt-4 italic">
            In addition to the projects listed above, I have worked on several
            other initiatives that are either under development or part of
            private company work which cannot be publicly shared due to
            confidentiality agreements. These projects have been instrumental in
            refining my full-stack development skills, handling complex
            workflows, and delivering production-ready solutions in real-world
            scenarios.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
