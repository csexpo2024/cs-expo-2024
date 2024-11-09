import CommitteeBg from "@/assets/img/bg/08-red-grid.png";
import LogoSilver from "@/assets/img/logo-silver-cropped.png";
import { PolaroidFrame } from "@/components/polaroid-frame";

interface CommitteeSectionProps {
  title: string;
  members: string[];
}

const committees = {
  "Overall Project Head": ["Juan"],
  "External Committee": ["Tom", "Uma", "Vic", "Wendy", "Xander"],
  "Internal Committee": ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"],
  "Secretariat Committee": [
    "Jack", "Karen", "Leo", "Mona", "Nina",
    "Omar", "Pia", "Quinn", "Ray", "Sara"
  ],
  "Programs Committee": ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"],
  "Marketing Committee": [
    "David", "Ella", "Finn", "Gina", "Holly",
    "Ivy", "Jon", "Kate", "Liam", "Mila",
    "Nate", "Olive", "Pete", "Quinn"
  ],
  "Logistics Committee": [
    "Xenia", "Yusuf", "Zara", "Aiden", "Bella",
    "Caleb", "Daisy", "Ethan", "Fiona", "George",
    "Xenia", "Yusuf", "Zara", "Aiden", "Bella",
    "Caleb", "Daisy", "Ethan", "Fiona", "George",
    "Xenia", "Yusuf", "Zara"
  ],
  "Technicals Committee": ["Xenia", "Yusuf", "Zara"],
  "Finance Committee": ["Noah", "Olivia", "Paul"],
  "Developers Committee": ["Noah", "Olivia", "Paul", "Noah", "Olivia", "Paul"]
};

const MemberCard = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center">
    <PolaroidFrame>
      <img 
        src={LogoSilver} 
        className="w-32 h-32 md:w-40 md:h-40 object-contain" 
        alt={`${name}'s photo`} 
      />
    </PolaroidFrame>
    <p className="text-center mt-3 text-sm md:text-base">{name}</p>
  </div>
);

const CommitteeSection: React.FC<CommitteeSectionProps> = ({ title, members }) => (
  <div className="flex flex-col items-center text-white mt-0 w-full px-4">
    <h1 className="text-2xl md:text-3xl text-center font-heading-italic drop-shadow-2xl">
      {title}
    </h1>
    <div className="py-7 mx-auto max-w-7xl flex flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center">
      {members.map((name, index) => (
        <MemberCard key={index} name={name} />
      ))}
    </div>
  </div>
);

const CommitteesHeader = () => (
  <section
    className="p-20 sm:p-32 md:p-40 bg-cover bg-center relative"
    style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(150, 12, 12, 0.1), rgba(12, 12, 12, 0.8)), url(${CommitteeBg})`
    }}
  >
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left text-red-600 font-heading-italic drop-shadow-2xl">
      Committees
    </h1>
  </section>
);

const CommitteesContent = () => (
  <div className="bg-[#1d0b0b]">
    {Object.entries(committees).map(([title, members], index) => (
      <CommitteeSection key={index} title={title} members={members} />
    ))}
  </div>
);

const Committees = () => (
  <div className="bg-[#350c0c]">
    <CommitteesHeader />
    <CommitteesContent />
  </div>
);

export default Committees;