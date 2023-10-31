import "../styles/App.css";
import Tile from "../Tile.js";
import leadership from "../json-data/leadership.json";

function Leadership() {
  return (
    <div
      className="bg-gradient-to-b from-experience to-leadership flex flex-col pt-2 pb-7 4md:p-0 lg:p-0"
      id="leadership"
    >
      <div className="flex flex-col justify-center ml-12 mr-12 md:ml-32 md:mr-32 lg:ml-32 lg:mr-32">
        <h2 className="font-league font-semibold text-3xl lg:text-7xl md:text-7xl text-textColor md:ml-6 lg:ml-6 mt-8 mb-8">
          Leadership
        </h2>
        {leadership.map((experience) => {
          return (
            <Tile
              key={experience.id}
              company={experience.company}
              role={experience.role}
              dates={experience.dates}
              img={experience.img}
              desc={experience.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Leadership;
