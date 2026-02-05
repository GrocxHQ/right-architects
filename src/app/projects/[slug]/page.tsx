import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

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
    <main className="bg-white">

      {/* MAIN GRID */}
      <section className="mx-auto max-w-[1600px] px-12 py-20 grid grid-cols-[1fr_420px] gap-16">

        {/* LEFT: IMAGE VIEWER */}
        <div>

          {/* Hero Image */}
          {project.mainImage?.asset && (
            <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
              <Image
                src={urlFor(project.mainImage).width(2000).height(1300).url()}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />

              {/* Arrows (visual only for now) */}
              <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl">
                ‹
              </button>
              <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl">
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
                    className="relative h-24 w-36 flex-shrink-0 bg-gray-100 overflow-hidden"
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
        <aside className="text-sm text-gray-600 leading-relaxed">

          <h1 className="font-serif text-2xl text-gray-900 mb-6">
            {project.title}
          </h1>

          <p className="uppercase tracking-widest text-gray-400 mb-4">
            Six Families – One Community
          </p>

          <div className="space-y-4">
            <p>
              Six residences come together along a shared cobble-paved path,
              binding aspirations while maintaining privacy and individuality.
            </p>

            <p>
              The design encourages community living while respecting each
              household’s unique identity through spatial sequencing and
              landscape buffers.
            </p>

            <p>
              Awarded Silver Leaf – IIA Kerala Awards (Unbuilt Category).
            </p>
          </div>

          <div className="mt-16 text-gray-400 uppercase tracking-widest text-xs">
            Next Project →
          </div>
        </aside>

      </section>

    </main>
  );
}
