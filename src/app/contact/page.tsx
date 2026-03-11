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
<div className="space-y-3">
  <p className="text-xs tracking-[0.2em] lowercase text-neutral-500">
    social
  </p>

  {/* Instagram accounts */}
  <div className="flex items-center justify-center gap-6">

    <a
      href="https://www.instagram.com/right.architects"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-neutral-700 hover:underline"
    >
      {/* Instagram icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.25 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
      </svg>

      right.architects
    </a>

    <a
      href="https://instagram.com/right.furnitures"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-neutral-700 hover:underline"
    >
      {/* Instagram icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.25 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
      </svg>

      right.furnitures
    </a>

  </div>

  {/* Facebook */}
  <div className="flex items-center justify-center gap-2">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-neutral-700"
    >
      <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073c0 5.017 3.657 9.178 8.438 9.927v-7.024H7.898v-2.903h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.903h-2.33V22c4.78-.75 8.437-4.91 8.437-9.927z"/>
    </svg>

    <a
      href="https://www.facebook.com/people/RIGHT-Architects/61578335670503/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-neutral-700 hover:underline"
    >
      right architects
    </a>

  </div>

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
        kerala, india, 679332
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