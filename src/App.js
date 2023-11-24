import React, { useState } from "react";
import * as Tone from "tone";
import main1 from "./data/main1.json";
import cadence1 from "./data/cadence1.json";
import main2 from "./data/main2.json";
import "./App.css";
import { useApp } from "@pixi/react";
import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useMemo } from "react";

console.log(main1.tracks[0].notes);

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const MainArray = [];

  const playPart = (musicArray) => {
    const synth = new Tone.Synth({}).toDestination();
    const part = new Tone.Part((time, note) => {
      document.documentElement.style.setProperty("--shape-scale", 5);
      document.documentElement.style.setProperty("--color-scale", "blue");
      setTimeout(() => {
        document.documentElement.style.setProperty("--shape-scale", 1);
        document.documentElement.style.setProperty(
          "--color-scale",
          "firebrick"
        );
      }, 100);
      part.loopEnd = "8n";
      part.loop = true;
      const now = Tone.now();
      synth.triggerAttackRelease(note.name, note.duration, note.time);
    }, musicArray).start(0);

    Tone.Transport.start();

    setIsPlaying(true);

    if (Tone.context.state !== "running") {
      Tone.context.resume();
    }
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
    console.log(randomizedArray);
    // create a new const for a different set of randommusic arrays
    playPart([...randomizedArray, ...randomizedArray]);
    playPart([...randomizedArray2, ...randomizedArray2]); //<-- the ellipses are called a "spread operator"
    // const loop = new Tone.Loop((playPart) => {
    // triggered every eighth note.
    // }, "47.5").start(0);
    Tone.Transport.start();
    //Can I do that here? If I create the second array to pull its information from a different file set? as in randomizing main1 main2 and main 3 inside a RandomMusicArray, and the same for my next set and then playPart(newRandomizedArray);
  };
  return (
    <div>
      <button class="glow-on-hover" onClick={playMusic}>
        {isPlaying ? "Stop Music" : "Play Music"}
      </button>
      <div className="shape"></div>
    </div>
  );
};

export default MusicPlayer;

// for each note move forward 1
