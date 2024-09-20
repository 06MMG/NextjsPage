import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-700 text-white min-h-screen p-10 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center gap-10">
        {/* Aggressive looking logo */}
        <div className="relative">
          <Image
            className="transition-transform transform hover:scale-110 dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js Logo"
            width={200}
            height={50}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 opacity-25 blur-xl"></div>
        </div>

        {/* Aggressive typography and bold CTA */}
        <h1 className="text-5xl sm:text-6xl font-bold text-center tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-400 drop-shadow-lg">
          Next.js - Unleash the Power
        </h1>

        <p className="text-lg sm:text-xl text-center max-w-xl">
          The future of React development, delivered in an explosive fashion. Build, scale, and deploy like never before.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Bold action buttons */}
          <a
            className="bg-red-600 hover:bg-red-700 transition-colors text-white rounded-full py-3 px-6 sm:px-8 font-semibold text-lg"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>

          <a
            className="border border-solid border-white hover:bg-white hover:text-black transition-colors text-white rounded-full py-3 px-6 sm:px-8 font-semibold text-lg"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Docs
          </a>
        </div>

        {/* Decorative text with aggressive styling */}
        <ol className="text-center list-inside list-decimal text-lg sm:text-xl font-mono tracking-wide space-y-3 max-w-lg">
          <li>
            Start by editing{" "}
            <code className="bg-black/[.1] px-2 py-1 rounded">
              src/app/page.js
            </code>
            .
          </li>
          <li>Watch your changes explode into action.</li>
        </ol>
      </main>

      {/* Footer section */}
      <footer className="mt-16 flex gap-6 justify-center items-center">
        <a
          className="text-white hover:underline hover:underline-offset-4 flex items-center gap-2"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Learn Next.js
        </a>
        <a
          className="text-white hover:underline hover:underline-offset-4 flex items-center gap-2"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://nextjs.org/icons/window.svg"
            alt="Template icon"
            width={20}
            height={20}
          />
          Explore Templates
        </a>
        <a
          className="text-white hover:underline hover:underline-offset-4 flex items-center gap-2"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          Next.js Website →
        </a>
      </footer>
    </div>
  );
}
