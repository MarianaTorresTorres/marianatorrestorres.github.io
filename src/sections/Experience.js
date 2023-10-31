import "../styles/App.css";
//import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import Tile from "../Tile.js";
import experiences from "../json-data/experiences.json";

function Experience() {
  return (
    <div
      className="bg-gradient-to-b from-aboutme to-experience flex flex-col pb-4"
      id="experience"
    >
      <div className="flex flex-col justify-center ml-12 mr-12 md:ml-32 md:mr-32 lg:ml-32 lg:mr-32">
        <h2 className="font-league font-semibold text-3xl lg:text-7xl md:text-7xl text-textColor md:ml-6 lg:ml-6 mt-8 mb-8">
          Experience
        </h2>
        {experiences.map((experience) => {
          return (
            <Tile
              key={experience.id}
              company={experience.company}
              role={experience.role}
              dates={experience.dates}
              img={experience.img}
              desc={experience.desc}
              loc={experience.loc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
