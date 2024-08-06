import bottomImg from "../img/bottom_wave.png";
import friesImg from "../img/floating_fries.png";

const Banner = () => {
  return (
    <div >
      <video loop autoPlay muted className="w-full h-full object-cover ">
        <source
          src="https://eatsy.bold-themes.com/wp-content/uploads/2021/05/pexels-mart-production-7706274.mp4"
          type="video/mp4"
        />
      </video>
      <img src={friesImg} className="w-3/12 h-3/12 -ml-12 top-3 absolute z-30" />
      <img src={bottomImg} className="w-full h-72 -mt-72 dark:opacity-5" />
      <div className="relative  bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden ">
        <div className=" h-[500px] w-[500px] -top-1/2 -z-9  bg-secondary/40  rotate-45 absolute  rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Banner;
