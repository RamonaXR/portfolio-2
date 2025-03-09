import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <Header />
      <main>
        <section id="about">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
