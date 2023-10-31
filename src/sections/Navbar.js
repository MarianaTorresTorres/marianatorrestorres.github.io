import { Link } from "react-scroll";
import aboutme from "../json-data/aboutme.json";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-row justify-between text-textColor bg-home">
      <div className="ml-8 mr-8 mb-4 mt-3 flex flex-col justify-center">
        <Link to="home" smooth="true">
          <img className="max-h-20" src={aboutme.logo}></img>
        </Link>
      </div>
      <div className="ml-8 mr-8 mb-4 mt-3 text-md font-semibold hidden lg:block">
        <Link to="about" smooth="true">
          <a className="text-xl font-light font-grotesk m-6 hover:font-semibold hover:underline underline-offset-8 cursor-pointer">
            About Me
          </a>
        </Link>
        <Link to="experience" smooth="true">
          <a className="text-xl font-light font-grotesk m-6 hover:font-semibold hover:underline underline-offset-8 cursor-pointer">
            Experience
          </a>
        </Link>
        <Link to="leadership" smooth="true">
          <a className="text-xl font-light font-grotesk m-6 hover:font-semibold hover:underline underline-offset-8 cursor-pointer">
            Leadership
          </a>
        </Link>
        <Link to="projects" smooth="true">
          <a className="text-xl font-light font-grotesk m-6 hover:font-semibold hover:underline underline-offset-8 cursor-pointer">
            Projects
          </a>
        </Link>
        <Link to="contact" smooth="true">
          <a className="text-xl font-light font-grotesk m-6 hover:font-semibold hover:underline underline-offset-8 cursor-pointer">
            Contact
          </a>
        </Link>
        <a
          href={aboutme.resumeLocation}
          download={aboutme.ResumeName}
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-lg font-light font-grotesk m-6 text-textColor border-2 border-textColor rounded-lg hover:text-home hover:bg-purpleShade duration-300 w-40 h-8">
            {" "}
            Download Resume{" "}
          </button>{" "}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
