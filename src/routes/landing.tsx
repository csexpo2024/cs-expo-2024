import LogoSilver from "@/assets/img/logo-silver-cropped.png";
import BgRed from "@/assets/img/bg/09-red-grid.png";

const Landing = () => {
  return (
    <div
      className="flex flex-col gap-5 justify-center items-center py-16"
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
    </div>
  );
};

export default Landing;
