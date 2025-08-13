import { ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Mood-Diary App",
        description: "Journal for tracking daily moods built using React for Front-End and MongoDB for storing data.",
        image: "/projects/project1.png",
        tags: ["ReactJS", "TailwindCSS", "FastAPI", "MongoDB"],
        demoUrl: "#",
    },
    {
        id: 2,
        title: "Poker Game Analyzer Tool",
        description: "Real time assistance poker analyzer tool. Identifies the board, your hand, and calculates your odds, equity, and optimal action.",
        image: "/projects/project2.png",
        tags: ["OpenCV", "MSS", "RT-Data-Processing", "Computer-Vision",],
        demoUrl: "#",
    },
    {
        id: 3,
        title: "Unbeatable Tic-Tac-Toe Bot",
        description: "Perfect-Play AI opponent created using the MiniMax algorithm and alpha-beta pruning. Click and play GUI using Tkinter.",
        image: "/projects/project3.png",
        tags: ["Python", "Tkinter", "OOP", "Game-AI", "DSA"],
        demoUrl: "#",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project draws inspiration from real-life experiences and my personal interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-hover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-3">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                        <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                > 
                                    <ExternalLink size={20}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}