import DevDayBg from "@/assets/img/bg/expo-hero.png";

import LogoSilver from "@/assets/img/logo-silver-cropped.png";

import { PolaroidArticle } from "@/components/polaroid-article";
import { EventInfo } from "@/components/event-info";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* TODO: needs improvement */
const DevDay = () => {
  return (
    <>
      <section
        className="p-40 bg-cover bg-center relative bg-neutral-600 bg-blend-overlay"
        style={{ backgroundImage: `url(${DevDayBg})` }}
      >
        <h1 className="text-6xl text-right text-red-600 font-heading-italic drop-shadow-2xl">
          Dev Day
        </h1>
      </section>
      <section className="bg-[#1F0303] relative overflow-hidden">
        {/* TODO: move to right */}
        <div className="absolute text-black opacity-90 vertical-text pointer-events-none">
          <span className="text-[20rem] font-heading">DAY 3</span>
        </div>
        <div className="flex flex-col gap-32 p-24 lg:p-44 z-40 items-end">
          <div className="text-right z-30 lg:w-3/6">
            <EventInfo
              title="Dev Day"
              subtitle="November 19, 2024 | 8:00 AM - 5:00"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
            />
          </div>
          <div className="text-right z-30 lg:w-3/6">
            <EventInfo
              title="Keynote Talks"
              subtitle="The power of innovation: how technology crafts our daily realities"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
            />
          </div>
          <div className="text-right z-30 lg:w-3/6">
            <EventInfo
              title="Panel Talk"
              subtitle="The power of innovation: how technology crafts our daily realities"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus venenatis diam, ac mattis eros viverra ut. Quisque faucibus mauris a malesuada maximus."
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#1F0303] pb-20 px-24">
        <h1 className="font-heading text-5xl py-10">Speakers</h1>
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
      </section>
    </>
  );
};

export default DevDay;
