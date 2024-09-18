import AboutPage from "@/components/about/AboutPage";
import { getSortedProjectList } from "@/lib/projects";
import { Metadata } from "next";

const AboutMe = async () => {
    const projects = await getSortedProjectList();

    return (
        <section className="mx-auto mt-24 w-full justify-center max-w-[750px] px-4">
            <AboutPage projects={projects} />
        </section>
    );
};

export default AboutMe;
