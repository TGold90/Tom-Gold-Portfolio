import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ContactForm from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    // return <Contact />;
  };

  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("bg-black");
    document.body.classList.add("min-h-screen");
  }, []);

  //runs setCurrentPage to set state to whichever page is clicked selected
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer />
    </>
  );
}

export default App;
