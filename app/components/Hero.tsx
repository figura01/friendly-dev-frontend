import { Link } from "react-router";

const Hero = ({
  name = "[NAME]",
  text = "I build friendly web experiences and help others become confident, modern developers.",
}: {
  name: string;
  text?: string;
}) => {
  return (
    <header className="bg-gray-900 text-white py-20 px-4 transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey, I'm {name} 👏</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">{text}</p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          View projects
        </Link>
        <Link
          to="/contact"
          className="text-blue-400 border-blue-500 px-6 py-2 rounded hover:bg-blue-600 hover:text-white border-2 transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
