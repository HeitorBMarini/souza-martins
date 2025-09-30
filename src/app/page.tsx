import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ServicosHome from "@/components/ServicosHome";
import Cta from "@/components/Cta";
import QuemSomos from "@/components/QuemSomos";
import Faq from "@/components/Faq";
import GaleriaCarousel from "@/components/GaleriaCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <QuemSomos />
        <ServicosHome />
        <Faq />
        <GaleriaCarousel />

        <Cta />
      </main>
    </>
  );
}
