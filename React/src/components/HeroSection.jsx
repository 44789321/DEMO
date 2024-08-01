import job from "../assets/job.png";
import job1 from "../assets/job1.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-2">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Claimant
        <span className="bg-gradient-to-r from-blue-100 to-blue-600 text-transparent bg-clip-text">
          {" "}
          Homepage
        </span>
      </h1>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-300 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Confirmation History
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Correspondence History
        </a>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-500 p-8 bg-gradient-to-r from-blue-800 to-blue-950 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-yellow-400 text-xl font-bold">
          PIVOT
        </h2>
        <p className="text-white mt-4 md:mt-0 md:ml-12 whitespace-nowrap">AN INDIANA WORKFORCE ENGINE</p>
      </div>
      <div className="px-12 py-12">
        <p className="mt-10 text-lg text-left text-neutral-900 max-w-4xl">
          <b>Logistician</b>
          <br />
          <i>$23/hour</i>
        </p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded w-full">
          View Details...
        </button>
      </div>
    </div>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Need help finding a job? Want to explore other career opportunities?
        <br />
        <b>Visit your local WorkOne Career Center</b>
      </p>
      <div className="flex justify-center my-5">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-400 to-red-800 py-3 px-4 mx-3 rounded-md"
        >
          Locate your center
        </a>
      </div>
      <div className="flex mt-2 justify-center">
        <img
          src={job}
          alt="job"
          className="rounded-lg w-1/2 border-red-800 shadow-orange-700 mx-2 my-4"
        />
        <img
          src={job1}
          alt="job1"
          className="rounded-lg w-1/2 border-red-800 shadow-orange-700 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;