import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">

      <Header />

      {/* Top spacing */}
      <div className="h-32 md:h-36 lg:h-56" />

      {/* Heading */}
      <section className="mx-auto max-w-4xl px-6 text-center">

        <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.28em] font-semibold lowercase mb-8 md:mb-10">
          contact
        </h1>

        <p className="text-[13px] md:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto text-justify md:text-center lg:text-center">
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

      <a
        href="tel:+917034256463"
        className="block text-sm text-neutral-700 md:pointer-events-none"
      >
        +91 7034256463
      </a>

      <a
        href="tel:+917306256463"
        className="block text-sm text-neutral-700 md:pointer-events-none"
      >
        +91 7306256463
      </a>
    </div>

    {/* Email */}
    <div className="space-y-2">
      <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
        email
      </p>

      <a
        href="mailto:info@therightarchitects.com"
        className="block text-sm text-neutral-700 hover:underline"
      >
        info@therightarchitects.com
      </a>
    </div>

    {/* Social */}
    <div className="space-y-2">
      <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
        social
      </p>

      <a
        href="https://www.instagram.com/right.architects"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-neutral-700 hover:underline"
      >
        instagram — right.architects
      </a>

      <a
        href="https://instagram.com/right.furnitures"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-neutral-700 hover:underline"
      >
        instagram — right.furnitures
      </a>

      <a
        href="https://www.facebook.com/people/RIGHT-Architects/61578335670503/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-neutral-700 hover:underline"
      >
        facebook — right architects
      </a>
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
        kerala, india
      </p>
      <p className="text-sm text-neutral-700">
        679332
      </p>
    </div>

  </div>

</section>


      {/* Open Map Section */}
      <section className="mx-auto max-w-4xl px-6 mt-24 pb-32 text-center">

        <a
          href="https://maps.google.com/?q=RIGHT+ARCHITECTS+Nilambur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm lowercase tracking-wide border border-neutral-300 px-6 py-3 hover:bg-black hover:text-white transition-colors"
        >
          open location in google maps →
        </a>

      </section>

    </main>
  );
}