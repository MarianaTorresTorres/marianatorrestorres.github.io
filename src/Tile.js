import "./styles/App.css";

function Tile(props) {
  return (
    <div className="bg-white rounded-lg mt-4 mb-4">
      <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full">
        <div className="flex flex-row lg:w-[25%] md:w-[25%] pl-6 pr-6 pt-4 pb-4 md:p-6 lg:p-6">
          <div className="flex md:justify-center lg:justify-center items-center md:w-full lg:w-full">
            <img className="place-self-center" src={props.img}></img>
          </div>
        </div>
        <div className="flex flex-col md:justify-left lg:justify-left text-left lg:text-left md:text-left lg:w-[25%] md:w-[25%] align-right pl-8 pr-8 pb-4 md:p-8 lg:p-8 lg:hidden md:hidden">
          <p className="text-textColor text-sm lg:text-base md:text-base">
            {props.dates}
          </p>
          <div className="flex flex-row mt-3">
            <svg
              className="mr-1"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
            </svg>
            <p className="text-textColor text-sm lg:text-base md:text-base">
              Gainesville, Florida
            </p>
          </div>
        </div>
        <span className="flex flex-col lg:w-[50%] md:w-[50%] pl-8 pr-8 md:p-8 lg:p-8">
          <h1 className="font-bold text-base lg:text-xl text-left text-textColor">
            {" "}
            {props.company}{" "}
            <span className="font-semibold lg:text-xl">
              {" "}
              <span className="hidden md:inline lg:inline"> - </span>{" "}
              <span className="block md:inline lg:inline text-sm md:text-xl lg:text-xl">
                {" "}
                {props.role}{" "}
              </span>{" "}
            </span>{" "}
          </h1>
          <ul className="list-disc text-textColor text-xs lg:text-sm max-h-full ml-4 p-4">
            {props.desc &&
              props.desc.map((point) => {
                return <li className="p-1"> {point} </li>;
              })}
          </ul>
        </span>
        <div className="invisible md:visible md:p-8">
          <p className="text-textColor"> {props.dates}</p>
          {props.loc ? (
            <div className="flex flex-row mt-3">
              <svg
                className="mr-1"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>
              <p className="text-textColor text-sm lg:text-base md:text-base">
                {props.loc}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tile;
