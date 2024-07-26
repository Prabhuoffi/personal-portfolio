import React from "react";
import Title from "../layouts/Title";
import projectOne from "../../assets/images/projects/Projectone.jpg";
import projectTwo from "../../assets/images/projects/Projecttwo.jpg";
import projectThree from "../../assets/images/projects/Projectthree.jpg";
import projectFour from "../../assets/images/projects/Projectfour.jpg";
import projectFive from "../../assets/images/projects/Projectfive.jpg";
import projectSix from "../../assets/images/projects/Projectsix.jpg";
import projectSeven from "../../assets/images/projects/Projectseven.jpg";
import projectEight from "../../assets/images/projects/Projecteight.jpg";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-purple-600"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title
          title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:gap-14 md:grid-cols-2 lg:grid-cols-3">
        <ProjectsCard
          title="ClothShoe E-commerce Application"
          des="ClothShoe E-commerce Application is a full-featured online marketplace designed to provide a seamless shopping experience for customers looking to purchase clothing and footwear. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application leverages modern web technologies to deliver a responsive, scalable, and high-performance platform."
          src={projectOne}
          githubLink="https://github.com/Prabhuoffi/Clothshoe_E-commerce"
          
        />
        <ProjectsCard
          title="Music Marina"
          des="Music Marina is a comprehensive music streaming application designed to provide users with an immersive and interactive music listening experience. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application leverages modern web technologies to deliver a high-performance, scalable, and responsive platform."
          src={projectTwo}
          githubLink="https://github.com/Prabhuoffi/Music_Marina"
         
        />
        <ProjectsCard
          title="Ayurveda Clinic"
          des="The Ayurveda Clinic Frontend Application is designed to provide users with an intuitive and user-friendly interface to access various services and information related to Ayurvedic treatments and consultations. Built using modern web technologies, this application ensures a seamless and engaging user experience."
          src={projectThree}
          githubLink="https://github.com/Prabhuoffi/Ayurveda"
         
        />
        <ProjectsCard
          title="Hospital Record Management System"
          des="The Hospital Record Management System (HRMS) is designed to streamline and enhance the management of patient records, appointments, and administrative tasks in a hospital setting. This system leverages modern web technologies to provide a secure, scalable, and efficient platform for healthcare providers."
          src={projectFour}
          githubLink="https://github.com/Prabhuoffi/Hospital_Patient_RecordSystem"
         
        />
        <ProjectsCard
          title="Expenses Tracker"
          des="The Expenses Tracker Application is designed to help users manage their personal finances by tracking income, expenses, and budgeting effectively. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application offers a robust, responsive, and user-friendly platform for financial management."
          src={projectFive}
          githubLink="https://github.com/Prabhuoffi/INCOME-EXPENSES-Mern-stack"
         
        />
        <ProjectsCard
          title="Weather Application"
          des="The Weather Application is designed to provide users with real-time weather information, forecasts, and alerts. Built using modern web technologies, this application ensures a seamless and engaging user experience with accurate and up-to-date weather data fetched from reliable APIs."
          src={projectSix}
          githubLink="https://github.com/Prabhuoffi/Wether-app"
        
        />
        <ProjectsCard
          title="Library Furniture"
          des="The Library Furniture Application is designed to provide users with a comprehensive and engaging platform to browse and select furniture specifically tailored for libraries. Built using React and TailwindCSS, this application ensures a seamless, modern, and responsive user experience."
          src={projectSeven}
          githubLink="https://github.com/Prabhuoffi/library_furniturs"
         
        />
        <ProjectsCard
          title="Lexitools Application"
          des="The Lexitools Application is designed to provide users with a suite of legal and business tools for document management, legal research, and business operations. The application includes a frontend built with React and TailwindCSS and a backend API to handle data processing and interactions."
          src={projectEight}
          githubLink="https://github.com/Prabhuoffi/Lexitools"
     
        />
      </div>
    </section>
  );
};

export default Projects;
