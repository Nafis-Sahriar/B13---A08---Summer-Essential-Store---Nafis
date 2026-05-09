import { Button } from "@heroui/react";
import Link from "next/link";
import "animate.css";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[100px] md:min-h-[500px] lg:min-h-[600px] bg-[url('/banner.png')] bg-cover bg-no-repeat bg-center rounded-b-2xl flex items-center animate__animated animate__fadeInUp shadow-2xl overflow-hidden">
      
      {/* Overlay: Essential for text readability over background images */}
      {/* <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div> */}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="max-w-2xl text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 text-white animate__animated animate__backInDown">
            Your Ultimate <span className="text-orange-500 italic">Summer</span> Store
          </h1>

            <p className="bg-white/20 backdrop-blur-xs border hidden md:block md:w-full border-white/10 rounded-2xl shadow-xl p-2 text-gray-600 font-bold my-10 italic">
            Discover the hottest trends and essentials to make your summer unforgettable.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="/products">
              <Button 
                size="lg"
                className="bg-linear-to-r from-orange-300 to-red-600 hover:scale-105 transition-transform text-white px-10 py-7 text-lg font-bold rounded-xl animate__animated animate__fadeInUp"
              >
                70% OFF Summer Sale!
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;