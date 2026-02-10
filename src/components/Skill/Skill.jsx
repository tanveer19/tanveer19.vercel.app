import { IoLogoJavascript } from "react-icons/io5";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

const SkillContent = [
  {
    icon: <IoLogoJavascript size={32} color="#F7DF1E" />,
    skillName: "JavaScript",
    delayAnimation: "0",
    color: "#F7DF1E",
  },
  {
    icon: <SiTypescript size={32} color="#3178C6" />,
    skillName: "TypeScript",
    delayAnimation: "100",
    color: "#3178C6",
  },
  {
    icon: <FaReact size={32} color="#61DAFB" />,
    skillName: "React",
    delayAnimation: "200",
    color: "#61DAFB",
  },
  {
    icon: <SiNextdotjs size={32} />,
    skillName: "Next.js",
    delayAnimation: "300",
    color: "#ffffff",
  },
  {
    icon: <FaNodeJs size={32} color="#339933" />,
    skillName: "Node.js",
    delayAnimation: "400",
    color: "#339933",
  },
  {
    icon: <SiExpress size={32} />,
    skillName: "Express",
    delayAnimation: "450",
    color: "#ffffff",
  },
  {
    icon: <FaHtml5 size={32} color="#E34F26" />,
    skillName: "HTML5",
    delayAnimation: "500",
    color: "#E34F26",
  },
  {
    icon: <FaCss3Alt size={32} color="#1572B6" />,
    skillName: "CSS3",
    delayAnimation: "600",
    color: "#1572B6",
  },
  {
    icon: <SiTailwindcss size={32} color="#06B6D4" />,
    skillName: "Tailwind CSS",
    delayAnimation: "700",
    color: "#06B6D4",
  },
  {
    icon: <DiMongodb size={32} color="#47A248" />,
    skillName: "MongoDB",
    delayAnimation: "800",
    color: "#47A248",
  },
  {
    icon: <DiPostgresql size={32} color="#4169E1" />,
    skillName: "PostgreSQL",
    delayAnimation: "900",
    color: "#4169E1",
  },
  {
    icon: <SiPrisma size={32} />,
    skillName: "Prisma",
    delayAnimation: "950",
    color: "#ffffff",
  },
  {
    icon: <SiFirebase size={32} color="#FFCA28" />,
    skillName: "Firebase",
    delayAnimation: "1000",
    color: "#FFCA28",
  },
  {
    icon: <FaGitAlt size={32} color="#F05032" />,
    skillName: "Git",
    delayAnimation: "1100",
    color: "#F05032",
  },
  {
    icon: <FaAws size={32} color="#FF9900" />,
    skillName: "AWS",
    delayAnimation: "1200",
    color: "#FF9900",
  },
];

const Skill = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {SkillContent.map((val, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div
            className="feature-box-02 flex flex-col items-center p-4 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-[var(--skill-color)] hover:shadow-[0_0_20px_var(--skill-color)] group"
            style={{ "--skill-color": val.color || "#ffffff" }}
          >
            <div className="icon mb-2 transition-transform duration-300 group-hover:scale-110">
              {val.icon}
            </div>
            <h6 className="text-sm text-center font-medium">{val.skillName}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
