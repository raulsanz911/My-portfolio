import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     console.log(data);
  //     setSkills(data);
  //   });
  // }, []);

  const skills = [
    { name: "ReactJS", bgColor: "#f8f8f8", pic: images.react },
    { name: "NodeJS", bgColor: "#f8f8f8", pic: images.node },
    { name: "GraphQL", bgColor: "#f8f8f8", pic: images.graphql },
    { name: "Angular", bgColor: "#f8f8f8", pic: images.angular },
    { name: "Next", bgColor: "#f8f8f8", pic: images.next },
    { name: "Redux", bgColor: "#f8f8f8", pic: images.redux },
    { name: "JavaScript", bgColor: "#f8f8f8", pic: images.javascript },
    { name: "TypeScript", bgColor: "#f8f8f8", pic: images.typescript },
    { name: "Sass", bgColor: "#f8f8f8", pic: images.sass },
  ];
  const experiences = [
    {
      year: "2020 - 2023",
      works: [
        {
          name: "Full Stack Web Developer",
          company: "Sanmina - Huntsville, AL (Remote Job)",
          desc: "",
        },
      ],
    },
    {
      year: "2016 - 2020",
      works: [
        {
          name: "Senior Frontend Developer",
          company: "IDEMIA – Virginia – VA (Remote Job)",
          desc: "",
        },
      ],
    },
    {
      year: "2014 - 2016",
      works: [
        {
          name: "Junior Frontend Developer",
          company: "HBS System – Dallas – TX (Remote Job)",
          desc: "",
        },
      ],
    },
    {
      year: "2015 - 2017",
      works: [
        {
          name: "Freelance",
          company: "Bedford (Project)",
          desc: "",
        },
      ],
    },
    {
      year: "2014 - 2015",
      works: [
        {
          name: "Freelance",
          company: "Red e App (Project)",
          desc: "",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.pic} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
