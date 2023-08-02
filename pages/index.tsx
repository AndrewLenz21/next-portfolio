import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import type { GetStaticProps, NextPage } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home(props: Props)  {
  const { pageInfo, experiences, skills, projects, socials } = props;
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Andrew Lenz</title>
        <meta
          name="description"
          content="You can imagine it, you can programme it!"
        />
        {/* Puedes agregar más metadatos aquí si es necesario */}
      </Head>
      <Header socials={socials}/>
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>
      {/* Footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <a href="#hero">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://andrew-lenz.com/static/media/andrew1.b0a955bd84cf9fca00fb.jpg"
              alt="Andrew Lenz"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

/* Calling the Sanity Database */
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  }
}
