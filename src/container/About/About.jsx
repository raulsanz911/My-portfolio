import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  // const [abouts, setAbouts] = useState();
  const abouts = [
    {
      title: "Web Designer",
      imgUrl: images.about01,
      description:
        "Helping companies and individuals with creative solutions for more than 5 years with Web Graphic design, User Interface design, and User Experience design. ",
    },
    {
      title: "Front End Developer",
      imgUrl: images.about02,
      description:
        "Developing feature-rich and user-interactive apps for companies and individuals and helping them to experience a smarter tools to solve their business needs using cutting-edge frameworks (ReactJS, NextJS, Typescript)",
    },
    {
      title: "Back End Developer",
      imgUrl: images.about04,
      description:
        "Appling Business logic, Creating secured REST and GraphQL APIs by leveraging the Power of Single thread run time environment(NodeJS) and Apollo best practices for more than 5+ years.",
    },
    {
      title: "Startup Developer",
      imgUrl: images.about03,
      description:
        "Working with Startups, and turning his/her ideas into production-ready software products, by applying unique solutions and technical innovation to those products.",
    },
  ];

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        App development made <span>simpler</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
