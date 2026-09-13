
import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="hero container mx-auto flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-20 py-10">
      <div>
        <h1 className="text-[60px] font-extrabold mb-2">Build Your Ideal <br /> <span className="brand-gradient">Development Stack</span></h1>
        <p className="mb-4 text-lg text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
            <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white rounded-2xl">Explore Technologies </button>
            <button className="btn  rounded-2xl">Learn More</button>
        </div>
      </div>
      <div>
        <img className="w-full h-auto" src={heroImg} alt="Hero Image" />
      </div>
    </div>

  );
};

export default Hero;