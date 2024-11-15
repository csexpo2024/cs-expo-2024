import { projects as data } from "@/constants/projects";

import { useParams } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState, useRef, useEffect } from "react";

import CautionTapeGroup from "@/assets/img/caution-tape-shadowed.png";

import { PolaroidFrame } from "@/components/polaroid-frame";

import { Photo } from "@/constants/projects";

import NewspaperBg from "@/assets/img/bg/newspaper.jpg";

const Project = () => {
  const { projectid } = useParams<{ projectid: string }>();

  const [isTruncated, setIsTruncated] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        setIsTruncated(ref.current.scrollHeight > ref.current.clientHeight);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const _gallery = [
    {
      name: "ningning",
      url: "https://preview.redd.it/e54t88z9l2p71.jpg?width=640&crop=smart&auto=webp&s=471982e45741e3afeb0e03c4c48166b092ce1494",
    },
    {
      name: "ningning",
      url: "https://preview.redd.it/ybi78y1al2p71.jpg?width=640&crop=smart&auto=webp&s=5fd43ab51ad7b71a084cdaf9971e79144bf557bf",
    },
    {
      name: "ningning",
      url: "https://dbkpop.com/wp-content/uploads/2021/09/aespa_savage_teaser_hallucination_quest_1_ningning_1.jpg",
    },
  ];

  const project = projectid ? data[projectid.toLowerCase()] : null;

  const members = project?.tags?.members;
  const mentor = project?.tags?.mentor;
  const concepts = project?.tags?.concepts;

  if (!project) {
    return (
      <div className="flex justify-center">
        <h1 className="text-5xl font-heading">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="">
      <div className="px-4 xl:px-52">
        <div
          className="group-backdrop sm:mx-28 absolute z-[0] max-w-full h-[500px] right-0 top-0 left-0 bg-center bg-no-repeat bg-cover animate-fade-in duration-700"
          style={{
            backgroundImage:
              project?.title === "MLFDS"
                ? `url(${NewspaperBg})`
                : `url(/img/team/${project?.groupid}.jpg)`,
          }}
        ></div>
        <img
          rel="preload"
          src={`/img/team/${project?.groupid}.jpg`}
          className="h-[250px] sm:h-[350px] opacity-0 bg-opacity-0 bg-transparent"
          alt=""
        />
        <div className="sm:grid grid-cols-4 sm:gap-8 relative z-10">
          {/* Poster Column */}
          <div className="col-span-1 place-items-center">
            <div className="sm:flex flex-col mx-2 sm:mx-1 sticky top-0 pt-2 pb-3 float-right w-1/4 sm:w-full sm:float-none">
              <div className="drop-shadow-2xl">
                <img
                  src={`/img/posters/${project.groupid}-poster.jpg`}
                  alt=""
                  className="rounded-lg w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)] border-[1px] border-gray-50 border-opacity-15"
                />
              </div>
            </div>
          </div>
          {/* Project info Column */}
          <div className="sm:col-span-3 px-2 z-[100]">
            {/* Header */}
            <div className="flex flex-wrap pb-4 space-y-2 items-end [text-shadow:_0_4px_5px_rgba(0,0,0,0.95)]">
              <h1 className="text-3xl lg:text-5xl font-heading break-words max-w-full">
                {project?.title}
              </h1>
              <div className="flex flex-wrap space-x-2 text-lg pl-2 p-2 [text-shadow:_0_4px_200px_rgba(0,0,0,0.95)]">
                <p>
                  <span className="text-muted-foreground">by</span>{" "}
                  <span className="text-yellow-500 underline">
                    {project?.group}
                  </span>
                </p>
              </div>
            </div>
            <h2 className="font-medium pb-2">{project?.research_title}</h2>
            {/* More Info */}
            <div className="lg:grid grid-cols-5 gap-5 py-5">
              <div className="col-span-3">
                <p
                  ref={ref}
                  className={`font-mono text-sm sm:text-base text-muted-foreground ${
                    !showMore && "line-clamp-6 sm:line-clamp-[15]"
                  }`}
                >
                  {project?.description}
                </p>
                <span
                  onClick={() => setShowMore(!showMore)}
                  className="text-sky-500 font-semibold cursor-pointer"
                >
                  {isTruncated
                    ? showMore
                      ? "Show less"
                      : "Show more"
                    : showMore && "Show less"}
                </span>
              </div>
              {/* Tag Groups */}
              <div className="col-span-2 py-5 lg:py-0">
                <div className="flex flex-col gap-5 bg-white bg-opacity-15 backdrop-blur-md rounded w-full p-5 sm:w-auto min-w-min">
                  <GroupTags label="Members" tags={members!} />
                  <GroupTags label="Mentor" tags={mentor!} />
                  <GroupTags label="Concepts" tags={concepts!} />
                </div>
              </div>
            </div>
            <h3 className="font-heading text-lg py-8">
              AVP{" "}
              <span>
                <hr />
              </span>
            </h3>
            <div className="relative overflow-hidden w-full pt-[56.25%]">
              <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full">
                <Avp
                  link={
                    project?.avp ??
                    "https://www.youtube.com/embed/jQNEiHzIcX4?si=z_OGbedZhXvKgCNR"
                  }
                />
              </div>
            </div>
            <h3 className="font-heading text-lg py-8">
              Gallery{" "}
              <span>
                <hr />
              </span>
            </h3>
            <div className="w-full px-10">
              <Gallery images={project.gallery ?? _gallery} />
            </div>
          </div>
        </div>
      </div>
      {/* Caution Tape Footer */}
      <div className="h-56 overflow-hidden pointer-events-none">
        <img
          src={CautionTapeGroup}
          alt="Caution Tape"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const GroupTags = ({ label, tags }: { label: string; tags: string[] }) => {
  return (
    <div>
      <p className="text-muted-foreground pb-1">{label}</p>
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map((tag, i) => (
          <span key={i} className="bg-neutral-900 p-2 text-sm rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Avp = ({ link }: { link: string }) => {
  return (
    <iframe
      className="w-full h-full"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

const Gallery = ({ images }: { images: Photo[] }) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i}>
            <div className="flex justify-center items-center h-full">
              <PolaroidFrame size="lg" nonPadded title={image.name}>
                <img
                  src={image.url}
                  alt=""
                  className="w-full max-h-96 object-contain"
                />
              </PolaroidFrame>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Project;
