import { useState } from "react";
import { Project, projects } from "@/constants/projects";

import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "data_analytics", label: "DATA ANALYTICS" },
  { id: "health", label: "HEALTH" },
  { id: "nlp", label: "NLP" },
  { id: "computer_vision", label: "COMPUTER VISION" },
] as const;

type Category = (typeof CATEGORIES)[number]["id"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [displayProjects, setDisplayProjects] =
    useState<Record<string, Project>>(projects);

  const handleFilterChange = (category: Category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setDisplayProjects(projects);
      return;
    }

    const filtered = Object.fromEntries(
      Object.entries(projects).filter(
        ([_, project]) => project.category === category
      )
    );
    setDisplayProjects(filtered);
  };

  return (
    <div className="bg-[#110101] min-h-screen">
      <section className="flex flex-col justify-center items-center py-8">
        <h1 className="text-4xl md:text-6xl text-left text-red-600 font-heading-italic">
          Projects Collection
        </h1>
      </section>

      <section className="flex flex-col items-center gap-4 px-4">
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleFilterChange(id)}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base 
                ${selectedCategory === id ? "text-red-600" : "text-white"}
                hover:text-red-600 transition-colors font-subheading whitespace-nowrap`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="w-full h-[1px] bg-red-600" />
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {Object.entries(displayProjects).map(([key, project]) => (
            <div
              key={key}
              className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] relative group cursor-pointer"
            >
              <div className="bg-red-950/20 p-4 rounded-lg border border-red-800/30 transition-all duration-300 hover:border-red-600 hover:scale-[1.02] h-[650px] flex flex-col">
                <div className="h-[500px] mb-3">
                  <img
                    src={`/img/posters/${project.groupid}-poster.jpg`}
                    alt={`${project.title} poster`}
                    className="w-full h-full object-cover rounded shadow-lg"
                    loading="lazy"
                  />
                </div>

                <div className="px-2 flex-1">
                  <h3 className="text-red-600 font-bold text-lg mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-3">
                    {project.research_title}
                  </p>
                </div>

                <Link to={`/projects/${key}`}>
                  <div className="absolute inset-4 bg-black/90 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold text-red-600 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4">
                        {project.research_title}
                      </p>
                      <div className="text-xs text-gray-400">
                        <p className="mb-2">
                          <span className="text-red-600 font-semibold">
                            Group:
                          </span>{" "}
                          {project.group}
                        </p>
                        {project.tags && (
                          <>
                            <p className="mb-1">
                              <span className="text-red-600 font-semibold">
                                Members:
                              </span>
                              <br />
                              {project.tags.members.join(", ")}
                            </p>
                            <p className="mb-1">
                              <span className="text-red-600 font-semibold">
                                Mentor:
                              </span>
                              <br />
                              {project.tags.mentor.join(", ")}
                            </p>
                            <p>
                              <span className="text-red-600 font-semibold">
                                Concepts:
                              </span>
                              <br />
                              {project.tags.concepts.join(", ")}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
