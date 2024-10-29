import { projects as data } from "@/constants/projects";

import { useParams } from "react-router-dom";

const Project = () => {
  const { projectid } = useParams<{ projectid: string }>();

  const project = projectid ? data[projectid.toLowerCase()] : null;

  if (!project) {
    return (
      <div className="flex justify-center">
        <h1 className="text-5xl font-heading">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-24">
      <h1 className="text-5xl font-heading">{project?.title}</h1>
    </div>
  );
};

export default Project;
