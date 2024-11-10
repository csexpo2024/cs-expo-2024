import { PolaroidFrame } from "@/components/polaroid-frame";
import LogoSilver from "@/assets/img/logo-silver-cropped.png";
import CautionTape from "@/assets/img/caution-tape-blank-hr.png";
import CautionTapeGroup from "@/assets/img/caution-tape-shadowed.png";

import { Facebook, Instagram, Globe } from "lucide-react";

interface Sponsor {
  name: string;
  logo: string;
  fb: string;
  ig: string;
  web: string;
}

const Partners = () => {
  /* TODO: replace with real sponsor data */
  const gold = [
    {
      name: "Acme",
      logo: LogoSilver,
      fb: "#",
      ig: "#",
      web: "#",
    },
    {
      name: "Acme",
      logo: LogoSilver,
      fb: "#",
      ig: "#",
      web: "#",
    },
    {
      name: "Acme",
      logo: LogoSilver,
      fb: "#",
      ig: "#",
      web: "#",
    },
  ];
  const media = gold;
  const bronze = gold;

  return (
    <div className="bg-[#110101]">
      {/* Hero Section */}
      <section className="flex fade-backdrop justify-end items-center box-pattern px-24 py-36">
        <h1 className="text-6xl font-heading-italic">Our Partners</h1>
      </section>
      <section className="text-center py-10">
        <h2 className="font-heading text-2xl">Gold Sponsors</h2>
        <span className="text-yellow-500 uppercase">
          our premier supporters
        </span>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center py-10">
          {gold.map((company, i) => (
            <PolaroidFrame size="lg" key={i} title={company.name} bold>
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
          our Essential contributors
        </span>
        <div className="flex flex-wrap justify-center gap-5">
          {bronze.map((company, i) => (
            <GlassCard key={i} sponsor={company} />
          ))}
        </div>
      </section>
      {/* Media Partners */}
      <section className="flex flex-col items-center lg:items-end px-24">
        <h2 className="font-heading text-2xl">Media Partners</h2>
        <span className="text-yellow-500 uppercase">Expanding our reach</span>
        <div className="flex justify-center flex-wrap gap-5">
          {media.map((company, i) => (
            <GlassCard key={i} sponsor={company} />
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

const GlassCard = ({ sponsor }: { sponsor: Sponsor }) => {
  return (
    <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-lg shadow-lg p-4 my-4">
      <div className="flex justify-center">
        <img src={sponsor.logo} alt="Glass Card" className="w-40" />
      </div>
      <div className="pt-3">
        <p className="font-heading-italic text-lg pb-2">{sponsor.name}</p>
        <div className="flex justify-between gap-5">
          <a href={sponsor.fb}>
            <Facebook />
          </a>
          <a href={sponsor.ig}>
            <Instagram />
          </a>
          <a href={sponsor.web}>
            <Globe />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
