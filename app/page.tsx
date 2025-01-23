import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Mobius Solutions</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <p>
            <Link href="https://www.linkedin.com/in/elena-wagenmans/" className="text-blue-400 hover:text-blue-300">
              Elena Wagenmans
            </Link>{" "}
            and{" "}
            <Link href="https://www.linkedin.com/in/amy7/" className="text-blue-400 hover:text-blue-300">
              Amy Zhou
            </Link>{" "}
            are Stanford Product Design and Mechanical Engineering grads, as well as former product design engineers at Apple. They started Mobius to
            enable circular supply chains in manufacturing by building a marketplace for recycled materials.You can read about their learnings{" "}
            <Link
              href="https://mango-emmental-198.notion.site/Mobius-Scrap-Metal-Recycling-Learnings-13613825c557804ba684d864ab2921be"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              here
            </Link>
            .
          </p>
          <p>
            Now they’re working to revolutionize the product design to manufacturing workflow.
          </p>
          <p>
            Based in San Francisco, Elena and Amy are passionate about building tools that help people and companies
            succeed. Elena loves squash, reading books, and trying new pastries. Amy loves arts and crafts, playing the clarinet, and upcycling clothes. Please reach out anytime--always happy to chat!
          </p>
        </div>
      </main>
      <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; 2024 Mobius Solutions.</p>
      </footer>
    </div>
  )
}

