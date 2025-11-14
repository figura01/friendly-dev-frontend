const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Hey, I'm Laurent Vuillaume 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-4">BiMy Mission</h2>
        <p className="text-gray-300">
          With a background in computer science and a passion for teaching, I've
          spent the last few years honing my skills in web development, design,
          and content creation. My goal is to make technology more accessible
          and enjoyable for everyone.
        </p>
      </div>

      {/* Tech stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          🚀 Tech i use
        </h2>
        <p className="text-gray-300">
          I'm proficient in a variety of technologies, including:
        </p>
        <ul className="flex list-disc list-inside text-gray-300 gap-2">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Node.js",
            "Express",
            "MongoDB",
            "Prisma",
            "PostgreSQL",
            "Docker",
          ].map((tech) => (
            <li key={tech} className="flex bg-gray-700 px-3 py-1 rounded-md">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
