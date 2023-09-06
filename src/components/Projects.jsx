import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Who Wants To be A Millionaire",
    url: "https://whowantstobeamillionaireabass.netlify.app",
    image: "projects/wwtbam.png",
    description: "I designed and built a fully functional Who Wants to Be a Millionaire game clone using React, featuring authentic sound effects to enhance the user experience.",
  },
  {
    title: "PastQuest",
    url: "https://pastquestabass.netlify.app",
    image: "projects/pastquest.png",
    description: "I built a quiz app with randomized questions on each restart, providing a dynamic experience. After finishing the quiz, users receive a detailed score breakdown and corrections to review their performance and learn from their mistakes.",
  },
  {
    title: "A budget App",
    url: "https://budgetappabass.netlify.app",
    image: "projects/budget.png",
    description: "I developed a budget management application with an integrated pie chart, enabling users to calculate their budget and expenses easily. The intuitive visualization allows for a quick assessment of whether they are within or exceeding their budget.",
  },
  {
    title: "Portfolio",
    url: "https://lanreabassportfolio.netlify.app",
    image: "projects/preport.png",
    description: "I crafted a dynamic portfolio website using React, enhanced with captivating animations for an engaging user experience.",
  },
  {
    title: "My Portfolio",
    url: "https://www.youtube.com/watch?v=zwNF1-lsia8",
    image: "projects/portfolio.png",
    description: "I designed my current portfolio website inspired by Wuwa Sensei, incorporating Three.js for 3D elements, animations, and Framer Motion to create an immersive and visually captivating experience.",
  },
  {
    title: "Hangman Game",
    url: "https://hangmanabass.netlify.app",
    image: "projects/hangman.png",
    description: "A Hangman game using React and TypeScript, combining dynamic React features with TypeScript's code robustness. ",
  },
  {
    title: "To-Do List",
    url: "https://todoabass.netlify.app",
    image: "projects/todo.png",
    description: "I created a user-friendly To-Do List app using React, enabling easy task management. It offers task creation, completion, and removal, enhancing productivity and organization.",
  },
  {
    title: "Higher Or Lower Game",
    url: "https://higherorlowerabass.netlify.app",
    image: "projects/guess.png",
    description: "I developed a number guessing game where users have 5 attempts to guess a randomly generated number between 1 and 100. Success occurs if they guess correctly within the allotted tries, while failure results from an incorrect guess.",
  },
  
  {
    title: "Text to Speech Converter",
    url: "https://text2speechabass.netlify.app",
    image: "projects/texttospeech.png",
    description: "I designed a text-to-speech converter using the React-Speech API, allowing users to input text, choose from available voices, and convert it into speech output.",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.9 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-1}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        {/* <planeGeometry args={[4.2, ]} /> */}
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[4.5,2.7, 1.5]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
      color="black"
        maxWidth={2.1}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.15}
        position={[-1, -1.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
      
        maxWidth={2.5}
        anchorX="left"
        anchorY="top"
        fontSize={0.125}
        position={[-1, -1.75, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
  
    <group position-y={-viewport.height * 2 + 1}> 
    
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 5, 1, -3]}
          animate={{
            x: 0 + (index - currentProject) * 5,
            y: currentProject === index ? 1 : 2,
            z: currentProject === index ? -1.5 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
         <Project project={project} highlighted={index === currentProject} />
       
        </motion.group>

      ))} 
    </group>
   
  );
};
