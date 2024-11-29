import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import MagpantayImg from "/img/panelists/magpantay.jpg";
import { projects } from "@/constants/projects";

type Category = {
  title: string;
  entries: string[] | (string | string[])[];
  titleColor: string;
};

// Reusable components
const RankBadge = ({ rank }: { rank: number }) => {
  const frames = {
    1: { text: "1st Place", className: "bg-yellow-500" },
    2: { text: "2nd Place", className: "bg-gray-500" },
    3: { text: "3rd Place", className: "bg-amber-600" },
  };

  const frame = frames[rank as keyof typeof frames];
  if (!frame) return null;

  return (
    <div
      className={`absolute top-2 left-2 ${frame.className} text-white px-3 py-1 rounded-md font-bold shadow-md`}
    >
      {frame.text}
    </div>
  );
};

const ProjectCard = ({
  entry,
  rank,
  isLarge = false,
}: {
  entry: string | string[];
  rank?: number;
  isLarge?: boolean;
}) => {
  const singleEntry = (projectKey: string): React.ReactNode => {
    const project = projects[projectKey];
    if (!project) {
      return <div> Project not found </div>; // Fallback if the project key is invalid
    }

    return (
      <>
        <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden w-full relative">
          {rank && <RankBadge rank={rank} />}
          <img
            src={projects[projectKey].gallery[0].url}
            alt={projects[projectKey].group}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`flex flex-col justify-between flex-grow w-full text-white mt-4 ${
            isLarge ? "text-2xl" : "text-xl"
          }`}
        >
          <div className="text-center font-content text-yellow-400">
            <div>{projects[projectKey].group}</div>
            <div className="text-sm text-center text-white px-2">
              {projects[projectKey].research_title}
            </div>
          </div>
          <div className="flex justify-center mt-4 font-content">
            <Link to={`/projects/${projectKey}`}>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center h-full">
      {Array.isArray(entry) ? (
        <Carousel className="w-full">
          <CarouselContent>
            {entry.map((groupEntry: string, groupEntryIndex) => (
              <CarouselItem key={groupEntryIndex}>
                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden w-full relative">
                  {rank && <RankBadge rank={rank} />}
                  <img
                    src={projects[groupEntry].gallery[0].url}
                    alt={projects[groupEntry].group}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`flex flex-col justify-between flex-grow w-full text-white mt-4 ${
                    isLarge ? "text-2xl" : "text-xl"
                  }`}
                >
                  <div className="text-center font-content text-yellow-400">
                    <div>{projects[groupEntry].group}</div>
                    <div className="text-sm text-center text-white px-2">
                      {projects[groupEntry].research_title}
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 font-content">
                    <Link to={`/projects/${groupEntry}`}>
                      <Button variant="ghost" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      ) : (
        singleEntry(entry)
      )} 
    </div>
  );
};

const SectionWrapper = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => (
  <div className="relative">
    <div
      className={`absolute inset-0 -mx-[50vw] left-[50%] right-[50%] ${
        index % 2 === 0 ? "bg-black" : "bg-[#410404]"
      }`}
    />
    <div className="relative max-w-[1700px] w-full mx-auto flex flex-col md:flex-row px-4">
      {children}
    </div>
  </div>
);

const SectionTitle = ({
  title,
  titleColor,
}: {
  title: string;
  titleColor: string;
}) => (
  <div className="w-full md:w-1/4 py-4 md:py-7 px-4 md:pl-16">
    <h2 className="font-heading-italic text-2xl md:text-3xl lg:text-4xl whitespace-normal">
      <span className={titleColor}>{title}</span>
    </h2>
  </div>
);

// Main component
const HallOfFame = () => {
  const categories: Category[] = [
    {
      title: "BEST THESIS OVERALL",
      entries: ["book-i", "carident", "intelliwatch"],
      titleColor: "text-yellow-400",
    },
    {
      title: "MOST INNOVATIVE",
      entries: ["book-i", "carident", "intelliwatch"],
      titleColor: "text-white",
    },
    {
      title: "BEST PRESENTER",
      entries: ["mimical", "book-i", "carident"],
      titleColor: "text-yellow-400",
    },
    {
      title: "BEST AVP",
      entries: ["pnp", "agila", "intelliwatch"],
      titleColor: "text-white",
    },
    {
      title: "BEST POSTER",
      entries: ["onics", ["agila", "book-i", "ultrascan"], ["elixir", "intelliwatch"]],
      titleColor: "text-yellow-400",
    },
  ];

  const bestByCategory = {
    title: "BEST THESIS BY CATEGORY",
    categories: [
      { name: "Health", winner: "carident" },
      { name: "NLP", winner: "book-i" },
      { name: "Data Analytics", winner: "agila" },
      { name: "Computer Vision", winner: ["csgo", "intelliwatch", "pnp"] },
    ],
  };

  const bestMentor = {
    title: "BEST THESIS MENTOR",
    winner: {
      name: "Mr. Abraham Magpantay",
      image: MagpantayImg,
      details: "",
    },
    titleColor: "text-yellow-400",
  };

  const renderCategorySection = (category: Category, index: number) => (
    <SectionWrapper key={index} index={index}>
      <SectionTitle title={category.title} titleColor={category.titleColor} />
      <div className="flex-1 py-4 md:py-7 px-4 md:pl-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {category.entries.map((entry, entryIndex) => (
            <div
              key={entryIndex}
              className="w-full justify-self-center"
            >
              <ProjectCard entry={entry} rank={entryIndex + 1} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );

  const renderBestByCategory = () => (
    <SectionWrapper index={categories.length}>
      <SectionTitle title={bestByCategory.title} titleColor="text-white" />
      <div className="flex-1 p-8">
        <Carousel className="w-full">
          <CarouselContent>
            {bestByCategory.categories.map((category, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-heading text-white mb-4">{category.name}</h3>
                  <div className="w-full max-w-[450px] mx-auto">
                    <ProjectCard entry={category.winner} isLarge />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </SectionWrapper>
  );

  return (
    <div className="box-pattern min-h-screen w-full overflow-x-hidden">
      <div className="w-full mx-auto px-4">
        <section className="flex flex-col fade-backdrop justify-center md:items-center box-pattern px-12 py-36">
          <h1 className="text-5xl lg:text-7xl font-heading-italic text-center text-red-600 drop-shadow-[-8px_8px_0_rgba(0,0,0,1)]">
            HALL OF FAME
          </h1>
          <h2 className="text-2xl font-medium text-yellow-500 text-center">
          Excellence deserves recognition. At CS EXPO 2024, we honor visionary individuals 
          and teams whose dedication to research, innovation, and technical expertise has 
          redefined the boundaries of computer science.
          </h2>
        </section>
        <div className="flex flex-col w-full">
          {/* Regular categories */}
          {categories.map(renderCategorySection)}

          {/* Best by Category Section */}
          {renderBestByCategory()}

          {/* Best Mentor Section */}
          <SectionWrapper index={categories.length + 1}>
            <SectionTitle
              title={bestMentor.title}
              titleColor={bestMentor.titleColor}
            />
            <div className="flex-1 p-8">
              <div className="flex justify-center">
                <div className="flex flex-col items-center max-w-md">
                  <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden w-full">
                    <img
                      src={bestMentor.winner.image}
                      alt={bestMentor.winner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-white text-center mt-4">
                    <div className="text-2xl font-content font-bold">{bestMentor.winner.name}</div>
                    <div className="text-sm font-content">{bestMentor.winner.details}</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;