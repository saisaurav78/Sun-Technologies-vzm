'use client'
import AboutUs from "@/components/AboutUs";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Herobutton from "@/components/Herobutton";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="">
        <HeroSection />
        <AboutUs />
        <Brands />
        <Categories />
        <Testimonials />
        <ContactUs />
        <Footer/>
  </main>
    </>
  );
}

export default page 
