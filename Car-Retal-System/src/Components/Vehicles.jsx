import Card from "./ReusableComponents/card";
import Logocomp from "./ReusableComponents/Logocomp";

function Vehicles() {
  return (
    <>
      {/* main div */}
      <div>
        {/* heading div */}
        <div className="w-full h-20 flex justify-center items-center">
          <h1 className="font-bold text-3xl text-center mt-5">
            Select a Vehicle Group
          </h1>
        </div>
        {/* Button Section */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8 px-4">
          {[
            "All Vehicles",
            "Sedan",
            "Cabriolet",
            "Pickup",
            "SUV",
            "Minivan",
          ].map((label, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300
        ${
          i === 0
            ? "bg-[#5937E0] text-white hover:bg-[#472fc0]"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        } hover:scale-105`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <Card />

        {/* Logos Section */}
        <Logocomp />
        {/* <div className="flex justify-center items-center py-10 px-4 mt-10 bg-gray-100">
            <div className="bg-white shadow-md rounded-full px-10 py-6 flex flex-wrap justify-center items-center gap-12 w-fit">
              {[Toyota, Ford, Mercedes, Jeep, BMW, Audi].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Brand ${i + 1}`}
                  className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div> */}
      </div>
    </>
  );
}

export default Vehicles;
