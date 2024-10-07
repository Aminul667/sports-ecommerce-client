import bannerImg1 from "../../assets/images/bannerImg-1.jpg";
import bannerImg2 from "../../assets/images/bannerImg-2.jpg";
import bannerImg3 from "../../assets/images/bannerImg-3.jpg";

const Banner = () => {
  return (
    <div className="mt-10 flex justify-between">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold font-poppins">Discover elegant &</h1>
        <h1 className="text-6xl font-bold font-poppins my-6">
          affordable furniture
        </h1>
        <h1 className="text-6xl font-bold font-poppins">for every room</h1>
        <p className="text-2xl mt-7">
          Transform your furniture with sophisticated and stylish
        </p>
        <p className="text-2xl mt-1">
          prices, and create a secure and inviting home
        </p>
      </div>
      <div className="w-1/2 flex justify-between gap-5">
        <div className="w-1/2">
          {/* Top Image */}
          <div className="w-full flex justify-center">
            <img src={bannerImg1} alt="Top" className="w-full object-cover" />
          </div>

          {/* Bottom Image */}
          <div className="w-full flex justify-center mt-4">
            <img
              src={bannerImg2}
              alt="Bottom"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2">
          {/* Top Image */}
          <div className="w-full flex justify-center">
            <img src={bannerImg3} alt="Top" className="w-full object-cover" />
          </div>

          {/* Bottom Image */}
          <div className="w-full flex justify-center mt-4 items-center border rounded-md bg-black p-4">
            <p className="text-8xl font-poppins font-bold text-white">1200+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
