import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import MOG from "@/components/home/MOG";
import News from "@/components/home/News";
import Testimonies from "@/components/home/Testimonies";
import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="min-h-screen mt-22">
        <Hero />
        <About />
        <News />
        <MOG />
        <Testimonies />
      </div>
    </DefaultLayout>
  );
}
