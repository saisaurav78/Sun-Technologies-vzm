'use client'
import AboutUs from "@/components/AboutUs";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

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
