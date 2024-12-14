import {Spotlight} from './Ui/Spotlight'
import { TextGenerateEffect } from "./Ui/text-generate-effect"; 
import MagicButton from "./Ui/MagicButton";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Main background container */}
      <div className="fixed inset-0 w-full h-full">
        {/* Grid background */}
        <div className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
          {/* Radial gradient */}
          <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        {/* Spotlights */}
        <div className="absolute inset-0"> 
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="lightgreen"/>
          <Spotlight className="top-30 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-8">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100">
             
            </p>

            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi!  I&apos;m Taha Amine Eddine,a dedicated developer and cybersecurity enthusiast with a passion for crafting innovative digital solutions. My journey is driven by creativity and precision, focusing on building 
            applications and tools that combine functionality with intuitive design.
             Welcome to my portfolio  a showcase of my work, growth, and commitment to excellence."
            </p>

            <a href="#about">
              <MagicButton />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;