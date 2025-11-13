import Footer from "./ReusableComponents/Footer";
import Toyota from "../assets/Vehicallogo/Toyota.png";
import Ford from "../assets/Vehicallogo/Ford.png";
import Mercedes from "../assets/Vehicallogo/Mercedes.png";
import Jeep from "../assets/Vehicallogo/Jeep.png";
import BMW from "../assets/Vehicallogo/BMW.png";
import Audi from "../assets/Vehicallogo/Audi.png";

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

        {/* Logos Section */}
        <div className="flex justify-center items-center py-10 px-4 h-40 mt-10 bg-gray-100">
          <div className="bg-white shadow-md rounded-full px-10 py-6 flex flex-wrap justify-center items-center gap-12 w-fit">
            <img
              src={Toyota}
              alt="Toyota"
              className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Ford}
              alt="Ford"
              className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Mercedes}
              alt="Mercedes"
              className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Jeep}
              alt="Jeep"
              className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
            <img
              src={BMW}
              alt="BMW"
              className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Audi}
              alt="Audi"
              className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Vehicles;
