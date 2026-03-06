import Header from "@/components/Header";
import Image from "next/image";

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

            <h1 className="text-3xl md:text-4xl lg:text-4xl tracking-[0.18em] lg:tracking-[0.28em] font-semibold lowercase md:text-center lg:text-left md:mb-15 lg:mb-0">
              right architects
            </h1>

            <div className="space-y-4 text-sm leading-relaxed text-neutral-600 max-w-2xl md:max-w-none mx-auto md:px-6 lg:px-0 md:text-justify lg:text-left lg:mx-0">

              <p>
                Right Architects is an architectural design studio focused on
                creating thoughtful spaces that combine functionality,
                aesthetics, and contextual sensitivity.
              </p>

              <p>
                Our work spans across architecture, interior design,
                landscape concepts, and furniture design. Each project is
                approached with careful attention to detail and a deep
                understanding of the people and environments it serves.
              </p>

              <p>
                Based in Pookkottumpadam, Nilambur, we collaborate closely
                with clients to transform ideas into meaningful built
                environments that reflect identity and purpose.
              </p>

              <p>
                From residential homes to interior spaces and landscape
                elements, our goal is to deliver designs that are timeless,
                practical, and inspiring.
              </p>

              <p>
                For collaborations and enquiries, connect with us through
                our furniture brand <strong>@right.furnitures</strong> or
                reach out directly via phone.
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

    </main>
  );
}