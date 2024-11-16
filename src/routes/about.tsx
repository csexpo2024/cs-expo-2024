import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

import MainPoster from "@/assets/img/main-poster.png";
import CautionTape from "@/assets/img/caution-tape-blank-hr.png";
import CautionTapeGroup from "@/assets/img/caution-tape-shadowed.png";

import AgathaLogo from "@/assets/img/team-logo/agatha-logo.png";
import LMNTRXLogo from "@/assets/img/team-logo/lmntrx-logo.png";
import StrawhatsLogo from "@/assets/img/team-logo/strawhats-logo.png";
import CodeGeassLogo from "@/assets/img/team-logo/codegeass-logo.png";
import HurtzLogo from "@/assets/img/team-logo/hurtz-logo.jpg";
import LoremIpsumLogo from "@/assets/img/team-logo/loremipsum-logo.png";
import SamsanLogo from "@/assets/img/team-logo/samsan-logo.png";
import CodexLogo from "@/assets/img/team-logo/codex-logo.png";
import CtrlAltDeleteLogo from "@/assets/img/team-logo/ctrlaltdelete-logo.png";
import EnSysLogo from "@/assets/img/team-logo/ensys-logo.png";
import JathrosMatrixLogo from "@/assets/img/team-logo/jathrosmatrix-logo.png";
import LMDIFYLogo from "@/assets/img/team-logo/lmdify-logo.png";
import AlgoriteamLogo from "@/assets/img/team-logo/algoriteam-logo.png";
import CodeLogo from "@/assets/img/team-logo/code-logo.png";
import CSGOLogo from "@/assets/img/team-logo/csgo-logo.png";
import GiggaLogo from "@/assets/img/team-logo/gigga-logo.png";
import HUILogo from "@/assets/img/team-logo/hui-logo.png";
import IntelliWatchLogo from "@/assets/img/team-logo/intelliwatch-logo.png";
import JLNNLogo from "@/assets/img/team-logo/jlnn-logo.png";
import LambdaLogo from "@/assets/img/team-logo/lambda-logo.jpg";
import PnPLogo from "@/assets/img/team-logo/pnp-logo.png";
import ThetaLogo from "@/assets/img/team-logo/theta-logo.png";

interface Team {
  name: string;
  logo: string;
}

interface Student {
  committee: string;
  photo?: string;
  name: string;
  surname: string;
  position?: string;
}

interface Faculty {
  photo?: string;
  name: string;
  surname: string;
  position: string;
}

