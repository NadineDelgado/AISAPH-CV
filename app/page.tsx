import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Parceiros from "@/app/components/parceiros";
import Cursos from "@/app/components/cursos";
import Porque from "@/app/components/porque";
import Depoimentos from "@/app/components/depoimentos";
import Incompany from "@/app/components/in-company";
import Calendario from "@/app/components/calendario";
import Ctafinal from "@/app/components/cta final";
import Footer from "@/app/components/footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Parceiros/>
      <Cursos/>
      <Porque/>
      <Depoimentos/>
      <Incompany/>
      <Calendario/>
      <Ctafinal/>
      <Footer/>
    </>
  );
}
