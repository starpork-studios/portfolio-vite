import { useContext, useEffect, useRef, useState } from "react";
import { NavModeContext } from "../../NavModeProvider";
import MotionWrapper from "../../components/Animated/MotionWrapper";
import { MotionFrom } from "../../components/Animated/types";
import OverlineParagraph from "../../components/Animated/OverlineParagraph";
import DiamondGrid from "./DiamondGrid";
import { useScreenQueries } from "../../hooks/useScreenQueries";
import { hoverEffect } from "./hover-effect";

const About = () => {
  const skills = [
    { text: "JavaScript" },
    { text: "TypeScript" },
    { text: "ReactJS" },
    { text: "NodeJS" },
    { text: "GraphQl" },
    { text: "MaterialUI" },
    { text: "Playwright" },
    { text: "Jest" },
    { text: "ThreeJS" },
    { text: "Framer Motion" },
    { text: "C++" },
    { text: "PHP" },
  ];

  const contact = [
    { text: "Email" },
    { text: "jarrodvdheuvel@gmail.com" },
    { text: "LinkedIn" },
    {
      text: "linkedin.com/in/jarrod-van-den-heuvel",
      url: "https://www.linkedin.com/in/jarrod-van-den-heuvel/",
    },
  ];

  const { sm, xs } = useScreenQueries();
  const skillCols = xs ? 2 : sm ? 3 : 4;

  const container = useRef<HTMLDivElement>(null!);
  const [effectMade, setEffectmade] = useState(false);

  useEffect(() => {
    if (!effectMade) {
      new hoverEffect({
        //parent: container.current,
        parent: document.querySelector(".img-contain"),
        intensity: 1,
        image1: "jarrod2.png",
        image2: "smallJarrod.png",
        displacementImage: "texture.png",
        imagesRatio: 1.3,
      });
      setEffectmade(true);
    }
    document.body.style.cursor = "auto";
  }, []);

  const { setIsDark } = useContext(NavModeContext);
  useEffect(() => {
    setIsDark(true);
  }, []);
  return (
    <div
      className=" bg-[#f8f6f5]  md:py-[40px] md:px-[60px] 
    px-[30px] py-[20px] w-screen"
    >
      <div className="flex md:flex-row flex-col mx-auto max-w-[1500px] gap-[60px]">
        <div className=" flex flex-col font-body flex-grow  md:w-[50vw] mt-[150px] gap-[150px] md:gap-[300px] w-full">
          <div>
            <MotionWrapper direction={MotionFrom.Above} delay={0.6} isDark>
              <h1 className=" text-4xl md:text-7xl font-bold font-hatton">
                Software Engineer
              </h1>
            </MotionWrapper>

            <OverlineParagraph
              content={
                <p className="font-light">
                  Hi, I'm Jarrod, I'm a Frontend Engineer at Roam Digital. I've
                  been working professionally for almost 6 years after
                  graduating from the University of Auckland in Software
                  Engineering. However, my coding journey began long before that
                  at the age of 11. Using some of Microsoft Powerpoint's
                  features as a rudimentary programming language, I created 2D
                  games for my friends to play. That is where my passion for the
                  craft of programming started and from there the rest is
                  history.
                </p>
              }
              delay={0.8}
            />
          </div>
          <div>
            <MotionWrapper direction={MotionFrom.Above} delay={0.6} isDark>
              <h1 className=" text-2xl md:text-4xl font-bold font-hatton">
                My Role
              </h1>
            </MotionWrapper>

            <OverlineParagraph
              content={
                <>
                  <p className="font-light mb-8">
                    Working collaboratively with our clients to help them
                    achieve their digital goals and needs. Developing web
                    applications with a passion for beautiful products with
                    sustainable and elegant code architecture.
                  </p>
                  <DiamondGrid content={skills} columnCount={skillCols} />
                </>
              }
              delay={0.8}
            />
          </div>
          <div className="mb-[150px]">
            <MotionWrapper direction={MotionFrom.Above} delay={0.6} isDark>
              <h1 className=" text-2xl md: font-bold font-hatton">Contact</h1>
            </MotionWrapper>

            <OverlineParagraph
              content={<DiamondGrid content={contact} columnCount={2} />}
              delay={0.8}
            />
          </div>
        </div>
        <MotionWrapper
          direction={MotionFrom.Below}
          delay={0.6}
          isDark
          className="sticky top-[90px] flex flex-col font-body md:mt-[150px] sm:mt-[80px] items-end lg:h-[595px] lg:w-[493px] md:h-[492px] md:w-[375px] sm:h-[660px] h-[492px] w-full "
        >
          <div
            className="lg:h-[595px] lg:w-[493px] md:h-[492px] md:w-[375px]  sm:h-[660px] h-[492px] w-full img-contain"
            ref={container}
          />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default About;