const About = () => {
  const team = [
    { id: "agila", name: "Agatha", logo: AgathaLogo },
    { id: "visual-sql", name: "LMNTRX", logo: LMNTRXLogo },
    { id: "smish-x", name: "Strawhats", logo: StrawhatsLogo },
    { id: "onics", name: "Hurtz", logo: HurtzLogo },
    { id: "carident", name: "Code Geass", logo: CodeGeassLogo },
    { id: "meowtion", name: "Algoriteam", logo: AlgoriteamLogo },
    { id: "etbx", name: "Lorem Ipsum", logo: LoremIpsumLogo },
    { id: "pnp", name: "PnP", logo: PnPLogo },
    { id: "elixir", name: "HUI", logo: HUILogo },
    { id: "smart-tasks", name: "LMDIFY", logo: LMDIFYLogo },
    { id: "tala", name: "Codex", logo: CodexLogo },
    { id: "ultrascan", name: "Samsan", logo: SamsanLogo },
    { id: "theta", name: "Theta", logo: ThetaLogo },
    { id: "marikit", name: "JLNN", logo: JLNNLogo },
    { id: "smarteyes", name: "Gigga", logo: GiggaLogo },
    { id: "mimical", name: "Ctrl Alt Delete", logo: CtrlAltDeleteLogo },
    { id: "ensys-chat", name: "EnSys", logo: EnSysLogo },
    { id: "csgo", name: "CSGO", logo: CSGOLogo },
    { id: "book-i", name: "Jathro's Matrix", logo: JathrosMatrixLogo },
    { id: "intelliwatch", name: "IntelliWatch", logo: IntelliWatchLogo },
    { id: "lambda", name: "Lambda", logo: LambdaLogo },
    { id: "fit-vision", name: "Code", logo: CodeLogo },
  ];
  const student = [
    {
      committee: "Project Manager",
      name: "Jericho Menguito",
      surname: "Menguito",
      position: "Project Head",
    },

    {
      committee: "Externals Committee",
      name: "Daf C. Dolot",
      surname: "Dolot",
      position: "Externals Co-Head",
    },
    {
      committee: "Externals Committee",
      name: "Jonner Villapando",
      surname: "Villapando",
      position: "Externals Co-Head",
    },
    {
      committee: "Externals Committee",
      name: "Ma. Angelene C. Cudiamat",
      surname: "Cudiamat",
      position: "External - Speakership",
    },
    {
      committee: "Externals Committee",
      name: "Giro B. Manzano",
      surname: "Manzano",
      position: "External - Partnership",
    },
    {
      committee: "Externals Committee",
      name: "Carl Santiago",
      surname: "Santiago",
      position: "External - Sponsorship",
    },

    {
      committee: "Internals Committee",
      name: "Ella Belle Wong",
      surname: "Wong",
      position: "Internal Head",
    },
    {
      committee: "Internals Committee",
      name: "Gabriel Abiog",
      surname: "Abiog",
    },
    {
      committee: "Internals Committee",
      name: "Johnrey Aguillon",
      surname: "Aguillon",
    },
    {
      committee: "Internals Committee",
      name: "Samuel Pacheco",
      surname: "Pacheco",
    },
    {
      committee: "Internals Committee",
      name: "Joshua Pineda",
      surname: "Pineda",
    },

    {
      committee: "Documentations Committee",
      name: "Gregorio Lantajo",
      surname: "Lantajo",
      position: "Documentations Co-Head",
    },
    {
      committee: "Documentations Committee",
      name: "Zuphia Rosal",
      surname: "Rosal",
      position: "Documentations Co-Head",
    },
    {
      committee: "Documentations Committee",
      name: "Earl Rodney Escario",
      surname: "Escario",
    },
    {
      committee: "Documentations Committee",
      name: "Albert Dominic M. Guiang",
      surname: "Guiang",
    },
    {
      committee: "Documentations Committee",
      name: "Neal Tracy Jestingor",
      surname: "Jestingor",
    },
    {
      committee: "Documentations Committee",
      name: "Eymard Julian S. Jimeno",
      surname: "Jimeno",
    },
    {
      committee: "Documentations Committee",
      name: "Marie Kristela Frances A. Monje",
      surname: "Monje",
    },
    {
      committee: "Documentations Committee",
      name: "Moira Gabrielle L. Radam",
      surname: "Radam",
    },
    {
      committee: "Documentations Committee",
      name: "Caila Jenine O. Ruado",
      surname: "Ruado",
    },
    {
      committee: "Documentations Committee",
      name: "Cyfer Nikolai Supleo",
      surname: "Supleo",
    },

    {
      committee: "Finance Committee",
      name: "Jasmine L. Camasura",
      surname: "Camasura",
      position: "Finance Head",
    },
    {
      committee: "Finance Committee",
      name: "Kyla Beatrice R. Buenaobra",
      surname: "Buenaobra",
    },
    {
      committee: "Finance Committee",
      name: "Jasper Rodriguez",
      surname: "Rodriguez",
    },

    {
      committee: "Programs Committee",
      name: "Cyra Shane Perez",
      surname: "Perez",
      position: "Programs Head",
    },
    {
      committee: "Programs Committee",
      name: "Lance Benedict Feticio",
      surname: "Feticio",
    },
    {
      committee: "Programs Committee",
      name: "Noah Paolo Macaldo",
      surname: "Macaldo",
    },
    {
      committee: "Programs Committee",
      name: "Noel Angelo Potenciano",
      surname: "Potenciano",
    },
    {
      committee: "Programs Committee",
      name: "Daniel Jude Seno",
      surname: "Seno",
    },
    {
      committee: "Programs Committee",
      name: "Rylan Torres",
      surname: "Torres",
    },

    {
      committee: "Marketing Committee",
      name: "Eddie Longcop",
      surname: "Longcop",
      position: "Marketing Co-Head",
    },
    {
      committee: "Marketing Committee",
      name: "Arjen Catherine Molina",
      surname: "Molina",
      position: "Marketing Co-Head",
    },
    {
      committee: "Marketing Committee",
      name: "Clarisse Bajaro",
      surname: "Bajaro",
      position: "Media Head",
    },
    {
      committee: "Marketing Committee",
      name: "Francis Chuegan",
      surname: "Chuegan",
      position: "Creatives Head",
    },
    {
      committee: "Marketing Committee",
      name: "Janna Rane Rosendo",
      surname: "Rosendo",
      position: "Publications Head",
    },
    {
      committee: "Marketing Committee",
      name: "Emmanuel John T. Atun",
      surname: "Atun",
    },
    {
      committee: "Marketing Committee",
      name: "Christian Philip H. Bada",
      surname: "Bada",
    },
    {
      committee: "Marketing Committee",
      name: "Justin Matthew C. Bulot",
      surname: "Bulot",
    },
    {
      committee: "Marketing Committee",
      name: "Crezza Mae O. Del Puerto",
      surname: "Del Puerto",
    },
    {
      committee: "Marketing Committee",
      name: "Audi Enrico L. Dimla",
      surname: "Dimla",
    },
    {
      committee: "Marketing Committee",
      name: "Reuben Ebina",
      surname: "Ebina",
    },
    {
      committee: "Marketing Committee",
      name: "Juan Carlos Francisco",
      surname: "Francisco",
    },
    {
      committee: "Marketing Committee",
      name: "David Roy G. Majarais",
      surname: "Majarais",
    },
    {
      committee: "Marketing Committee",
      name: "Ruzzel Mary T. Miraflor",
      surname: "Miraflor",
    },
    {
      committee: "Marketing Committee",
      name: "John Gabriel T. Pagtalunan",
      surname: "Pagtalunan",
    },
    {
      committee: "Marketing Committee",
      name: "Ana Mary Colin A. Rasonable",
      surname: "Rasonable",
    },
    {
      committee: "Marketing Committee",
      name: "Kassandra Beatriz B. Rayray",
      surname: "Rayray",
    },
    {
      committee: "Marketing Committee",
      name: "Albert Kobe C. Serrano",
      surname: "Serrano",
    },
    {
      committee: "Marketing Committee",
      name: "John Benedict Signo",
      surname: "Signo",
    },
    {
      committee: "Marketing Committee",
      name: "Kayla Denise Umali",
      surname: "Umali",
    },
    {
      committee: "Marketing Committee",
      name: "Shahani Vicio",
      surname: "Vicio",
    },

    {
      committee: "Technicals Committee",
      name: "Ywan Scazi D.C. Galura",
      surname: "Galura",
      position: "Technicals Head",
    },
    {
      committee: "Technicals Committee",
      name: "Janry Enrique Limpin",
      surname: "Limpin",
    },
    {
      committee: "Technicals Committee",
      name: "Alexander D. Mendoza",
      surname: "Mendoza",
    },

    {
      committee: "Logistics Committee",
      name: "Sean Archer Cruz",
      surname: "Cruz",
      position: "Logistics Co-Head",
    },
    {
      committee: "Logistics Committee",
      name: "Isaiah Ezekiel Guevarra",
      surname: "Gueverra",
      position: "Logistics Co-Head",
    },
    {
      committee: "Logistics Committee",
      name: "Laurenz Aeron Lhynt Anicieto",
      surname: "Ancieto",
    },
    {
      committee: "Logistics Committee",
      name: "Carlo Jan Harry S. Añonuevo",
      surname: "Añonuevo",
    },
    {
      committee: "Logistics Committee",
      name: "Christian Jay Borja",
      surname: "Borja",
    },
    {
      committee: "Logistics Committee",
      name: "Charles Adrian M. Cabontocan",
      surname: "Cabontocan",
    },
    {
      committee: "Logistics Committee",
      name: "John Alvin Cruz",
      surname: "Cruz",
    },
    {
      committee: "Logistics Committee",
      name: "Rheiel John Del Rosario",
      surname: "Del Rosario",
    },
    {
      committee: "Logistics Committee",
      name: "Luis Miguel Dela Cruz",
      surname: "Dela Cruz",
    },
    {
      committee: "Logistics Committee",
      name: "Mar-con Prince Owen Difuntorum",
      surname: "Difuntorum",
    },
    {
      committee: "Logistics Committee",
      name: "Jhon Carlo Facto",
      surname: "Facto",
    },
    {
      committee: "Logistics Committee",
      name: "Amir Gaaloul",
      surname: "Gaaloul",
    },
    {
      committee: "Logistics Committee",
      name: "Paul Gernale",
      surname: "Gernale",
    },
    {
      committee: "Logistics Committee",
      name: "Ramandeep Kingra",
      surname: "Kingra",
    },
    {
      committee: "Logistics Committee",
      name: "Reannah Lobaton",
      surname: "Lobaton",
    },
    {
      committee: "Logistics Committee",
      name: "Henrick Brian M. Nadonga",
      surname: "Nadonga",
    },
    {
      committee: "Logistics Committee",
      name: "Glen Daniell F. Raymundo",
      surname: "Raymundo",
    },
    {
      committee: "Logistics Committee",
      name: "Jethro Emmanuel C. Roxas",
      surname: "Roxas",
    },
    {
      committee: "Logistics Committee",
      name: "Venz Salvatierra",
      surname: "Salvatierra",
    },
    {
      committee: "Logistics Committee",
      name: "Ian Angelo Simbulan",
      surname: "Simbulan",
    },
    {
      committee: "Logistics Committee",
      name: "Eleazar El Tan",
      surname: "Tan",
    },
    {
      committee: "Logistics Committee",
      name: "Dickson Vecina",
      surname: "Vecina",
    },

    {
      committee: "Developers Committee",
      name: "Kendric M. Ordoñez",
      surname: "Ordonez",
      position: "Developers Head",
    },
    {
      committee: "Developers Committee",
      name: "Victoria Faye M. Babasa",
      surname: "Babasa",
    },
    {
      committee: "Developers Committee",
      name: "Jasmine L. Camasura",
      surname: "Camasura",
    },
    {
      committee: "Developers Committee",
      name: "Seth Gruspe",
      surname: "Gruspe",
    },
    {
      committee: "Developers Committee",
      name: "Geryko Luis M. Manarang",
      surname: "Manarang",
    },
    {
      committee: "Developers Committee",
      name: "Adriane Gil S. Roa",
      surname: "Roa",
    },
  ];

  const faculty = [
    {
      name: "Shaneth C. Ambat, PhD",
      position: "Program Director",
      surname: "Ambat",
    },
    {
      name: "Angelo C. Arguson, DIT",
      position: "CS Faculty Member",
      surname: "Arguson",
    },
    {
      name: "Anthony D. Aquino",
      position: "CS Faculty Member",
      surname: "Aquino",
    },
    {
      name: "Reginald S. Cheng",
      position: "CS Faculty Member",
      surname: "Cheng",
    },
    {
      name: "Beau Gray M. Habal, DIT",
      position: "CS Faculty Member",
      surname: "Habal",
    },
    {
      name: "Abraham T. Magpantay",
      position: "CS Faculty Member",
      surname: "Magpantay",
    },
    {
      name: "Elisa V. Malasaga",
      position: "CS Faculty Member",
      surname: "Malasaga",
    },
    {
      name: "May Florence D. San Pablo",
      position: "CS Faculty Member",
      surname: "San Pablo",
    },
    {
      name: "Justine Jude C. Pura",
      position: "CS Faculty Member",
      surname: "Pura",
    },
    {
      name: "Jennefer A. Sabonsolin",
      position: "CS Faculty Member",
      surname: "Sabonsolin",
    },
    {
      name: "Hadji J. Tejuco, DIT",
      position: "CS Faculty Member",
      surname: "Tejuco",
    },
  ];

  // Group students by committee and categorize by position
  const committees: {
    [key: string]: {
      coHead: Student[];
      head: Student[];
      others: Student[];
      noPosition: Student[];
    };
  } = student.reduce((acc, curr) => {
    const committee = curr.committee || "Project Head";
    if (!acc[committee]) {
      acc[committee] = { coHead: [], head: [], others: [], noPosition: [] };
    }
    const position = curr.position?.toLowerCase().replace(/\s+/g, "");
    if (position?.includes("co-head")) {
      acc[committee].coHead.push(curr);
    } else if (position?.includes("head")) {
      acc[committee].head.push(curr);
    } else if (curr.position) {
      acc[committee].others.push(curr);
    } else {
      acc[committee].noPosition.push(curr);
    }
    return acc;
  }, {} as { [key: string]: { coHead: Student[]; head: Student[]; others: Student[]; noPosition: Student[] } });

  const committeeNames = Object.keys(committees);
  const [currentCommitteeIndex, setCurrentCommitteeIndex] = useState(0);

  const nextCommittee = () => {
    setCurrentCommitteeIndex(
      (prevIndex) => (prevIndex + 1) % committeeNames.length
    );
  };

  const prevCommittee = () => {
    setCurrentCommitteeIndex(
      (prevIndex) =>
        (prevIndex - 1 + committeeNames.length) % committeeNames.length
    );
  };

  const handlersCommittee = useSwipeable({
    onSwipedLeft: nextCommittee,
    onSwipedRight: prevCommittee,
    trackMouse: true,
  });

  const [currentFacultyIndex, setCurrentFacultyIndex] = useState(0);

  const nextFaculty = () => {
    setCurrentFacultyIndex((prevIndex) => (prevIndex + 1) % faculty.length);
  };

  const prevFaculty = () => {
    setCurrentFacultyIndex(
      (prevIndex) => (prevIndex - 1 + faculty.length) % faculty.length
    );
  };

  const handlersFaculty = useSwipeable({
    onSwipedLeft: nextFaculty,
    onSwipedRight: prevFaculty,
    trackMouse: true,
  });

  return (
    <div className="bg-[#110101]">
      {/* About Section */}
      <section className="fade-backdrop flex flex-col md:flex-row justify-center items-center box-pattern px-24 py-18 text-center">
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:mr-10">
          <img src={MainPoster} alt="Main Poster" className="h-full" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-heading-italic mb-4">
            About CS Expo 2024
          </h1>
          <span className="text-yellow-500 text-[1.25rem]">
            <strong>
              <em>CS Expo 2024</em>
            </strong>{" "}
            is the annual capstone event for the fourth-year students of FEU
            Institute of Technology. This three-day assembly is a platform for
            trailblazing thesis projects and their implications in the
            ever-evolving technology. With the tagline{" "}
            <strong>
              <em>"Unveiling New Possibilities and Creating New Realities,"</em>
            </strong>{" "}
            students involved in this event are not seeking to maintain the
            status quo but to challenge it with new technologies and novel
            approaches.
            <br />
            <br />
            To create a medium for healthy discourse in technology, CS Expo will
            kick off with the first day of the culmination of the two-day
            presentation of thesis projects. Set on{" "}
            <strong>
              <em>November 19 and 20, 2024</em>
            </strong>
            . The students will showcase their developed applications to a group
            of panelists of internal faculty members and seasoned industry
            professionals.
            <br />
            <br />
            After the presentation, deserving thesis groups and students will
            receive an award for their innovation and research prowess on the
            last day of the event,{" "}
            <strong>
              <em>DevDay</em>
            </strong>
            . A symposium highlighting the current state of computer science.
            This event is scheduled on{" "}
            <strong>
              <em>November 22, 2024</em>
            </strong>
            , and will feature talks from prominent industry professionals about
            software re-engineering and software packaging, addressing modern
            development challenges and optimizing legacy systems through
            re-engineering for better performance and maintainability, while
            also exploring efficient software packaging practices for seamless
            deployment across diverse environments.{" "}
            <strong>
              <em>DevDay 2024</em>
            </strong>{" "}
            aims to bridge academic excellence with real-world industry
            insights.
          </span>
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden -rotate-1 mt-10">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden -rotate-180 mt-10">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      {/* The Visionary Teams */}
      <section id="teams" className="text-center box-pattern py-20">
        <h2 className="font-heading text-3xl sm:text-5xl">
          The Visionary Teams
        </h2>
        <span className="text-yellow-500 text-xl sm:text-3xl uppercase">
          22 Bold Ideas, One Shared Vision
        </span>
        <div className="mt-20 px-10 columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 max-w-7xl mx-auto">
          {team.map((group, i) => (
            <Link to={`/projects/${group.id}`}>
              <div key={i} className="avoid-break">
                <TeamCard team={group} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-1">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-180 mt-10">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      {/* Organizing Committees */}
      <section id="committees" className="text-center py-0">
        <div className="bg-[#110101] min-h-screen flex flex-col items-center justify-center box-pattern p-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl mb-2 mt-20 text-white"
          >
            Organizing Committees
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-yellow-500 text-3xl uppercase block mb-20"
          >
            The Pillars of CS Expo 2024
          </motion.span>
          <div
            className="relative w-full max-w-7xl mb-10 bg-[#110101] rounded-lg shadow-lg overflow-hidden flex justify-center"
            {...handlersCommittee}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCommitteeIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative p-8"
              >
                <h3 className="text-4xl font-bold text-white uppercase mb-6">
                  {committeeNames[currentCommitteeIndex]}
                </h3>
                <div className="grid grid-cols-2 sd:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                  {committees[committeeNames[currentCommitteeIndex]].coHead
                    .length > 0 && (
                    <>
                      {committees[
                        committeeNames[currentCommitteeIndex]
                      ].coHead.map((student: Student, index: number) => (
                        <StudentCard key={index} student={student} />
                      ))}
                      <div className="col-span-full"></div>
                    </>
                  )}
                  {committees[committeeNames[currentCommitteeIndex]].head
                    .length > 0 && (
                    <>
                      {committees[
                        committeeNames[currentCommitteeIndex]
                      ].head.map((student: Student, index: number) => (
                        <StudentCard key={index} student={student} />
                      ))}
                      <div className="col-span-full"></div>
                    </>
                  )}
                  {committees[committeeNames[currentCommitteeIndex]].others
                    .length > 0 && (
                    <>
                      {committees[
                        committeeNames[currentCommitteeIndex]
                      ].others.map((student: Student, index: number) => (
                        <StudentCard key={index} student={student} />
                      ))}
                      <div className="col-span-full"></div>
                    </>
                  )}
                  {committees[committeeNames[currentCommitteeIndex]].noPosition
                    .length > 0 && (
                    <>
                      {committees[
                        committeeNames[currentCommitteeIndex]
                      ].noPosition.map((student: Student, index: number) => (
                        <StudentCard key={index} student={student} />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevCommittee}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full z-10"
              aria-label="Previous committee"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextCommittee}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full z-10"
              aria-label="Next committee"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-180">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-1 mt-10">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      {/* Faculty */}
      <section id="faculty" className="text-center py-0">
        <div className="bg-[#110101] min-h-screen flex flex-col items-center justify-center box-pattern p-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-5xl mb-2 mt-20 text-white"
          >
            Faculty Members
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-yellow-500 text-3xl uppercase block mb-20"
          >
            Computer Science Department
          </motion.span>
          <div
            className="relative w-full max-w-7xl mb-10 bg-[#110101] rounded-lg shadow-lg overflow-hidden flex justify-center"
            {...handlersFaculty}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFacultyIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative p-8"
              >
                <div className="flex justify-center items-center">
                  <FacultyCard faculty={faculty[currentFacultyIndex]} />
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevFaculty}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full z-10"
              aria-label="Previous faculty"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextFaculty}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full z-10"
              aria-label="Next faculty"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </section>
      <section>
        {/* Caution Tape Divider */}
        <div className="flex h-10 p-0 justify-center items-center overflow-hidden pointer-events-none -rotate-180">
          <img
            src={CautionTape}
            alt="Caution Tape"
            className="w-auto m-0 p-0"
          />
        </div>
      </section>
      {/* Caution Tape Footer */}
      <div className="h-72 box-pattern overflow-hidden">
        <img
          src={CautionTapeGroup}
          alt="Caution Tape"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const TeamCard = ({ team }: { team: Team }) => {
  return (
    <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }}>
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-4 my-4 hover:border-red-600 hover:border-2">
        <div className="relative flex justify-center">
          <img
            rel="preload"
            src={`/img/team/${sanitizeName(team.name)}.jpg`}
            alt={team.name}
            className="w-50 h-auto rounded-lg"
          />
        </div>
        <div className="pt-3">
          <div className="relative flex justify-center items-center">
            <p className="font-heading-italic text-lg pb-2 uppercase relative z-10 [text-shadow:_0_4px_5px_rgba(0,0,0,0.95)]">
              {team.name}
            </p>
            <img
              src={team.logo}
              alt="Team Logo"
              className="absolute right-15 w-15 h-12 object-cover opacity-70"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StudentCard = ({ student }: { student: Student }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="bg-transparent rounded-lg shadow-lg p-4 my-4">
        <div className="flex justify-center">
          <img
            src={`/img/people/${sanitizeName(student.surname)}.jpg`}
            alt={student.surname}
            className="w-40"
          />
        </div>
        <div className="pt-3 text-center">
          <p className="font-heading-italic text-lg pb-1 text-white uppercase text-center">
            {student.name}
          </p>
          {student.position && (
            <p className="text-sm text-yellow-500 uppercase text-center">
              {student.position}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FacultyCard = ({ faculty }: { faculty: Faculty }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg p-4 my-4">
        <div className="flex justify-center">
          <img
            src={`/img/faculty/${sanitizeName(faculty.surname)}.jpg`}
            alt={faculty.surname}
            className="w-40"
          />
        </div>
        <div className="pt-3 text-center">
          <p className="font-heading-italic text-lg pb-1 text-white uppercase text-center">
            {faculty.name}
          </p>
          {faculty.position && (
            <p className="text-sm text-yellow-500 uppercase text-center">
              {faculty.position}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const sanitizeName = (name: string) => {
  return name.toLowerCase().replace(/[\s']/g, "");
};

export default About;
