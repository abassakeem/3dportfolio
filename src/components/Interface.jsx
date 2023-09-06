import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useAtom } from "jotai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { currentProjectAtom, projects } from "./Projects";
import emailjs from "@emailjs/browser";
import javascript from "./../assets/tech/javascript.png";
import typescript from "./../assets/tech/typescript.png";
import html from "./../assets/tech/html.png";
import css from "./../assets/tech/css.png";
import reactjs from "./../assets/tech/reactjs.png";
import rb from "./../assets/tech/rb.svg";
import downloadBtn from "./../assets/download.png";

import git from "./../assets/tech/git.png";
import illustrator from "./../assets/tech/ai.jpg";
import figma from "./../assets/tech/figma.png";
import three from "./../assets/tech/threejs.svg";

import {
  faPhp,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faCodepen,
 
  faSquareGithub,
  faGithub,
  faBootstrap,
  faFigma,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLinkedinIn,
  faInstagram,
 
  

} from '@fortawesome/free-brands-svg-icons'


const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-bold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="hero-name px-1  italic">Lanre-Abass Akeem</span>
      </h1>
      <motion.p
        className="text-lg text-black-400 mt-4 hero-text"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
       I develop sexy webpages using react
        <br />
        .....I play with three js too ;)
      </motion.p>
      <motion.div className="social-icon mt-4 text-lg"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      >
                <a href="https://github.com/abassakeem" target="_blank"> <FontAwesomeIcon icon={faGithub} color="#000" /></a>
                <a href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} color="#000" /></a>
                <a href="https://www.instagram.com/abassakeem_/" target="_blank"> <FontAwesomeIcon icon={faInstagram} color="#000" /></a>
               
            </motion.div>
            <div className="hero-buttons flex  flex-wrap flex-row gap-3">
                    <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 contact-me-btn text-white py-3 px-6 
      rounded-lg font-bold text-lg mt-2 md:mt-12`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
      <motion.button
       
        className={`bg-white-600 text-black py-3 px-6  resume-download-btn 
      rounded-lg font-bold text-lg mt-2 md:mt-12 `}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        <a href="https://drive.google.com/drive/u/0/folders/1B8TVbnRmBd5oOcViu580ce4ZSN3wOKPp" target="_blank" className="resume">
          <img src={downloadBtn} alt="download image"/>  Resume
         
          </a>
      </motion.button>
      </div>

    </Section>
  );
};



const technologies = [
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "React Bootstrap",
    icon: rb,
  },
  
  
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Adobe illustrator",
    icon: illustrator,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];


const SkillsSection = () => {
  return (
    <Section >
      <div className="about-section">
        

      <motion.div className="w-full mb-10" whileInView={"visible"}>

       
       

         <div className="about-conainer flex flex-col md:flex-row justify-center items-center">
          <div className="left"> <h2 className="text-3xl md:text-5xl font-bold text-white">About</h2>
        <motion.p
        
        className='mt-2 md:w-3/4 p-2 text-white text-[14px] max-w-3xl leading-[30px] flex  '
        
      >
    I'm a JavaScript developer with a specialization in React and a keen interest in Node.js and Three.js. I thrive on close client collaboration to build efficient, scalable, and user-centric solutions. I'm eager to team up with you to turn your concepts into reality!
      </motion.p>
      <div className="hmm">
      <div id="technologies" className="flex flex-wrap justify-start items-center mt-5">
     
      <div className="sm:w-1/2 text-center flex flex-wrap justify-center items-center">
        <div className="text-center">
          <h6>Front-End & Back-End</h6>
          <FontAwesomeIcon className="text-center" icon={faReact} color="#fff" /> {"  "} {" "}
          <FontAwesomeIcon className="text-center" icon={faNodeJs} color="#fff" />
        </div>
        <small className='text-white'>Experience with React.js alongside HTML, CSS, Bootstrap, Javascript for frontend and Experience with Node Js, PHP and Database Optimization for backend</small>
      </div>
      <div className="sm:w-1/2 text-center flex flex-wrap justify-center items-start">
        <div className="">
          <h6>Version-Control</h6>
          <FontAwesomeIcon className="text-center text-light" icon={faGithub} color="#fff" />
        </div>
        <small className='text-white'>Experience with Git/Github  for continuous integration and deployment</small>
      </div>
    </div>
      </div>
      
      </div>
      {/* <div className="tech flex flex-row flex-wap text-center justify-start items-center gap-5">

         {technologies.map((technology) => (
        <div className=' text-center flex flex-col flex-wrap  justify-center items-center' key={technology.name}>
          <img src={technology.icon} className="tech-img"/>
          <span className="tech-text">{technology.name}</span>
        </div>
      ))}
      </div> */}
      
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <div className="stage-cube-cont ">
      <div className="cubespinner ">
                            <div className="face face1  ">
                            <FontAwesomeIcon icon={faReact} color="#61dafb" />
                            </div>
                            <div className="face face2 main-face-2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                            </div>
                            <div className="face face3">
                            <FontAwesomeIcon icon={faCss3} color="#2965f1" />
                            </div>
                            <div className="face face4">
                            <FontAwesomeIcon icon={faBootstrap} color="#F8F9FA" />
                            </div>
                            <div className="face face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" />
                            </div>
                            <div className="face face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#171515 " />
                            </div>
                        </div>
      </div>
        </div>
        </div>
        
      
      </motion.div>
      </div>  
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex my-projects-title   w-full h-full mt-10 gap-8 items-center justify-center items-center">
        <button
          className="hover:bg-black-600 transition-colors previous-button"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl text-center font-bold"> My Projects</h2>
        <button
          className="hover:bg-black-600 transition-colors next-button"
          onClick={nextProject}
        >
          
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
//JW-1ppZFU-7jBi_jD
//template_ku837ts

//service_xuliy9e
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       "service_xuliy9e",
       "template_ku837ts",
        {
          from_name: form.name,
          to_name: "Lanre-abass Akeem",
          from_email: form.email,
          to_email: "lanreabassab1@gmail.com.",
          message: form.message,
        },
        "JW-1ppZFU-7jBi_jD"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Section>
    <div
      className={`xl:mt-12 flex xl:flex-row justify-start gap-10 overflow-hidden`}
    >
      <div
       
        className='falex-[0.75]   p-8 rounded-2xl'
      >
       
        <h3 className="text-3xl md:text-5xl font-bold text-white" >Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-dark font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=' py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your email</span>
            <input
            required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className='bg-white-100 py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=' py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-small'
            />
          </label>

          <button
            type='submit'
            className='submit-button bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      
    </div>
    </Section>
  );
};
