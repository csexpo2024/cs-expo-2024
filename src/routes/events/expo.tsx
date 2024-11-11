import ExpoBg from "@/assets/img/bg/dev-day-hero.png";
import LogoSilver from "@/assets/img/logo-silver-cropped.png";

import { PolaroidArticle } from "@/components/polaroid-article";
import { EventInfo } from "@/components/event-info";

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
        <div className="flex flex-col gap-32 p-14 lg:p-44 z-50">
          <EventInfo
            title="CS Expo Day 1"
            subtitle="November 19, 2024 | 8:00 AM - 5:00 "
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
          />
          <EventInfo
            title="Keynote Talks"
            subtitle="The power of innovation: how technology crafts our daily realities"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
          />
        </div>
      </motion.section>
      <section className="bg-[#1F0303] relative overflow-x-clip pointer-events-none">
        {/* TODO: move day number beside last letter (?? need help on this) */}
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
            subtitle="November 19, 2024 | 8:00 AM - 5:00 "
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
          />
          <EventInfo
            title="Keynote Talks"
            subtitle="The power of innovation: how technology crafts our daily realities"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
          />
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#1F0303] pb-20 px-24">
        <h1 className="font-heading text-4xl lg:text-5xl py-10 z-10">Panelists</h1>
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {/* TODO: replace with actual content */}
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i}>
                <PolaroidArticle
                  title="Dr. Shane Ambat"
                  body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                  imghref={LogoSilver}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h1 className="font-heading text-4xl lg:text-5xl py-10 mt-10">Speakers</h1>
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {/* TODO: replace with actual content */}
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i}>
                <PolaroidArticle
                  title="Dr. Shane Ambat"
                  body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                  imghref={LogoSilver}
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
