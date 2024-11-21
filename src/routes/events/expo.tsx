import ExpoBg from "@/assets/img/bg/dev-day-hero.png";

import { PolaroidArticle } from "@/components/polaroid-article";
import { EventInfo } from "@/components/event-info";

import { speakers } from "@/constants/speakers";
import { panelists } from "@/constants/panelists";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Expo = () => {
  const heroRef = useRef(null);
  const day1Ref = useRef(null);
  const day2Ref = useRef(null);

  const { scrollYProgress: heroYProgress } = useScroll({
    target: heroRef,
    offset: ["start 100px", "end start"]
  });

  const { scrollYProgress: day1YProgress } = useScroll({
    target: day1Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: day2YProgress } = useScroll({
    target: day2Ref,
    offset: ["start end", "end start"]
  });

  const heroBgY = useTransform(heroYProgress, [0, 1], ["1%", "100%"]);
  const day1Y = useTransform(day1YProgress, [0, 1], ["20%", "-50%"]);
  const day2Y = useTransform(day2YProgress, [0, 1], ["20%", "-50%"]);

  return (
    <>
      <motion.section
        ref={heroRef}
        className="px-14 lg:px-40 bg-cover bg-center relative bg-neutral-600 bg-blend-overlay h-[60vh] flex items-center z-10"
        style={{ 
          backgroundImage: `url(${ExpoBg})`,
          backgroundPositionY: heroBgY
        }}
      >
        <motion.h1 
          className="text-6xl lg:text-8xl text-[#861919] font-heading-italic drop-shadow-[-8px_8px_0_rgba(0,0,0,1)]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
        >
          CS EXPO 2024
        </motion.h1>
      </motion.section>
      <motion.section 
        ref={day1Ref}
        className="bg-[#1F0303] relative pointer-events-none md:pb-28"
      >
        <motion.div 
          className="absolute text-black opacity-90 leading-[14rem] lg:leading-[19rem] left-[-10vh] text-[20rem] lg:text-[30rem] font-heading"
          style={{
            y: day1Y
          }}
        >
          <p>D</p>
          <p>A</p>
          <p className="tracking-[-3rem]">Y1</p>
        </motion.div>
        <div id="schedule" className="flex flex-col gap-32 p-14 lg:p-44 z-50">
          <EventInfo
            title="CS Expo Day 1"
            subtitle="November 19, 2024 | 10:00 AM - 4:00 PM "
            body="Join the first day of CS EXPO, as bright fourth-year students present their innovative theses with topics regarding data analytics, 
            health, and natural language processing. Under the data analytics category are groups Agatha, LMNTRX, 
            and Strawhats. For the health category, Code Geass, Hurtz, Lorem Ipsum, and Samsan. Lastly, for the
            natural language processing category are the thesis groups Codex, Ctrl Alt Delete, EnSys, Jathro's Matrix, and LMDIFY."
          />
          <EventInfo
            title="Keynote Talks"
            subtitle="The power of innovation: how technology crafts our daily realities"
            body="Innovation in technology has become the driving force behind the transformation of our everyday lives. This panel will explore how emerging technologies are shaping modern society, 
            from the way we work and communicate to how we interact with the world around us. 
            Our experts will discuss the breakthroughs that are redefining industries, 
            enhancing human experiences, and solving global challenges."
          />
        </div>
      </motion.section>
      <section className="bg-[#1F0303] relative overflow-x-clip pointer-events-none">
        <motion.div 
          className="absolute text-black opacity-90 leading-[14rem] lg:leading-[19rem] left-[-10vh] text-[20rem] lg:text-[30rem] font-heading"
          style={{
            y: day2Y
          }}
        >
          <p>D</p>
          <p>A</p>
          <p className="tracking-[-3rem]">Y2</p>
        </motion.div>
        <div className="flex flex-col gap-32 p-14 lg:p-44 z-50">
          <EventInfo
            title="CS Expo Day 2"
            subtitle="November 20, 2024 | 10:00 AM - 3:00 PM "
            body="Creating breakthroughs for the computer vision category are the groups that will be 
            presenting on the second day of the CS Expo event. These groups are Algoriteam, Code, 
            Computer Science Global Offensive, GIGGA, HUI, IntelliWatch, JLNN, Lambda, Puno ng 
            Pagmamahal, and Theta."
          />
          <EventInfo
            title="Keynote Talks"
            subtitle="Replacing the irreplaceable: AI's role in crafting new realities"
            body="As artificial intelligence continues to advance, it's reshaping
            industries once thought to be driven solely by human creativity and
            intuition. This keynote delves into AI's transformative role in crafting
            new realities, from automating complex tasks to enhancing decision-making 
            processes. Explore the ethical implications, potential risks, and opportunities 
            as AI moves from augmenting to potentially replacing roles across various fields."
          />
        </div>
      </section>
      <div id="panelist" className="h-5 bg-[#1F0303] overflow-hidden">
      </div>
      <section className="flex flex-col items-center bg-[#1F0303] pb-20 px-12 lg:px-24 overflow-x-hidden">
        <h1 className="font-heading text-4xl lg:text-5xl py-10 z-10">Panelists</h1>
        <Carousel className="w-full max-w-[95vw] lg:max-w-full">
          <CarouselContent>
            {panelists.map((panelist, i) => (
              <CarouselItem key={i}>
                <PolaroidArticle
                  title={panelist.full_name}
                  body={panelist.bionote}
                  imghref={panelist.img_url}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div id="speakers" className="h-1 bg-[#1F0303] overflow-hidden" />
        <h1 className="font-heading text-4xl lg:text-5xl py-10 mt-10">Speakers</h1>
        <Carousel className="w-full max-w-[95vw] lg:max-w-full lg:text-right">
          <CarouselContent>
            {speakers.map((speaker, i) => (
              speaker.is_cs_expo &&
              <CarouselItem key={i}>
                <PolaroidArticle
                  title={speaker.full_name}
                  body={speaker.bionote}
                  imghref={speaker.img_url}
                  reversed
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default Expo;
