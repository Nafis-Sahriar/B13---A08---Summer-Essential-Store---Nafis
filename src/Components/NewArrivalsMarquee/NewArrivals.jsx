import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const products = [
  {
    id: 1,
    title: "CosRx Low pH Good Morning Gel Cleanser",
    image: "https://i.ibb.co.com/V0qYP1Vq/images.png",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 2,
    title: "Neutrogena Hydro Boost Water Gel",
    image: "https://i.ibb.co.com/qPWy1XH/png-transparent-neutrogena-blue-logo-product-logos.png",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 3,
    title: "LUSTROUS LEATHER ACCESSORIES",
    image: "https://i.ibb.co.com/fYGZcHnR/Michael-Kors-Logo-svg.png",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 4,
    title: "Tommy Hilfiger Classic Summer Collection",
    image: "https://i.ibb.co.com/F4tHX92f/420da731fb1a03d12bf73ec1ff47eb3e.jpg",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 5,
    title: "Ralph Lauren Polo Summer Line",
    image: "https://i.ibb.co.com/YTh3WjKC/1526408915-193-Ralph-Lauren-Logo-9e6605e4ec7d-mobile.jpg",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 6,
    title: "BEAUTY OF JOSEON Relief Sun Rice",
    image: "https://i.ibb.co.com/qY0VPr32/boj2.jpg",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 7,
    title: "CeraVe Daily Moisturizing Lotion",
    image: "https://i.ibb.co.com/20gL4fv4/cerave-logo-top.webp",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 8,
    title: "La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 60",
    image: "https://i.ibb.co.com/Mb5NdW1/La-Roche-Posay-brand-svg.png",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
  {
    id: 9,
    title: "The Ordinary Hyaluronic Acid 2% + B5",
    image: "https://i.ibb.co.com/fz6XMLkr/ordinary1-2.jpg",
    description: "A gentle gel cleanser with a low pH formula that effectively removes impurities while maintaining the skin's natural balance.",
    date: "2026-04-20"
  },
    

];

const NewArrivals = () => {
  return (
    <div className="flex justify-between gap-4 bg-[#F4C83A]   mx-auto mt-10 md:sticky top-19 z-40  px-5 rounded-t-2xl">


      <button className=" bg-white text-orange-700 font-bold btn border-none">New Arrivals</button>
      <Marquee pauseOnHover={true} speed={150}>
           {
            products.map((p) => <span className="px-5 flex justify-center items-center gap-2 text-[#ffffff] italic font-bold" key={p.id}> <Image src={p.image} alt={p.title} width={80} height={80} />{p.title}</span>)
           }
      </Marquee>
    </div>
  );
};

export default NewArrivals;
