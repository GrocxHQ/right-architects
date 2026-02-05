import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

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
    <main className="min-h-screen bg-white">

      {/* Header */}
      <header className="py-20 text-center">
        <h1 className="text-4xl font-serif tracking-tight text-gray-900">
          Projects
        </h1>
      </header>

      {/* Projects Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 pb-32 md:grid-cols-2">

        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug.current}`}
            className="group"
          >
            <div className="space-y-6">

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {project.mainImage?.asset && (
                    <Image
                        src={urlFor(project.mainImage).width(1200).height(900).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    )}
              </div>

              {/* Meta */}
              <div className="space-y-1">
                <h2 className="text-lg font-medium text-gray-900">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {project.location} · {project.year}
                </p>

                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {project.category}
                </p>
              </div>

            </div>
          </Link>
        ))}

      </section>

    </main>
  );
}
