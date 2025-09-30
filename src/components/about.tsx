import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const mySkills = [
  {
    title: "Full-Stack Development",
    description:
      "Expertise in modern web technologies from frontend React/Next.js to backend Node.js and database design.",
  },
  {
    title: "Continuous Learning",
    description:
      "Always exploring new technologies and best practices to deliver cutting-edge solutions.",
  },
  {
    title: "Problem Solving",
    description:
      "Passionate about tackling complex challenges and creating elegant solutions for real-world problems.",
  },
  {
    title: "Collaboration Focus",
    description:
      "Strong communication skills with experience as a Teaching Assistant and team collaboration.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              Who I Am
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              My post-secondary educational journey began with a solid foundation in Computing Science at Simon Fraser University, followed by specialized training in a Web Development bootcamp at BrainStation. This formal education, combined with my professional experience as both a Web Development Teaching Assistant and Full-Stack Developer, has equipped me with a robust skill set in full-stack software development.
            </p>
            <br />
            <p>
              My goal is to leverage my technical knowledge and creative aptitude to develop web and software solutions that address real-world challenges. I am open to collaborating on new projects and engaging in opportunities that foster professional growth and innovation.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-50 object-cover aspect-[3/2] w-full"
            src="/images/retro-tech-graphic.png"
            alt="retro tech graphic"
            height="1024"
            width="1436"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {mySkills.map((skill, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
