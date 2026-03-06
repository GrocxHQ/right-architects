import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

type Project = {
  title: string;
  year?: number;
  location?: string;
  category?: string;
  description?: string;
  mainImage?: any;
  gallery?: any[];
};

async function getProject(slug: string): Promise<Project | null> {
  if (!slug) return null;

  return client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      title,
      year,
      location,
      category,
      description,
      mainImage,
      gallery
    }
    `,
    { slug }
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const images = [
    project.mainImage,
    ...(project.gallery || []),
  ].filter((img) => img?.asset);

  return (
    <main className="min-h-screen bg-white text-neutral-800">

      {/* Back button */}
      <div className="px-8 pt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs lowercase tracking-[0.12em] px-5 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition"
        >
          ← back
        </Link>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 pb-32">

        {/* Meta */}
        <div className="flex justify-center gap-6 text-xs text-neutral-500 mt-8 mb-2 lowercase tracking-[0.12em]">
          {project.year && <span>{project.year}</span>}
          {project.location && <span>{project.location}</span>}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-12 lowercase tracking-[0.05em] text-neutral-900">
          {project.title}
        </h1>

        {/* Images + Description */}
        <div className="space-y-14">

          {images.map((image, index) => (
            <div key={index}>

              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[20px] bg-neutral-100">
                <Image
                  src={urlFor(image).width(2200).height(1400).url()}
                  alt={`${project.title} image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description under first image */}
              {index === 0 && project.description && (
                <p className="mt-6 text-sm leading-relaxed text-neutral-600 w-full text-center md:text-left">
                  {project.description}
                </p>
              )}

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}