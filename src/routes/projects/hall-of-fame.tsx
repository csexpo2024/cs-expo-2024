import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import LogoSilver from "@/assets/img/logo-silver.png";

type Entry = {
  id: string;
  image: string;
  research_title: string;
  group: string;
  rank?: number;
};

type Category = {
  title: string;
  entries: Entry[];
  titleColor: string;
};

// Reusable components
const RankBadge = ({ rank }: { rank: number }) => {
  const frames = {
    1: { text: "1st Place", className: "bg-yellow-500" },
    2: { text: "2nd Place", className: "bg-gray-300" },
    3: { text: "3rd Place", className: "bg-amber-600" },
  };

  const frame = frames[rank as keyof typeof frames];
  if (!frame) return null;

  return (
    <div
      className={`absolute top-2 left-2 ${frame.className} text-white px-3 py-1 rounded-md font-bold shadow-lg`}
    >
      {frame.text}
    </div>
  );
};

const ProjectCard = ({
  entry,
  isLarge = false,
}: {
  entry: Entry;
  isLarge?: boolean;
}) => (
  <div className="flex flex-col items-center h-full">
    <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden w-full relative">
      {entry.rank && <RankBadge rank={entry.rank} />}
      <img
        src={entry.image}
        alt={entry.group}
        className="w-full h-full object-cover"
      />
    </div>
    <div
      className={`flex flex-col justify-between flex-grow w-full text-white mt-4 ${
        isLarge ? "text-2xl" : "text-xl"
      }`}
    >
      <div className="text-center font-content text-yellow-400">
        <div>{entry.group}</div>
        <div className="text-sm text-left text-white px-2">
          {entry.research_title}
        </div>
      </div>
      <div className="flex justify-end mt-4 font-content">
        <Link to={`/projects/${entry.id}`}>
          <Button variant="ghost" size="sm">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

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

// Data constants
const placeholderProjects = {
  team1: {
    id: "team1",
    groupid: "team1",
    research_title: "AI-Powered Medical Diagnosis System",
    group: "Team MediTech",
  },
  team2: {
    id: "team2",
    groupid: "team2",
    research_title: "Smart Urban Transportation Optimization",
    group: "Urban Mobility Solutions",
  },
  team3: {
    id: "team3",
    groupid: "team3",
    research_title: "Sustainable Energy Management Platform",
    group: "EcoTech Innovators",
  },
  team4: {
    id: "team4",
    groupid: "team4",
    research_title: "Blockchain-based Supply Chain Tracking",
    group: "Chain Analytics",
  },
  team5: {
    id: "team5",
    groupid: "team5",
    research_title: "Advanced Natural Language Processing Framework",
    group: "LangTech Solutions",
  },
};

const createProjectEntry = (id: string, rank?: number): Entry => ({
  rank,
  id,
  image: LogoSilver,
  research_title:
    placeholderProjects[id as keyof typeof placeholderProjects].research_title,
  group: placeholderProjects[id as keyof typeof placeholderProjects].group,
});

// Main component
const HallOfFame = () => {
  const categories: Category[] = [
    {
      title: "BEST THESIS OVERALL",
      entries: ["team1", "team2", "team3"].map((id, index) =>
        createProjectEntry(id, index + 1)
      ),
      titleColor: "text-yellow-400",
    },
    {
      title: "MOST INNOVATIVE",
      entries: ["team2", "team3", "team4"].map((id, index) =>
        createProjectEntry(id, index + 1)
      ),
      titleColor: "text-yellow-400",
    },
    {
      title: "BEST PRESENTER",
      entries: ["team2", "team1", "team5"].map((id, index) =>
        createProjectEntry(id, index + 1)
      ),
      titleColor: "text-yellow-400",
    },
    {
      title: "BEST AVP",
      entries: ["team2", "team3", "team5"].map((id, index) =>
        createProjectEntry(id, index + 1)
      ),
      titleColor: "text-yellow-400",
    },
    {
      title: "BEST POSTER",
      entries: ["team1", "team2", "team5"].map((id, index) =>
        createProjectEntry(id, index + 1)
      ),
      titleColor: "text-yellow-400",
    },
  ];

  const bestByCategory = {
    title: "BEST THESIS BY CATEGORY",
    categories: [
      { name: "Health", winner: createProjectEntry("team1") },
      { name: "NLP", winner: createProjectEntry("team5") },
      { name: "Data Analytics", winner: createProjectEntry("team3") },
      { name: "Computer Vision", winner: createProjectEntry("team2") },
    ],
  };

  const bestMentor = {
    title: "BEST THESIS MENTOR",
    winner: {
      name: "Dr. Maria Santos",
      image: LogoSilver,
      details: "Artificial Intelligence Department",
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
              <ProjectCard entry={entry} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );

  const renderBestByCategory = () => (
    <SectionWrapper index={categories.length}>
      <SectionTitle title={bestByCategory.title} titleColor="text-yellow-400" />
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
        <section className="flex flex-col justify-center items-center py-4 md:py-8">
          <h1 className="text-3xl md:text-6xl text-center text-red-600 font-heading-italic mb-8 md:mb-12 w-full">
            HALL OF FAME
          </h1>

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
        </section>
      </div>
    </div>
  );
};

export default HallOfFame;