import LogoSilver from "@/assets/img/logo-silver-cropped.png";
import BgRed from "@/assets/img/bg/09-red-grid.png";
import BgRedFlow from "@/assets/img/bg/10-red-flow.png";
import MagnifyingGlass from "@/assets/img/magnifying-glass.png";

import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

import { PolaroidFrame } from "@/components/polaroid-frame";

import { motion, useScroll, useTransform } from 'framer-motion';

import { useRef } from "react";

const Landing = () => {
  const heroRef = useRef(null);
  const eventsRef = useRef(null);
  
  const { scrollYProgress: heroYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end']
  });

  const { scrollYProgress: eventsYProgress } = useScroll({
    target: eventsRef,
    offset: ['start end', 'end start']
  });

  const heroBgY = useTransform(
    heroYProgress,
    [0, 1],
    ['0%', '110%']
  );

  const magnifyingGlassX = useTransform(
    heroYProgress,
    [0, 1],
    ['1%', '300%']
  );

  const magnifyingGlassOpacity = useTransform(
    heroYProgress,
    [0, 1],
    ['100%', '-300%']
  );

  const eventsBgY = useTransform(
    eventsYProgress,
    [0, 1],
    ['1%', '100%']
  );

  return (
    <>
      <motion.section 
        ref={heroRef}
        className="h-[200vh]"
        style={{
          backgroundImage: `url(${BgRed})`,
          backgroundPositionY: heroBgY
        }}
      >
        <section
          className="flex flex-col gap-5 justify-center items-center py-16 lg:px-24 pt-[20vh] min-h-screen sticky top-0 overflow-hidden" 
        >
          <div
            className="relative"
          >
            <motion.img
              className="text-6xl font-bold font-heading max-w-xs p-5"
              src={LogoSilver}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{
                once: true
              }}
            />
            <motion.img
              className="absolute min-w-[80vh] sm:min-w-[65vh] md:min-w-[50vh] lg:min-w-[65vh] top-[-20px] left-[-10px] z-10"
              src={MagnifyingGlass}
              style={{ x: magnifyingGlassX, opacity: magnifyingGlassOpacity }}
            />
          </div>
          <motion.h2 
            className="text-3xl px-2 md:p=0 font-heading-italic lg:w-1/2 text-center uppercase"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unveiling <span className="text-yellow-500">possibilites</span> and
            creating new <span className="text-red-500">realities</span>
          </motion.h2>
          <div className="flex">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex pt-24 gap-y-4 gap-x-10 px-5 md:gap-x-20 md:px-10"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {/* placeholder only - TODO: replace with real sponsors */}
                {Array.from({ length: 15 }).map((_, j) => (
                  <PolaroidFrame key={j}>
                    <img src={LogoSilver} className="min-w-24" />
                  </PolaroidFrame>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      </motion.section>
      <section className="flex flex-col gap-y-40 text-center items-center justify-center bg-[#110101] p-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true
          }}
        >
          <h1 className="font-heading-italic text-6xl">CS EXPO</h1>
          <p className="text-3xl text-muted-foreground max-w-4xl pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus
            mauris a malesuada maximus. Duis gravida sodales libero non interdum
          </p>
          <Button className="mt-5">
            <span>View Event</span>
            <ExternalLink className="h-6 w-6" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{
            once: true
          }}
        >
          <h1 className="font-heading-italic text-6xl">DEV DAY</h1>
          <p className="text-3xl text-muted-foreground max-w-4xl pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus
            mauris a malesuada maximus. Duis gravida sodales libero non interdum
          </p>
          <Button className="mt-5">
            <span>View Event</span>
            <ExternalLink className="h-6 w-6" />
          </Button>
        </motion.div>
      </section>
      <motion.section
        ref={eventsRef}
        style={{
          backgroundImage: `url(${BgRedFlow})`,
          backgroundPositionY: eventsBgY,
          backgroundPosition: 'bottom'
        }}
        className="bg-opacity-75"
      >
        <div className="bg-black bg-opacity-40 p-24 min-h-[80dvh]">
          <motion.h1 
            className="font-heading-italic text-6xl text-center pb-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{
              once: true
            }}
          >
            Events
          </motion.h1>
          <motion.div 
            className="flex flex-col gap-10 lg:px-40 xl:px-"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{
              once: true
            }}
          >
            <div>
              <p className="font-heading text-4xl">CS EXPO DAY 1</p>
              <p className="text-yellow-500 uppercase">
                November 19, 2024 | 8:00 AM - 5:00 PM
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl">CS EXPO DAY 2</p>
              <p className="text-yellow-500 uppercase">
                November 20, 2024 | 8:00 AM - 5:00 PM
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl">DEV DAY</p>
              <p className="text-yellow-500 uppercase">
                November 22, 2024 | 8:00 AM - 1:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Landing;
