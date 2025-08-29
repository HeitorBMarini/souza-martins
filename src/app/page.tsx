import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ServicosHome from "@/components/ServicosHome";
import Cta from "@/components/Cta";
import QuemSomos from "@/components/QuemSomos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner/>
        <QuemSomos/>
        <ServicosHome />
        <Cta />
      </main>
    </>
  );
}
