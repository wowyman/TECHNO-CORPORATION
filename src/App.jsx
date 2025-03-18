import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCarousel from "./components/ProductCarousel";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-center text-2xl font-bold">Chào mừng đến với Techno Corporation</h2>
        <ProductCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default App;
