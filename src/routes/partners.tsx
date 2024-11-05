import { PolaroidFrame } from "@/components/polaroid-frame";
import LogoSilver from "@/assets/img/logo-silver-cropped.png";
import CautionTape from "@/assets/img/caution-tape-blank-hr.png";
import CautionTapeGroup from "@/assets/img/caution-tape-shadowed.png";

const Partners = () => {
  const gold = ["company A", "company B", "company C"];
  const media = ["company A", "company B", "company C"];
  const bronze = ["company A", "company B", "company C"];

  return (
    <div className="bg-[#110101]">
      {/* Hero Section */}
      <section className="flex fade-backdrop justify-end items-center box-pattern px-24 py-36">
        <h1 className="text-6xl font-heading-italic">Our Partners</h1>
      </section>
      <section className="text-center py-10">
        <h2 className="font-heading text-2xl">Gold Sponsors</h2>
        <span className="text-yellow-500 uppercase">
          company a / company b / company c
        </span>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center py-10">
          {gold.map((company) => (
            <PolaroidFrame size="lg" key={company} title={company}>
              <img src={LogoSilver} alt="Gold Sponsor" className="w-52" />
            </PolaroidFrame>
          ))}
        </div>
      </section>
      <section>
        {/* Caution Tape divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-1">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      {/* Bronze Sponsors */}
      <section className="flex flex-col items-center lg:items-start p-24">
        <h2 className="font-heading text-2xl">Bronze Sponsors</h2>
        <span className="text-yellow-500 uppercase">
          company a / company b / company c
        </span>
        <div className="flex flex-col md:flex-row gap-5">
          {bronze.map((company) => (
            <GlassCard key={company} imghref={LogoSilver} />
          ))}
        </div>
      </section>
      {/* Media Partners */}
      <section className="flex flex-col items-center lg:items-end px-24">
        <h2 className="font-heading text-2xl">Media Partners</h2>
        <span className="text-yellow-500 uppercase">
          company a / company b / company c
        </span>
        <div className="flex flex-col md:flex-row gap-5">
          {media.map((company) => (
            <GlassCard key={company} imghref={LogoSilver} />
          ))}
        </div>
      </section>
      {/* Caution Tape Footer */}
      <div className="h-56 overflow-hidden">
        <img
          src={CautionTapeGroup}
          alt="Caution Tape"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const GlassCard = ({ imghref }: { imghref: string }) => {
  return (
    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg shadow-lg p-4 my-4">
      <img src={imghref} alt="Glass Card" className="w-40" />
    </div>
  );
};

export default Partners;
