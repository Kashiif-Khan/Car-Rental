import { useState } from "react";
import Group1 from "../assets/about/Group1.png";
import BlurCar2 from "../assets/about/BlurCar2.png";
import phone1 from "../assets/banner2/phone1.png";
import Group from "../assets/banner2/Group.png";
import AppStore from "../assets/banner2/App Store.png";
import GooglePlay from "../assets/banner2/Google Play.png";
import CountUp from "react-countup";
import memories from "../assets/banner2/memories.png";

function FAQbox({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-white border border-gray-300 rounded-2xl p-6 cursor-pointer
      relative flex flex-col transition-all duration-300"
      onClick={() => setOpen(!open)}
    >
      {/* Left Blue Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-2xl"></div>

      {/* Question + Icon */}
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-semibold text-gray-800">{title}</p>
        <span className="text-3xl font-bold text-gray-700">
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <p className="text-gray-600 text-[16px] mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. (Edit text)
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <>
      {/* MAIN WRAPPER */}
      <div className="w-full">
        {/* TOP SECTION */}
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg">Home / About Us</p>
        </div>

        {/* SECOND SECTION */}
        <div className="w-full flex justify-center items-center py-12 px-4 mt-24 gap-20 max-md:flex-col max-md:gap-8">
          <div className="text-4xl font-bold mb-3">
            Where every <br /> drive feels <br /> extraordinary
          </div>

          <div>
            <h1>Variety Brands</h1>
            <p>
              Platea non auctor fermentum sollicitudin. Eget
              <br /> adipiscing augue sit quam natoque ornare cursus
              <br /> viverra odio
            </p>

            <h1>Maximum Freedom</h1>
            <p>
              Diam quam gravida ultricies velit duis consequat
              <br /> integer. Est aliquam posuere vel rhoncus massa
              <br /> volutpat in
            </p>
          </div>

          <div>
            <h1>Awesome Support</h1>
            <p>
              Eget adipiscing augue sit quam natoque ornare
              <br /> cursus viverra odio. Diam quam gravida ultricies
              <br /> velit
            </p>

            <h1>Flexibility On The Go</h1>
            <p>
              Vitae pretium nulla sed quam id nisl semper. Vel
              <br /> non in proin egestas dis faucibus rhoncus.
              <br /> Iaculis dignissim aenean pellentesque nisl
            </p>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <section className="w-full flex justify-center items-center py-20 px-4">
          <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yourVideoID"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        {/* views section  */}
        <section className="w-full py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {/* 1 */}
            <div>
              <h2 className="text-5xl font-extrabold text-[#5736EA]">
                <CountUp end={20000} duration={3} separator="," />
                k+
              </h2>
              <p className="text-gray-600 text-lg mt-2">Happy Clients</p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-5xl font-extrabold text-[#5736EA]">
                <CountUp end={540} duration={3} />+
              </h2>
              <p className="text-gray-600 text-lg mt-2">Cars Available</p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-5xl font-extrabold text-[#5736EA]">
                <CountUp end={25} duration={3} />+
              </h2>
              <p className="text-gray-600 text-lg mt-2">Cities Covered</p>
            </div>
          </div>
        </section>
    {/* ================= INFO SECTION ================= */}
<section className="w-full py-20 px-6 flex justify-center">
  <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-10">

    {/* LEFT SIDE */}
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Get Your Fitness on Track
        <br /> with Professional Coaches
      </h1>

      {/* LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
        {/* Row 1 */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-lg font-medium">Personalized Training Plans</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-lg font-medium">Track Your Progress</p>
        </div>

        {/* Row 2 */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-lg font-medium">Certified Coaches</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-lg font-medium">Daily Workout Routines</p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={memories}
        alt="Fitness info"
        className="w-full max-w-xl rounded-3xl shadow-xl object-cover"
      />
    </div>

  </div>
</section>


        {/* second banner section */}

        <section className="w-full flex justify-center items-center py-20 px-4 mt-20">
          <div className="relative w-full max-w-[1500px] bg-[#5736EA] rounded-[50px] px-6 lg:px-24 py-20 flex items-center">
            {/* Background Texture */}
            <img
              src={Group}
              alt="texture"
              className="absolute inset-0 w-[60%] left-[30%] top-24 object-cover opacity-70 rounded-[50px]"
            />

            {/* PHONE IMAGE - HALF OUTSIDE LEFT */}
            <div className="absolute left-32 bottom-24 hidden lg:block">
              <img
                src={phone1}
                alt="phone"
                className="w-[240px] drop-shadow-2xl"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative z-10 text-white max-w-2xl ml-auto">
              <p className="uppercase tracking-wider text-sm mb-3 opacity-95">
                DOWNLOAD OUR APP
              </p>

              <h2 className="text-5xl font-extrabold leading-tight mb-6">
                Download our app
              </h2>

              <p className="text-lg opacity-95 mb-12 leading-relaxed">
                Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
                semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
                vulputate. Nulla nam eget urna fusce vulputate at risus.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <img src={AppStore} className="w-[200px]" />
                <img src={GooglePlay} className="w-[200px]" />
              </div>
            </div>
          </div>
        </section>

        {/* REVIEW SECTION */}
        <section className="w-full flex flex-col justify-center items-center py-12 px-4 gap-8">
          <h1 className="text-4xl font-bold mb-3">
            What our customers are saying
          </h1>

          <div className="w-full flex flex-wrap justify-center gap-6 py-10 px-4">
            {/* CARD 1 */}
            <div
              className="w-full sm:w-[350px] lg:w-[380px] bg-white rounded-3xl shadow-md
      overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-10 text-center">
                <span className="text-8xl text-purple-600">“</span>
                <p className="text-lg font-medium mt-4 leading-relaxed pb-[3px]">
                  Et aliquet netus at sapien pellentesque mollis nec dignissim
                  maecenas. Amet erat volutpat quisque odio purus feugiat. In
                  gravida neque
                </p>
              </div>

              <div className="bg-purple-600 text-white pt-16 pb-8 text-center rounded-b-3xl relative">
                <img
                  src="/your-img.png"
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover absolute left-1/2 
          -translate-x-1/2 top-[2%] -translate-y-1/2 border-4 border-white shadow-md"
                />
                <p className="text-sm opacity-80 mt-8">Kuphal LLC</p>
                <p className="text-xl font-bold">Emanuel Boyle</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="w-full sm:w-[350px] lg:w-[380px] bg-white rounded-3xl shadow-md
      overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-10 text-center">
                <span className="text-8xl text-purple-600">“</span>
                <p className="text-lg font-medium mt-4 leading-relaxed pb-8">
                  Purus consectetur varius quis urna phasellus enim mattis. Sem
                  tincidunt tortor nunc egestas amet adipiscing ligula
                </p>
              </div>

              <div className="bg-purple-600 text-white pt-16 pb-8 text-center rounded-b-3xl relative">
                <img
                  src="/your-img.png"
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover absolute left-1/2 
          -translate-x-1/2 top-[2%] -translate-y-1/2 border-4 border-white shadow-md"
                />
                <p className="text-sm opacity-80 mt-8">Glover - Orn</p>
                <p className="text-xl font-bold">River Graves</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="w-full sm:w-[350px] lg:w-[380px] bg-white rounded-3xl shadow-md
      overflow-hidden relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-10 text-center">
                <span className="text-8xl  text-purple-600">“</span>
                <p className="text-lg font-medium mt-4 leading-relaxed pb-8">
                  Quam neque odio urna euismod felis. Sit egestas magna in
                  quisque fames. Nisl non eget sit pellentesque tristique et
                </p>
              </div>

              <div className="bg-purple-600 text-white pt-16 pb-8 text-center rounded-b-3xl relative">
                <img
                  src="/your-img.png"
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover absolute left-1/2 
          -translate-x-1/2 top-[2%] -translate-y-1/2 border-4 border-white shadow-md"
                />
                <p className="text-sm opacity-80 mt-8">Haag LLC</p>
                <p className="text-xl font-bold">Ryder Malone</p>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      {/* ✅ FIXED — Closing main wrapper */}
      {/* FAQ SECTION */}
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Top Car Rental Questions</h1>
      </div>
      <section className="w-full flex justify-center py-12 px-4">
        <div className="w-full max-w-[900px] space-y-5">
          <FAQbox title="What is the process of renting a car?" />
          <FAQbox title="Which documents are required for car rental?" />
          <FAQbox title="Do you offer long-term car rentals?" />
          <FAQbox title="Is fuel included in the car rental price?" />
          <FAQbox title="What payment methods are accepted?" />
        </div>
      </section>
      {/* PURPLE BANNER */}
      <div className="w-full flex justify-center items-center py-10">
        <div className="relative w-[1296px] h-[415px] rounded bg-[#5937E0] overflow-hidden">
          <img
            src={Group1}
            alt="group 2"
            className="absolute w-[800px] h-[148px] top-20 left-0"
          />

          <img
            src={BlurCar2}
            alt="Car"
            className="absolute w-[365px] h-[237px] top-1/3 right-5"
          />

          <div className="mt-20 ml-24">
            <p className="font-bold text-[50px] text-white leading-tight">
              Looking for a car?
            </p>
            <p className="font-bold text-[50px] text-white leading-tight">
              +537 547-6401
            </p>

            <div className="w-[550px] mt-3">
              <p className="font-semibold text-[12px] text-white leading-relaxed">
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh.
              </p>

              <div className="w-[464px] h-[60px] rounded bg-white flex justify-center items-center mt-6 px-2">
                <input
                  type="search"
                  placeholder="City"
                  className="flex-grow text-gray-500 text-[16px] outline-none bg-transparent px-2"
                />
                <button className="bg-[#FFA500] text-white font-semibold text-[16px] rounded-full px-6 py-2 hover:bg-[#ff8c00] transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
