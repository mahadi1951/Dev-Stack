import { Suspense } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TechnologyGrid from "./Components/TechnologyGrid";
import { ToastContainer } from "react-toastify";

const technologiesPromise = fetch("/TechnologyData.json").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <TechnologyGrid technologiesPromise={technologiesPromise} />
      </Suspense>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
