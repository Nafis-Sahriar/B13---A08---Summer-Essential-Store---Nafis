import Banner from "@/Components/Banner";
import NewArrivals from "@/Components/NewArrivalsMarquee/NewArrivals";
import SunscreenGuide from "@/Components/ProductGuide/SunscreenGuide";
import Tips from "@/Components/Tips";
import TopBrands from "@/Components/TopBrands";
import TopSix from "@/Components/TopSix";
import Image from "next/image";

export const metadata = {
    title: "Home - Summer Store",
    description: "",
};

export default function Home() {
  return (

    <div className="w-[90%] mx-auto rounded-5xl">

          <NewArrivals></NewArrivals>

          <Banner></Banner>

          <TopSix></TopSix>
          <Tips></Tips>
          <TopBrands></TopBrands>
          <SunscreenGuide></SunscreenGuide>

          
    </div>
  );
}
