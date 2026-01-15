import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaGitAlt } from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiFirebase, SiNextdotjs, SiExpress, SiPrisma } from "react-icons/si";

const SkillContent = [
  {
    icon: <IoLogoJavascript size={32} />,
    skillName: "JavaScript",
    delayAnimation: "0",
  },
  {
    icon: <SiTypescript size={32} />,
    skillName: "TypeScript",
    delayAnimation: "100",
  },
  {
    icon: <FaReact size={32} />,
    skillName: "React",
    delayAnimation: "200",
  },
  {
    icon: <SiNextdotjs size={32} />,
    skillName: "Next.js",
    delayAnimation: "300",
  },
  {
    icon: <FaNodeJs size={32} />,
    skillName: "Node.js",
    delayAnimation: "400",
  },
  {
    icon: <SiExpress size={32} />,
    skillName: "Express",
    delayAnimation: "450",
  },
  {
    icon: <FaHtml5 size={32} />,
    skillName: "HTML5",
    delayAnimation: "500",
  },
  {
    icon: <FaCss3Alt size={32} />,
    skillName: "CSS3",
    delayAnimation: "600",
  },
  {
    icon: <SiTailwindcss size={32} />,
    skillName: "Tailwind CSS",
    delayAnimation: "700",
  },
  {
    icon: <DiMongodb size={32} />,
    skillName: "MongoDB",
    delayAnimation: "800",
  },
  {
    icon: <DiPostgresql size={32} />,
    skillName: "PostgreSQL",
    delayAnimation: "900",
  },
  {
    icon: <SiPrisma size={32} />,
    skillName: "Prisma",
    delayAnimation: "950",
  },
  {
    icon: <SiFirebase size={32} />,
    skillName: "Firebase",
    delayAnimation: "1000",
  },
  {
    icon: <FaGitAlt size={32} />,
    skillName: "Git",
    delayAnimation: "1100",
  },
  {
    icon: <FaAws size={32} />,
    skillName: "AWS",
    delayAnimation: "1200",
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
          <div className="feature-box-02 flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="icon mb-2">{val.icon}</div>
            <h6 className="text-sm text-center">{val.skillName}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
