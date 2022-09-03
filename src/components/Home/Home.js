import Navbar from "../Layout/Navbar";
import Hero from "./Hero";
import More from "./More";
import Footer from "../Layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <More/> */}
      <Footer/>
    </div>
  );
}
