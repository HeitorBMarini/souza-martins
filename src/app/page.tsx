import Banner from "@/components/Banner";
import ButtonFixed from "@/components/ButtonFixed";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuemSomos from "@/components/QuemSomos";
import ServicosHome from "@/components/ServicosHome";

export default function Home() {
  return (
    <><Header />
    <Banner />
    <QuemSomos/>
    <ServicosHome/>
    <Cta/>
    <ButtonFixed/>
    <Footer/>
    </>
  );
}
