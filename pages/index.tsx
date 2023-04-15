import Whoweare from "@/components/home/Whoweare";
import Accordian from "@/components/home/Accordian";
import Contact from "@/components/home/Contact";
import LandingPage from "@/components/home/LandingPage";
import Statistics from "@/components/home/Statistics";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {

  return (
    <>
      <Header />
      <section id="home">
        <LandingPage />
        <Whoweare />
        <Statistics />
        <Accordian />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export async function getServerSideProps(){
  await new Promise((resolve)=>{
    setTimeout(resolve,1000);
  })

  return{
    props:{}
  }
}