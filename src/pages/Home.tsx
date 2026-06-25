import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Solutions from "../components/Solutions";
import About from "../components/About";
import Simulator from "./Simulator";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Solutions />
      <About />
      <Simulator />
    </>
  );
}

export default Home;
