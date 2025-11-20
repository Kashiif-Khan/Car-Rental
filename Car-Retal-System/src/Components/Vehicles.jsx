
import Card from "./ReusableComponents/Card";
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

        {/* button Div */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200">
            All Vehicles
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-transform duration-200">
            Sedan
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-transform duration-200">
            Cabriolet
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-transform duration-200">
            Pickup
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-transform duration-200">
            SUV
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-300 hover:scale-105 transition-transform duration-200">
            Minivan
          </button>
        </div>
        {/* Cards Section */}
        <Card />
        < Logocomp />
      </div>    
    </>
  );
}

export default Vehicles;
