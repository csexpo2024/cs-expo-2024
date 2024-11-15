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

// Placeholder projects
const placeholderProjects = {
  team1: {
    id: "team1",
    groupid: "team1",
    research_title: "AI-Powered Medical Diagnosis System",
    group: "Team MediTech"
  },
  team2: {
    id: "team2",
    groupid: "team2",
    research_title: "Smart Urban Transportation Optimization",
    group: "Urban Mobility Solutions"
  },
  team3: {
    id: "team3",
    groupid: "team3",
    research_title: "Sustainable Energy Management Platform",
    group: "EcoTech Innovators"
  },
  team4: {
    id: "team4",
    groupid: "team4",
    research_title: "Blockchain-based Supply Chain Tracking",
    group: "Chain Analytics"
  },
  team5: {
    id: "team5",
    groupid: "team5",
    research_title: "Advanced Natural Language Processing Framework",
    group: "LangTech Solutions"
  }
};

// Modify the createProjectEntry function
const createProjectEntry = (id: string, rank?: number): Entry => ({
  rank,
  id,
  image: LogoSilver, // Use LogoSilver instead of dynamic poster
  research_title: placeholderProjects[id as keyof typeof placeholderProjects].research_title,
  group: placeholderProjects[id as keyof typeof placeholderProjects].group,
});

const RankBadge = ({ rank }: { rank: number }) => {
  const frames = {
    1: {
      text: "1st Place",
      className: "bg-yellow-500",
    },
    2: {
      text: "2nd Place",
      className: "bg-gray-300",
    },
    3: {
      text: "3rd Place",
      className: "bg-amber-600",
    },
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
      {
        name: "Health",
        winner: createProjectEntry("team1"),
      },
      {
        name: "NLP",
        winner: createProjectEntry("team5"),
      },
      {
        name: "Data Analytics",
        winner: createProjectEntry("team3"),
      },
      {
        name: "Computer Vision",
        winner: createProjectEntry("team2"),
      },
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

  // Reusable section wrapper component
  const SectionWrapper = ({
    index,
    children,
  }: {
    index: number;
    children: React.ReactNode;
  }) => (
    <div
      className={`w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] ${
        index % 2 === 0 ? "bg-black" : "bg-red-900"
      }`}
    >
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row">
        {children}
      </div>
    </div>
  );

  // Reusable title component
  const SectionTitle = ({
    title,
    titleColor,
  }: {
    title: string;
    titleColor: string;
  }) => (
    <div className="w-full md:w-1/4 py-7 pl-16">
      <h2 className="font-heading-italic text-3xl md:text-4xl lg:text-5xl whitespace-normal ">
        <span className={titleColor}>{title}</span>
      </h2>
    </div>
  );

  // Updated ProjectCard component
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
        <div className="flex justify-end mt-4">
          <Link to={`/projects/${entry.id}`}>
            <Button variant="ghost" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#110101] min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <section className="flex flex-col justify-center items-center py-8">
          <h1 className="text-4xl md:text-6xl text-center text-red-600 font-heading-italic mb-12 w-full">
            HALL OF FAME
          </h1>

          <div className="flex flex-col w-full">
            {/* Regular categories */}
            {categories.map((category, index) => (
              <SectionWrapper key={index} index={index}>
                <SectionTitle
                  title={category.title}
                  titleColor={category.titleColor}
                />
                <div className="flex-1 py-7 pl-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {category.entries.map((entry, entryIndex) => (
                      <div className="w-full max-w-[350px]">
                        <ProjectCard key={entryIndex} entry={entry} />
                      </div>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            ))}

            {/* Best by Category Section */}
            <SectionWrapper index={categories.length}>
              <SectionTitle 
                title={bestByCategory.title}
                titleColor="text-yellow-400"
              />
              <div className="flex-1 p-8">
                <Carousel>
                  <CarouselContent>
                    {bestByCategory.categories.map((category, index) => (
                      <CarouselItem key={index}>
                        <div className="flex flex-col items-center">
                          <h3 className="text-2xl text-white mb-4">
                            {category.name}
                          </h3>
                          <div className="max-w-[450px] w-full mx-auto">
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
                      <div className="text-2xl">{bestMentor.winner.name}</div>
                      <div className="text-sm">{bestMentor.winner.details}</div>
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
