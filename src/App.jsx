import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
