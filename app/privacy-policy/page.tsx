export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <a href="/" className="text-white/50 hover:text-white">
        ← Back to Home
      </a>

      <h1 className="mt-10 text-5xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-white/50">Last updated: June 13, 2026</p>

      <div className="mt-10 max-w-3xl space-y-6 leading-8 text-white/70">
        <p>
          Nyxa Game Studio respects your privacy. This Privacy Policy explains
          how we may collect, use, and protect information when you visit our
          website or contact us.
        </p>

        <p>
          We may collect information you voluntarily provide, such as your email
          address and message content when contacting us.
        </p>

        <p>
          We may use basic technical information to improve website performance
          and understand visitor behavior.
        </p>

        <p>
          We may use third-party services for hosting, analytics,
          communication, or website functionality. These services may process
          data according to their own privacy policies.
        </p>

        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:nyxagames8@gmail.com" className="text-white underline">
            nyxagames8@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
