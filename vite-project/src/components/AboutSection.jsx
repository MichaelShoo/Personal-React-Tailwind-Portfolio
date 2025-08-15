import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";

const RESUME_FILE = "Michael_Xu_Resume.pdf";
const RESUME_URL = `${import.meta.env.BASE_URL}${RESUME_FILE}`;

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer that is Eager to Learn
            </h3>

            <p className="text-muted-foreground">
              As a computer science student at the University of California Santa Cruz, I have explored a wide range of areas in both my studies
              and my free time including front-end and back-end development, data visualization, cybersecurity, and machine learning.
            </p>

            <p className="text-muted-foreground">
              I strive to become an exceptional problem solver—capable of tackling complex challenges with both efficiency and depth. Driven by curiosity,
              I'm always learning new tools and techniques to keep pace with the rapidly evolving landscape of computer science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              {/* This button downloads the PDF from /public */}
              <a
                href="/Michael_Xu_Resume.pdf"
                download
                type="application/pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Download my resume as PDF"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-End/Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating/Updating responsive websites and web applications for cleaner efficiency and visual appeal.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Back-End Development</h4>
                  <p className="text-muted-foreground">
                    Problem solving using efficient algorithms and data structures to maximize effectiveness of programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading and collaborating on projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
