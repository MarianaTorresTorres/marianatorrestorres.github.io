import "../styles/App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projects from "../json-data/projects.json";

function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="bg-gradient-to-b from-leadership to-projects flex flex-col pt-3 pb-8 lg:pb-4 md:pb-4 h-full"
      id="projects"
    >
      <div className="flex flex-col ml-8 mr-8 md:ml-32 lg:mr-32">
        <h2 className="font-league font-semibold text-3xl lg:text-7xl md:text-7xl text-textColor md:ml-6 lg:ml-6 mt-6 mb-6">
          Projects
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full md:w-3/6 lg:w-3/6 justify-center items-center rounded mt-5">
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              swipable={true}
              showDots={true}
              dotListClass="custom-dot-list-class"
            >
              {projects.map((project) => {
                return (
                  <div
                    key={project.id}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      className="bg-white h-80 p-2 md:p-2 lg:p-2 rounded-md"
                      src={project.img}
                    />
                    <p className="text-textColor font-grotesk font-semibold text-center md:text-3xl lg:text-3xl mt-3 mb-8">
                      {" "}
                      {project.title}{" "}
                    </p>
                    <p> {project.desc} </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
