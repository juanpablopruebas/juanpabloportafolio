import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";

const projects = [
  {
    id: 1,
    title: "Learn System Management",
    description: "An interactive system management tool for learning purposes.",
    imageUrl: "images/project1.png",
    github: "https://github.com/juanpablopruebas/ELearning-Frontend",
    live: "https://e-learning-frontend-delta-bay.vercel.app/",
  },
  {
    id: 2,
    title: "Reddit App Clone",
    description:
      "A clone of Reddit with user authentication and post management.",
    imageUrl: "images/project2.png",
    github: "https://github.com/juanpablopruebas/reddit-app-clone",
    live: "https://reddit-app-clone.vercel.app/",
  },
  {
    id: 3,
    title: "Gifs App",
    description: "A GIF search application using the Giphy API.",
    imageUrl: "images/project3.png",
    github: "https://github.com/juanpablovj09/PruebaGifs",
    live: "https://prueba-gifs.vercel.app/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 text-gray-100">
      <Head>
        <title>Frontend Developer Portfolio</title>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
