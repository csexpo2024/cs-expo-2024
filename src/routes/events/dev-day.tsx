import DevDayBg from "@/assets/img/bg/expo-hero.png";

import { PolaroidArticle } from "@/components/polaroid-article";
import { EventInfo } from "@/components/event-info";

import { speakers } from "@/constants/speakers";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* TODO: needs improvement */
const DevDay = () => {
  const heroRef = useRef(null);
  const day3Ref = useRef(null);

  const { scrollYProgress: heroYProgress } = useScroll({
    target: heroRef,
    offset: ["start 100px", "end start"]
  });

  const { scrollYProgress: day3YProgress } = useScroll({
    target: day3Ref,
    offset: ["start end", "end start"]
  });

  const heroBgY = useTransform(heroYProgress, [0, 1], ["1%", "100%"]);
  const day3Y = useTransform(day3YProgress, [0, 1], ["20%", "-50%"]);

  return (
    <>
      <motion.section
        ref={heroRef}
        className="px-14 lg:px-40 bg-cover bg-center relative bg-neutral-600 bg-blend-overlay h-[60vh] flex items-center justify-end z-10"
        style={{ 
          backgroundImage: `url(${DevDayBg})`,
          backgroundPositionY: heroBgY
        }}
      >
        <motion.h1 
          className="text-6xl lg:text-8xl text-[#861919] font-heading-italic drop-shadow-[-8px_8px_0_rgba(0,0,0,1)] text-right"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true,
          }}
        >
          DEV DAY
        </motion.h1>
      </motion.section>
      <div id="schedule" className="h-1 bg-[#1F0303] overflow-hidden">
      </div>
      <motion.section 
        ref={day3Ref}
        className="bg-[#1F0303] relative pointer-events-none md:pb-28 overflow-hidden"
      >
        {/* TODO: move to right */}
        <motion.div 
          className="absolute text-black opacity-90 leading-[14rem] lg:leading-[19rem] right-[-10vh] text-[20rem] lg:text-[30rem] font-heading"
          style={{
            y: day3Y
          }}
        >
          <div className="flex flex-col items-end">
            <p>D</p>
            <p>A</p>
            <p className="tracking-[-3rem]">3Y</p>
          </div>
        </motion.div>
        <div className="flex flex-col gap-32 p-14 lg:p-44 z-40 items-end text-right">
          <EventInfo
            title="Dev Day"
            subtitle="November 22, 2024 | 10:00 AM - 2:00 PM"
            body="Deserving thesis groups and students will receive an award for their innovation and research
            prowess on the day of the event. A symposium highlighting the current state of computer science.
            Dev Day will feature talks from prominent industry professionals about the software re-engineering and
            software packaging, addressing modern development challenges, and optimizing legacy systems through
            re-engineering for better performance and maintainability, while also exploring efficient software packaging
            practices for seamless deployment across diverse environments. DevDay 2024 aims to bridge academic
            excellence with real-world industry insights."
          />
          <EventInfo
            title="Keynote Talks"
            subtitle="New skills for new realities: skills for a changing world"
            body="In an era of rapid technological advancements and shifting job landscapes, staying
            relevant requires constant adaptation and the acquisition of new skills. This keynote
            will explore the evolving skill sets necessary to thrive in today's ever-changing world.
            From mastering digital tools to developing critical thinking and adaptability, our experts
            will discuss strategies for continuous learning, career growth, and future-proofing your skillset."
          />
          <EventInfo
            title="Panel Talk"
            subtitle="Collaborative success: teamwork and leadership in software projects"
            body="The topic explores the critical role of effective collaboration in software
            development, particularly in software packaging and re-engineering. The talk
            emphasizes how teamwork and leadership drive success in refining and repurposing
            software systems, ensuring seamless integration, scalability, and efficiency. By
            fostering a collaborative environment, teams can better address the complexities of
            re-engineering tasks, streamline packaging processes, and innovate solutions that
            meet evolving technological needs."
          />
        </div>
      </motion.section>
      <div id="speakers" className="h-1 bg-[#1F0303] overflow-hidden">
      </div>
      <section className="flex flex-col items-center bg-[#1F0303] pb-20 px-12 lg:px-24 overflow-x-hidden">
        <h1 className="font-heading text-4xl lg:text-5xl py-10 z-10">Speakers</h1>
        <Carousel id="speaks" className="w-full max-w-full">
          <CarouselContent>
            {/* TODO: replace with actual content */}
            {speakers.map((speaker, i) => (
              !speaker.is_cs_expo &&
              <CarouselItem key={i}>
                <PolaroidArticle
                  title={speaker.full_name}
                  body={speaker.bionote}
                  imghref={speaker.img_url}
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

export default DevDay;
