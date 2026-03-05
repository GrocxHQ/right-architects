import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import Header from "@/components/Header";

type Project = {
  title: string;
  year?: number;
  location?: string;
  category?: string;
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

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Global Navigation */}
      <Header />

      {/* Offset from navbar */}
      <div className="h-32 md:h-40" />

      {/* MAIN GRID */}
      <section className="mx-auto max-w-[1600px] px-8 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">

        {/* LEFT: IMAGE VIEWER */}
        <div>

          {/* Hero Image */}
          {project.mainImage?.asset && (
            <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
              <Image
                src={urlFor(project.mainImage).width(2000).height(1300).url()}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />

              {/* Arrows (visual only for now) */}
              <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 text-3xl">
                ‹
              </button>
              <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 text-3xl">
                ›
              </button>
            </div>
          )}

          {/* Thumbnails */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
              {project.gallery
                .filter((img) => img?.asset)
                .map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 w-36 flex-shrink-0 bg-neutral-900 overflow-hidden"
                  >
                    <Image
                      src={urlFor(image).width(400).height(300).url()}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* RIGHT: PROJECT INFO */}
        <aside className="text-sm text-neutral-400 leading-relaxed">

          <h1 className="font-serif text-2xl text-neutral-100 mb-6">
            {project.title}
          </h1>

          <p className="uppercase tracking-widest text-neutral-500 mb-4">
            {project.category}
          </p>

          <div className="space-y-4">
            {project.location && (
              <p>
                {project.location}
              </p>
            )}

            {project.year && (
              <p>
                {project.year}
              </p>
            )}
          </div>

          <div className="mt-16 text-neutral-500 uppercase tracking-widest text-xs">
            Next Project →
          </div>
        </aside>

      </section>

    </main>
  );
}
