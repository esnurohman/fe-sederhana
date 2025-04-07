import { Fragment } from "react";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import Hero from "./Hero";
import Feature from "./Feature";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import ToTop from "@/components/ui/ToTop";
import Faq from "./Faq";

const LandingPage = () => {
  return (
    <Fragment>
      <div id="top" className="w-full px-10">
        <NavMenu />
        <Hero />
        <AboutUs />
        <Feature />
        <Testimonial />
        <Faq />
        <Footer />
      </div>
      <ToTop />
    </Fragment>
  );
};
export default LandingPage;
