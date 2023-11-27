import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../home/home.scss";
const Home = () => {
  return (
    <div className="HomePageSetUp">
      <Navbar />

      <h1 className="section__header">Welcome to My Website!</h1>
      <p className="landing-text">
        Welcome to my artificial intelligence music player! This project will
        showcase a novel way to think about music and patterns and the potential
        for AI to create music. Click About to learn more or Music player if you
        want to dive right into it.
      </p>
    </div>
  );
};

export default Home;
