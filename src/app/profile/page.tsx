import Header from "@/components/Header";
import Image from "next/image";

/* ---------------- TEAM DATA ---------------- */

const team = [
  {
    name: "muhammed hisham",
    role: "it consultant",
    image: "/team/member1.jpg",
  },
  {
    name: "rinshad",
    role: "backend developer",
    image: "/team/member2.jpg",
  },
  {
    name: "chaithanya pk",
    role: "it consultant",
    image: "/team/member3.jpg",
  },
  {
    name: "krishna priya c",
    role: "human resource",
    image: "/team/member4.jpg",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">

      {/* Header */}
      <Header />

      {/* Top spacing */}
      <div className="h-32 md:h-40" />

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div className="space-y-6 lg:mt-16 xl:mt-20">

            <h1 className="text-xl md:text-3xl lg:text-3xl tracking-[0.18em] lg:tracking-[0.28em] font-semibold lowercase md:text-center lg:text-left md:mb-12 lg:mb-0">
  right architects
</h1>

<div className="space-y-4 text-[13px] md:text-sm leading-relaxed text-neutral-600 max-w-2xl md:max-w-none mx-auto md:px-6 lg:px-0 md:text-justify lg:text-left lg:mx-0 mt-8 md:mt-10">

  <p>
    Right – The Architecture, Interior, Softscape and the Furniture Store is a multidisciplinary design collective committed to delivering holistic and refined built environments. Our expertise spans architecture, interior design, landscape softscape, and curated Nilambur Teak wood furniture solutions, allowing us to offer a seamless and cohesive design experience.
  </p>

  <p>
    Driven by conceptual clarity and contextual awareness, we approach every project with precision, material sensitivity, and a deep understanding of spatial dynamics. Our integrated methodology ensures that structure, interior articulation, landscape elements, and furnishings align harmoniously.
  </p>

  <p>
    At Right, we believe design is not merely construction — it is the orchestration of space, emotion, and identity into environments that endure.
  </p>

</div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/hero/structure.png"
              alt="Right Architects studio"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-6 mt-24 pb-32">

        <div className="grid md:grid-cols-3 gap-16 text-center lg:text-left">

          {/* Service 1 */}
          <div className="space-y-4">

            <div className="flex justify-center lg:justify-start">
              <div className="w-10 h-10 border border-neutral-300 rounded-md flex items-center justify-center">
                ✏️
              </div>
            </div>

            <h3 className="lowercase tracking-[0.2em] text-xs font-semibold text-neutral-500">
              architecture
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Residential and architectural design focused on thoughtful
              spatial planning, contextual design, and lasting aesthetics.
            </p>

          </div>

          {/* Service 2 */}
          <div className="space-y-4">

            <div className="flex justify-center lg:justify-start">
              <div className="w-10 h-10 border border-neutral-300 rounded-md flex items-center justify-center">
                🧭
              </div>
            </div>

            <h3 className="lowercase tracking-[0.2em] text-xs font-semibold text-neutral-500">
              interiors & greenscape
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Interior design and landscape concepts that create balanced,
              functional environments with natural elements and spatial
              harmony.
            </p>

          </div>

          {/* Service 3 */}
          <div className="space-y-4">

            <div className="flex justify-center lg:justify-start">
              <div className="w-10 h-10 border border-neutral-300 rounded-md flex items-center justify-center">
                💡
              </div>
            </div>

            <h3 className="lowercase tracking-[0.2em] text-xs font-semibold text-neutral-500">
              furniture design
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Custom furniture and design pieces developed through our
              furniture brand <strong>@right.furnitures</strong>, blending
              craftsmanship with contemporary design.
            </p>

          </div>

        </div>

      </section>

      {/* ---------------- TEAM SECTION ---------------- */}

      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-6 pb-32">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-xs tracking-[0.25em] text-neutral-400 lowercase">
            our team
          </p>

          <h2 className="text-2xl md:text-3xl lowercase tracking-[0.18em] mt-2">
            meet the minds
          </h2>

        </div>

        {/* Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

          {team.map((member, index) => (
            <div
              key={index}
              className="min-w-[220px] md:min-w-[240px] snap-start"
            >

              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale"
                />

              </div>

              <div className="mt-4">

                <p className="text-sm lowercase text-neutral-800">
                  {member.name}
                </p>

                <p className="text-xs text-neutral-500 mt-1">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}