import LogoSilver from "@/assets/img/logo-silver-cropped.png";
import BgRed from "@/assets/img/bg/09-red-grid.png";
import BgRedFlow from "@/assets/img/bg/10-red-flow.png";

import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

const Landing = () => {
  return (
    <>
      <section
        className="flex flex-col gap-5 justify-center items-center py-16 lg:px-24"
        style={{
          backgroundImage: `url(${BgRed})`,
        }}
      >
        <img
          className="text-6xl font-bold font-heading max-w-xs p-5"
          src={LogoSilver}
        />
        <h2 className="text-3xl px-2 md:p=0 font-heading-italic lg:w-1/2 text-center uppercase">
          Unveiling <span className="text-yellow-500">possibilites</span> and
          creating new <span className="text-red-500">realities</span>
        </h2>
      </section>
      <section className="flex flex-col gap-y-40 text-center items-center justify-center bg-[#110101] p-24">
        <div>
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
        </div>
        <div>
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
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${BgRedFlow})` }}
        className="bg-opacity-75"
      >
        <div className="bg-black bg-opacity-40 p-24">
          <h1 className="font-heading-italic text-6xl text-center pb-20">
            Events
          </h1>
          <div className="flex flex-col gap-10 lg:px-40 xl:px-">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
