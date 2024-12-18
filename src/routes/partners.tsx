import CautionTape from "@/assets/img/caution-tape-blank-hr.png";
import CautionTapeGroup from "@/assets/img/caution-tape-shadowed.png";

import { Facebook, Instagram, Globe } from "lucide-react";
import { Partner, medias, majors, minors } from "@/constants/partners";

const Partners = () => {
  /* TODO: replace with real sponsor data */

  return (
    <div className="bg-[#110101]">
      {/* Hero Section */}
      <section className="flex flex-col fade-backdrop justify-center md:items-center box-pattern px-12 py-36">
        <h1 className="text-5xl lg:text-7xl font-heading-italic text-center text-red-600 drop-shadow-[-8px_8px_0_rgba(0,0,0,1)]">
          OUR PARTNERS
        </h1>
        <h2 className="text-2xl font-medium text-yellow-500 text-center">
          This Event is Brought to You by Our Generous Partners and Supporters
          Who Make It All Possible
        </h2>
      </section>
      <section id="tape">
        {/* Caution Tape divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-1">
          <img
            rel="preload"
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      {/* Media Partners */}
      <PartnerGroup
        id="media"
        title="Media Partners"
        subtitle="Expanding our reach"
        partners={medias}
      />
      {/* Caution Tape Footer */}
      <div id="major" className="h-10 overflow-hidden">
      </div>
      {/* Major Partners */}
      <PartnerGroup
        id="majorgroup"
        title="Major Partners"
        subtitle="Our Primary Partners"
        partners={majors}
        reverse
      />
      <div id="minor" className="h-10 overflow-hidden">
      </div>
      {/* Minor Partners */}
      <PartnerGroup
        id="minors"
        title="Minor Partners"
        subtitle="Our Supoprting Partners"
        partners={minors}
      />
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

const PartnerGroup = ({
  id,
  title,
  subtitle,
  partners,
  reverse,
}: {
  id: string;
  title: string;
  subtitle: string;
  partners: Partner[];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center lg:${
        reverse ? "items-end" : "items-start"
      } px-24 py-16`}
    >
      <h2 id={id} className="font-heading text-2xl">
        {title}
      </h2>
      <span className="text-yellow-500 uppercase">{subtitle}</span>
      <div className="flex flex-wrap justify-center gap-5">
        {partners.map((company, i) => (
          <GlassCard key={i} sponsor={company} />
        ))}
      </div>
    </div>
  );
};

const GlassCard = ({ sponsor }: { sponsor: Partner }) => {
  return (
    <div className="flex flex-col bg-white bg-opacity-15 backdrop-blur-md rounded-lg shadow-lg p-4 my-4 max-w-56">
      <div className="flex h-full justify-center items-center min-h-32">
        <img src={sponsor.logo} alt={sponsor.name} className="w-40" />
      </div>
      <div className="pt-3">
        <p className="font-heading-italic text-lg pb-2">{sponsor.name}</p>
        <div className="flex justify-around gap-5 pt-2">
          {sponsor.fb && (
            <a target="_blank" rel="noreferrer noopener" href={sponsor.fb}>
              <Facebook />
            </a>
          )}
          {sponsor.ig && (
            <a target="_blank" rel="noreferrer noopener" href={sponsor.ig}>
              <Instagram />
            </a>
          )}
          {sponsor.web && (
            <a target="_blank" rel="noreferrer noopener" href={sponsor.web}>
              <Globe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partners;
