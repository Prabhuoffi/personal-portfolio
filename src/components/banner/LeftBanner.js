import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';
import PrabhuResume from '../../assets/Resume/PrabhuResume.pdf';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer...'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  const downloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = PrabhuResume; // Use the imported PDF file
    downloadLink.download = 'Prabhu_CV.pdf';
    downloadLink.click();
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-purple-600 capitalize">Prabhu</span>
        </h1>
        <h2 className="text-4xl font-bold text-yellow-400">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="text-yellow-400"
          />
        </h2>
        <p className="text-base font-bodyFont text-left leading-6 tracking-wide">
          As a Full-stack developer, I am passionate about crafting robust and user-friendly digital solutions. 
          With expertise in both front-end and back-end technologies, 
          I enjoy building dynamic web applications that meet client needs and enhance user experiences.
        </p>
        <button 
          onClick={downloadResume} 
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download CV
        </button>
      </div>
      <Media />
    </div>
  );
}

export default LeftBanner;
