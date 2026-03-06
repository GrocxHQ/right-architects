import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">

      <Header />

      {/* Top spacing */}
      <div className="h-32 md:h-40" />

      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 text-center">

        <h1 className="text-3xl md:text-4xl tracking-[0.28em] font-semibold lowercase mb-10">
          contact
        </h1>

        <p className="text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto text-justify md:text-center lg:text-center">
          If you are planning a project or would like to collaborate,
          feel free to reach out. We would be happy to discuss ideas
          and help transform your vision into meaningful spaces.
        </p>

      </section>


      {/* Contact Info Grid */}
      <section className="mx-auto max-w-5xl px-6 mt-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-24 text-center">

          {/* Phone */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
              phone
            </p>
            <p className="text-sm text-neutral-700">
              +91 7034256463
            </p>
            <p className="text-sm text-neutral-700">
              +91 7306256463
            </p>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
              email
            </p>
            <p className="text-sm text-neutral-700">
              rightarchitects@gmail.com
            </p>
          </div>

          {/* Instagram */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
              instagram
            </p>
            <p className="text-sm text-neutral-700">
              @rightarchitects
            </p>
            <p className="text-sm text-neutral-700">
              @right.furnitures
            </p>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
              location
            </p>
            <p className="text-sm text-neutral-700">
              pookkottumpadam, nilambur
            </p>
            <p className="text-sm text-neutral-700">
              kerala, india 679332
            </p>
          </div>

        </div>

      </section>


      {/* Map Section (visual difference) */}
      <section className="mx-auto max-w-6xl px-6 mt-24 pb-32">

        <div className="w-full h-[420px] bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-500 text-sm">
          map placeholder
        </div>

      </section>

    </main>
  );
}