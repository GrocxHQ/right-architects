import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Header from "@/components/Header";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  year: number;
  location: string;
  category: string;
  mainImage: any;
};

async function getProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(year desc) {
      _id,
      title,
      slug,
      year,
      location,
      category,
      mainImage
    }
  `);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-[#f3f3f3] text-black">

      {/* Header */}
      <Header />

      {/* Offset below navbar */}
      <div className="h-32 md:h-40" />

      {/* Grid container */}
      <section className="mx-auto max-w-[1800px] px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug.current}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">

                {/* Square image */}
                <div className="relative w-full aspect-square">
                  {project.mainImage?.asset && (
                    <Image
                      src={urlFor(project.mainImage)
                        .width(1000)
                        .height(1000)
                        .url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Bottom gradient overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />

                {/* Project title */}
                <div className="absolute bottom-5 left-6">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h2>
                </div>

              </div>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}