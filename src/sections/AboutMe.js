import "../styles/App.css";
import aboutme from "../json-data/aboutme.json";

function AboutMe() {
  const profilePhoto = aboutme.profilePic;

  return (
    <div
      id="about"
      className="flex flex-col bg-gradient-to-b from-home from-20% to-aboutme to-80% w-full lg:h-screen md:h-screen pb-16 md:pb-5 lg:pb-5"
    >
      <div className="flex flex-col md:flex-row lg:flex-row justify-center h-full items-center">
        <div className="relative ml-5 flex md:hidden lg:hidden m-8">
          <div className="h-56 z-10 relative overflow-hidden border-4 border-white top-0 left-0">
            <img className="h-full" src={profilePhoto}></img>
          </div>
          <div className="h-56 z-0 absolute overflow-hidden border-4 border-white top-6 left-4 -right-5 inset-x-0 bg-purpleShade"></div>
        </div>
        <div className="flex flex-col text-white font-sans font-semibold w-[90%] md:w-[35%] lg:w-[35%] mr-5 mt-5 lg:mt-0 md:mt-0 ml-8 lg:ml-0 md:ml-0">
          <h2 className="font-league font-semibold text-3xl md:text-7xl lg:text-7xl text-textColor">
            About Me
          </h2>
          <p className="font-grotesk font-normal text-sm md:text-base lg:text-base text-textColor">
            {aboutme["description"]}
          </p>
        </div>
        <div className="relative ml-5 hidden md:block lg:block">
          <div className="h-60 z-10 relative overflow-hidden border-4 border-white top-0 left-0">
            <img src={profilePhoto} className="h-full"></img>
          </div>
          <div className="h-60 z-0 absolute overflow-hidden border-4 border-white top-6 left-4 -right-5 inset-x-0 bg-purpleShade"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
