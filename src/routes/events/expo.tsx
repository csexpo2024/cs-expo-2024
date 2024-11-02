import ExpoBg from "@/assets/img/bg/dev-day-hero.png";
import LogoSilver from "@/assets/img/logo-silver-cropped.png";

import { PolaroidArticle } from "@/components/polaroid-article";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Expo = () => {
  return (
    <>
      <section
        className="p-40 bg-cover bg-center relative bg-neutral-600 bg-blend-overlay"
        style={{ backgroundImage: `url(${ExpoBg})` }}
      >
        <h1 className="text-6xl text-red-600 font-heading-italic drop-shadow-2xl">
          CS Expo 2024
        </h1>
      </section>
      <section className="bg-[#1F0303] relative overflow-hidden pointer-events-none">
        <div className="absolute text-black opacity-90 vertical-text">
          <span className="text-[20rem] font-heading">DAY 1</span>
        </div>
        <div className="flex flex-col gap-32 p-32 lg:p-44 z-50">
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
      </section>
      <section className="bg-[#1F0303] relative overflow-hidden pointer-events-none">
        \{/* TODO: move day number beside last letter (?? need help on this) */}
        <div className="absolute text-black opacity-90 vertical-text">
          <span className="text-[20rem] font-heading">DAY 2</span>
        </div>
        <div className="flex flex-col gap-32 p-32 lg:p-44 z-50">
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
        <h1 className="font-heading text-5xl py-10">Panelists</h1>
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
        <h1 className="font-heading text-5xl py-10 mt-10">Speakers</h1>
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

const EventInfo = ({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col z-50">
      <p className="font-heading text-6xl">{title}</p>
      <p className="text-yellow-500 uppercase text-xl lg:w-3/6">{subtitle}</p>
      <p className="text-lg lg:w-3/6 mt-3 p-2 font-semibold">{body}</p>
    </div>
  );
};

export default Expo;
