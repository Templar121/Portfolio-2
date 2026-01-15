import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Publications from './components/sections/Publications';
import Certifications from './components/sections/Certifications';
import Experience from './components/sections/Experience';

function App() {
  React.useEffect(() => {
    // Update the page title
    document.title = "Subhayan Mukherjee | Machine Learning Engineer";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          {/* <Experience /> */}
          <Projects />
          <Achievements />
          <Publications />
          <Certifications />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;