import Domain from "@/components/about/Domain";
import CarouselCom from "@/components/about/Carousel";
import Vision from "@/components/about/Vision";
import TripleD from "@/components/about/TripleD";
import Footer from '@/components/footer/Footer'
import Header from "@/components/header/Header";

const About = () => {
  
  return (
    <>
    <Header/>
    <div className="about_container" id="about">
      <Vision />
      <TripleD />
      <Domain />
      <CarouselCom />
     <Footer/>
    </div>
    </> 
  );
};

export async function getServerSideProps(){
  await new Promise((resolve)=>{
    setTimeout(resolve,3000);
  })

  return{
    props:{}
  }
}

export default About;

