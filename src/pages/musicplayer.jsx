import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import "../App.scss";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import MyBunny from "../Components/MyBunny";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
      data.main2.tracks[0].notes,
      data.main1.tracks[0].notes,
    ]);
    const randomizedArray2 = getRandomMusicArray([
      data.cadence1.tracks[0].notes,
    ]);
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

    Tone.Transport.start();
  };

  return (
    <div className="stage">
      <Navbar />
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
  );
};
export default MusicPlayer;
