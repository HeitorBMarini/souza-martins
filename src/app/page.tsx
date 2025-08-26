import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ServicosHome from "@/components/ServicosHome";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import ButtonFixed from "@/components/ButtonFixed";
import QuemSomos from "@/components/QuemSomos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner/>
        <QuemSomos/>
        <Banner />
        <ServicosHome />
        <Cta />
      </main>
      <Footer />
      <ButtonFixed />
    </>
  );
}
