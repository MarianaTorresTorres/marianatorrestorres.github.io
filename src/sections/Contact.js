import "../styles/App.css";
import contact from "../json-data/contact.json";

function Contact() {
  function copyGitHub() {
    window.open(contact.git);
  }

  function copyLinkedIn() {
    window.open(contact.linkedin);
  }

  return (
    <div
      className="bg-gradient-to-b from-projects from-20% to-contactus to-80% flex flex-col pt-4 pb-8 md:pb-4 lg:pb-4"
      id="contact"
    >
      <div className="flex flex-col md:ml-32 md:mr-32 lg:ml-32 lg:mr-32">
        <h2 className=" font-league font-semibold text-3xl lg:text-7xl md:text-7xl text-textColor ml-6 mt-6">
          Contact
        </h2>
        <p className="font-normal font-grotesk md:text-2xl lg:text-3xl text-textColor ml-6 pb-5">
          Reach out to me if you have any questions, or if you just want to say
          hi!
        </p>
        <div className="flex flex-row items-center justify-center m-12">
          <span className="flex flex-row items-center">
            <a href={`mailto:${contact.email}`}>
              <svg
                className="fill-textColor mr-2 ml-2 place-self-stretch"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 40 40"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </span>
          <span className="flex flex-row items-center">
            <svg
              className="fill-textColor mr-2 ml-2 place-self-stretch"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 40 40"
              fillRule="evenodd"
              clipRule="evenodd"
              onClick={() => copyGitHub()}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
          <span className="flex flex-row items-center">
            <svg
              className="fill-textColor mr-2 ml-2 place-self-center"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 40 40"
              fillRule="evenodd"
              clipRule="evenodd"
              onClick={() => copyLinkedIn()}
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
