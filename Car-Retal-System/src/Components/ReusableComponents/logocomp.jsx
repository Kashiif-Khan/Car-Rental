import Toyota from "../../assets/Vehicallogo/Toyota.png";
import Ford from "../../assets/Vehicallogo/Ford.png";
import Mercedes from "../../assets/Vehicallogo/Mercedes.png";
import Jeep from "../../assets/Vehicallogo/Jeep.png";
import BMW from "../../assets/Vehicallogo/BMW.png";
import Audi from "../../assets/Vehicallogo/Audi.png";

function Logocomp() {
  const logos = [Toyota, Ford, Mercedes, Jeep, BMW, Audi];

  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-3xl p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Brand ${i + 1}`}
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logocomp;
