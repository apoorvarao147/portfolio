import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/app.scss";
import "./styles/home.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
