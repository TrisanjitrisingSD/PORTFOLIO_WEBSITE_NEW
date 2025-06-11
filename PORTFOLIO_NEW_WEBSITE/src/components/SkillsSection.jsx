import { useState } from "react";
import { cn } from "@/lib/utils";

// Skill data with icon paths
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "/skills/html5.svg" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "/skills/javascript.svg" },
  { name: "React", level: 90, category: "frontend", icon: "/skills/react.svg" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "/skills/typescript.svg" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "/skills/tailwindcss.svg" },
  { name: "Next.js", level: 80, category: "frontend", icon: "/skills/nextdotjs.svg" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "/skills/nodedotjs.svg" },
  { name: "Express", level: 75, category: "backend", icon: "/skills/express.svg" },
  { name: "MongoDB", level: 70, category: "backend", icon: "/skills/mongodb.svg" },
  { name: "PostgreSQL", level: 65, category: "backend", icon: "/skills/postgresql.svg" },
  { name: "GraphQL", level: 60, category: "backend", icon: "/skills/graphql.svg" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "/skills/github.svg" },
  { name: "Docker", level: 70, category: "tools", icon: "/skills/docker.svg" },
  { name: "Figma", level: 85, category: "tools", icon: "/skills/figma.svg" },
  { name: "VS Code", level: 95, category: "tools", icon: "/skills/vscode.svg" },

  // AI/DS
  { name: "Python", level: 95, category: "ai-ds", icon: "/skills/python.svg" },
  { name: "Pandas", level: 90, category: "ai-ds", icon: "/skills/pandas.svg" },
  { name: "NumPy", level: 88, category: "ai-ds", icon: "/skills/numpy.svg" },
  { name: "Matplotlib/Seaborn", level: 85, category: "ai-ds", icon: "/skills/Matplotlib (1).svg" },
  { name: "Scikit-learn", level: 90, category: "ai-ds", icon: "/skills/scikitlearn.svg" },
  { name: "TensorFlow", level: 75, category: "ai-ds", icon: "/skills/tensorflow.svg" },
  { name: "PyTorch", level: 70, category: "ai-ds", icon: "/skills/pytorch.svg" },
  { name: "Jupyter Notebook", level: 92, category: "ai-ds", icon: "/skills/jupyter.svg" },
  { name: "SQL", level: 80, category: "ai-ds", icon: "/skills/postgresql.svg" },
  { name: "Google Colab", level: 88, category: "ai-ds", icon: "/skills/googlecolab.svg" },
];

const categories = ["all", "frontend", "backend", "tools", "ai-ds"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
