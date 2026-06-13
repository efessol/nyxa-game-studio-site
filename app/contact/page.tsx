export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <a href="/" className="text-white/50 hover:text-white">
        ← Back to Home
      </a>

      <h1 className="mt-10 text-5xl font-semibold">Contact</h1>

      <p className="mt-6 max-w-2xl text-white/70">
        For business, publishing, partnerships, press inquiries, or general
        questions about Nyxa Game Studio, contact us by email.
      </p>

      <a
        href="mailto:nyxagames8@gmail.com"
        className="mt-8 block text-xl underline"
      >
        nyxagames8@gmail.com
      </a>
    </main>
  );
}
