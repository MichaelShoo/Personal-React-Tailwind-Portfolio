import { useState } from "react";

import { cn } from '@/lib/utils';

const skills = [
    //programming languages
    {name: "Python", level:95, category: "languages"},
    {name: "C", level:95, category: "languages"},
    {name: "C++", level:85, category: "languages"},
    {name: "HTML", level:75, category: "languages"},
    {name: "Javascript", level:70, category: "languages"},
    {name: "Assembly", level:70, category: "languages"},
    {name: "SQL", level:70, category: "languages"},
    {name: "Java", level:60, category: "languages"},

    //tools
    {name: "VS Code", level:85, category: "tools"},
    {name: "Git/Github", level:85, category: "tools"},
    {name: "ReactJS", level:80, category: "tools"},
    {name: "Virtual Machines", level:75, category: "tools"},
    {name: "OpenCV", level:75, category: "tools"},
    {name: "Pandas", level:70, category: "tools"},
    {name: "PySerial", level:70, category: "tools"},
    {name: "MongoDB", level:70, category: "tools"},
    {name: "FastAPI", level:70, category: "tools"},
    {name: "Flask", level:65, category: "tools"}
]

const categories = ["all", "languages", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mg-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-5 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory==category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
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
                        className="bg-card pd-6 rounded-lg shadow-xs card-hover" 
                    >
                        <div className="text-left mb-4 ">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: skill.level + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}% </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
}