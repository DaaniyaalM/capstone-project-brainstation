import React, { useState } from "react";
import * as Tone from "tone";
import music from "./data/mario.json";

console.log(music.tracks[0].notes);

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const MainArray = [
    ["0", "Bb4"],
    ["0:2", "Bb4"],
    ["0:4", "Fb3"],
    ["0:5", "Bb4"],
    ["0:6", "A4"],
    ["1:0", "G4"],
    ["1:2", "A4"],
    // "A2:2n",
    // "A2:2n",
    // "G2:4n",
    // "F#2:4n",
    // "G2:4n",
    // "G2:4n",
    // "G2:4n",
    // "G#2:4n",
    // "G#2:4n",
    // "G2:2n",
    // "D#2:2n",
    // "D#2:2n",
    // "G2:4n",
    // "A2:4n",
  ];

  const playMusic = () => {
    const synth = new Tone.Synth().toDestination();
    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(note.name, note.duration, note.time);
    }, music.tracks[0].notes).start(); // <-- Change notesArray to MainArray
    // if (!isPlaying) {

    // const osc = new Tone.Oscillator(440, "sine").toDestination().start();
    Tone.Transport.start();
    setIsPlaying(true);

    // } else {
    //   Tone.Transport.stop();
    //   Tone.Transport.cancel();
    //   setIsPlaying(false);
    // }

    if (Tone.context.state !== "running") {
      Tone.context.resume();
    }
  };

  return (
    <div>
      <button onClick={playMusic}>
        {isPlaying ? "Stop Music" : "Play Music"}
      </button>
    </div>
  );
};

export default MusicPlayer;
