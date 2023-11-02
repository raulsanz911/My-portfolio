import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/pro-solid-svg-icons";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const Work = () => {
  const [animateCard] = useState({ y: 0, opacity: 1 });

  const works = [
    // {
    //   imgUrl: images.plancv,
    //   name: 'Plancv Online Resume Builder Platform',
    //   projectLink: 'https://plancv.com/',
    //   title: 'Plancv | Online Resume Builder Platform',
    //   description:
    //     'Plancv is an online resume-builder platform, that help job seekers to build professional modern resumes/cv without any experiences.',
    //   tags: 'Production',
    //   tech: [
    //     images.react,
    //     images.node,
    //     images.graphql,
    //     images.sass,
    //     images.puppeteer,
    //   ],
    // },
    // {
    //   imgUrl: images.plansrow,
    //   name: "Plansrow",
    //   projectLink: "https://app.plansrow.com/",
    //   title: "Plansrow | Project Management Platform",
    //   description:
    //     "Plansrow is a document-oriented project management platform, that works as a wrapper around dropbox docs, this platform target AEC industry with these major features: Document Management, Kanban board, Map, Form builder and survey, time tracker, and project management tools.",
    //   tags: "Production",
    //   tech: [
    //     images.react,
    //     images.node,
    //     images.sass,
    //     images.dropbox,
    //     images.googlemap,
    //   ],
    // },
    {
      imgUrl: images.school,
      name: "School Facility Pro",
      projectLink: "https://schoolfacilitypro.com/",
      title: "School Districts Master Planning",
      description:
        "School facility pro is a master planning web app for managing, locating, and reporting system of school districts, we proudly complete this project and now over 180+ school districts in California use this platform for managing the data of their schools.",
      tags: "Production",
      tech: [images.react, images.node, images.sass, images.googlemap],
    },
    {
      imgUrl: images.porto,
      name: "My Personal Portfolio",
      projectLink: "",
      title: "Personal Portfolio",
      description:
        "This is a fully responsive modern look portfolio that showcase and exampalify a developer works, skills and experiences, I tried to use latest JS technologies to accomplish this amazing project.",
      tags: "Personal",
      tech: [
        images.react,
        images.next,
        images.graphql,
        images.node,
        images.sass,
        images.sanity,
      ],
    },
    {
      imgUrl: images.blog,
      name: "Modern Blog",
      projectLink: "https://www.loveyoucoding.com/",
      title: "Modern Blog",
      description:
        "This is modern blog including the core features of common blog, in this blog I tried my best to leverage hygraph CMS and work to combine NextJS with GraphQL to bring some amazing fast and optimized experience for project.",
      tags: "Production",
      tech: [
        images.react,
        images.next,
        images.graphql,
        images.node,
        images.sass,
        images.graphcms,
      ],
    },
    {
      imgUrl: images.spotify,
      name: "Spotify clone",
      projectLink: "https://spotify.loveyoucoding.com/",
      title: "Spotify Clone",
      description:
        "building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more",
      tags: "Personal",
      tech: [
        images.react,
        images.next,
        images.node,
        images.sass,
        images.rapidapi,
      ],
    },
    {
      imgUrl: images.fitness,
      name: "Fitness App",
      projectLink: "https://fitness.loveyoucoding.com/",
      codeLink: "https://github.com/aminullahdeveloper/spotify_clone",
      title: "Fitness App",
      description:
        "I just build this project for fun to advance my skills to work and practice with third party APIs.",
      tags: "Personal",
      tech: [
        images.react,
        images.next,
        images.node,
        images.sass,
        images.rapidapi,
      ],
    },
    {
      imgUrl: images.youtube,
      name: "Youtube Clone",
      projectLink: "https://youtube.loveyoucoding.com/",
      title: "Youtube Clone",
      description:
        "I just build this project for fun to advance my skills to work and practice with third party APIs.",
      tags: "Personal",
      tech: [
        images.react,
        images.next,
        images.node,
        images.sass,
        images.rapidapi,
      ],
    },
  ];
  return (
    <>
      <h2 className="head-text">
        Delightful <span>apps</span> crafted with{" "}
        <span>
          {" "}
          <FontAwesomeIcon
            icon={faHeart}
            color="#E41B17"
            style={{ fontSize: "40px" }}
          />
        </span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work?.imgUrl} alt={work?.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work?.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work?.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work?.description}
              </p>
              <div className="app__work-tag app__flex" key={index}>
                <p className="p-text">{work.tags}</p>
              </div>
              <div className="work-icon-badges">
                {work.tech.map((t, index) => {
                  return (
                    <div className="work-icon-badge" key={index}>
                      <img
                        src={t}
                        alt=""
                        width="25px"
                        height="25px"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
