import React, { useState } from "react";
import * as Tone from "tone";
import main1 from "./data/main1.json";
import cadence1 from "./data/cadence1.json";
import main2 from "./data/main2.json";
import "./App.scss";
import { render, useApp } from "@pixi/react";
import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
import MyBunny from "./Components/MyBunny";

console.log(main1.tracks[0].notes);

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trigger, setTrigger] = useState(false);

  // const [i, seti] = usestate(0);
  const synth = new Tone.Synth({}).toDestination();

  const playPart = (musicArray) => {
    let currentTime = 0;

    const part = new Tone.Part((time, note) => {
      setTrigger((prevValue) => {
        // console.log(prevValue);
        return prevValue + 1;
      });
      // Update time only if it's greater than the current time
      if (time > currentTime) {
        currentTime = time;
      } else {
        // If time is not greater, add a small offset
        currentTime += 0.01;
      }

      // Trigger the synth
      synth.triggerAttackRelease(note.name, note.duration, currentTime);

      // Log progress
      console.log(part.progress);
    }, musicArray).start(0);

    Tone.Transport.start();

    setIsPlaying(true);

    if (Tone.context.state !== "running") {
      Tone.context.resume();
    }
  };

  const StopMusic = () => {
    console.log("aaaa");
    Tone.Transport.stop();
    setIsPlaying(false);
  };

  const getRandomMusicArray = (arrayOfChoices) => {
    const randomIndex = Math.floor(Math.random() * arrayOfChoices.length); // Change this one based on the number of arrays I am putting in(*x).

    return arrayOfChoices[randomIndex];
    // return randomIndex === 0 ? music2.tracks[0].notes : music.tracks[0].notes; // I would just add more music tracks here corresponding to the main category
  };

  // this works but it doesn't do what I want because it's randomizing the whole thing. I need to separate my randomizing 1 for each category of time position. For example, 3 starter arrays that can be chosen randomly for one "getRandomMusicArray", then I follow up with x# of 2nd tier arrays, then I follow up with main array again let a=main and all other variables= some cadence, the pattern would be: a b a c a d a e a f a g a h a i a j a k a l etc etc
  const playMusic = () => {
    const randomizedArray = getRandomMusicArray([
      main2.tracks[0].notes,
      main1.tracks[0].notes,
    ]);
    const randomizedArray2 = getRandomMusicArray([
      cadence1.tracks[0].notes,
      // cadence2.tracks[0].notes,
    ]);
    console.log(randomizedArray2);
    // create a new const for a different set of randommusic arrays
    try {
      playPart([...randomizedArray, ...randomizedArray]);
    } catch (error) {
      console.log(error);
    }
    try {
      playPart([...randomizedArray2, ...randomizedArray2]);
    } catch (error) {
      console.log(error);
    }
    //<-- the ellipses are called a "spread operator"
    // const loop = new Tone.Loop((playPart) => {
    // triggered every eighth note.
    // }, "47.5").start(0);
    Tone.Transport.start();
    //Can I do that here? If I create the second array to pull its information from a different file set? as in randomizing main1 main2 and main 3 inside a RandomMusicArray, and the same for my next set and then playPart(newRandomizedArray);
  };

  // render() {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          {/* Define your routes
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} /> */}
        </div>
      </Router>

      <div className="stage">
        <Stage className="stage" options={{ backgroundAlpha: 0 }}>
          <Container x={1} y={150}>
            <MyBunny trigger={trigger} />
          </Container>
        </Stage>
        <button
          className="glow-on-hover"
          onClick={isPlaying ? StopMusic : playMusic}
        >
          {isPlaying ? "Stop Music" : "Play Music"}
        </button>
      </div>
    </>
  );
};
export default MusicPlayer;

// for each note move forward 1
