import Domain from "@/components/home/Domain";
import CarouselCom from "@/components/about/Carousel";
import Vision from "@/components/about/Vision";
import TripleD from "@/components/about/TripleD";
import Footer from '@/components/footer/Footer'
import Header from "@/components/header/Header";
import { useRef } from "react";

const About = () => {
  
  const myRef = useRef('')
    let path1 =document.querySelector('path1')
    let path2 =document.querySelector('path2')
    let path3 =document.querySelector('path3')

    let pathLength=document.getTotalLength()

  return (
    <>
    <Header/>
    <div className="about_container" id="about">
      <div className="svg_container">
        <svg
          width="348"
          height="693"
          viewBox="0 0 348 693"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M348 0.5H1V547.5H183.5" stroke="white" ref={myRef.current}/>
          <path d="M182.5 693L238.359 624H126.641L182.5 693Z" fill="#D9D9D9" id="path2"/>
          <path d="M182.5 546.5V626" stroke="white" id="path3"/>
        </svg>
      </div>
      <Vision />
      <TripleD />
      <Domain />
      <CarouselCom />
     <Footer/>

    </div>
    </>
    
  );
};

export default About;
