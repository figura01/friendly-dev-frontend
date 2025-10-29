import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">👏 About me</h2>
        <p className="text-gray-200 mb-4 max-4xl">
          I'm a passionate web developer and content creator who loves building
          friendly digital experiences and helping others grow into confident,
          modern developers.
        </p>

        <Link
          to="/about"
          className="inline-block text-blue-400 text-sm hover:underline transition"
        >
          Read more about me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
