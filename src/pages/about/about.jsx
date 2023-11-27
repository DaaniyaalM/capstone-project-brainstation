import Navbar from "../../Components/Navbar/Navbar";
import "../about/about.scss";
const About = () => {
  return (
    <div className="Main__container">
      <Navbar />
      <div className="about__container">
        <h1 className="about__header">How it works:</h1>
        <p className="about__text">
          I started this project by brainstorming different ways in which I
          could make a system to generate music in a way that emulates the human
          process. My first idea was to have a system which follows the rules of
          modal music theory and generates notes within the scale and order of
          that particular mode. However, as I scoured the internet I found that
          this had already been done. So I decided to pivot and find another way
          in which I could have some sort of process that reflects the human
          approach. I decided that rather than generating a scale, what if I
          generated a series of arpeggios? I found that this solution had not
          been done yet "(as far as I could tell)", so I decided to go ahead
          with this method. My next question was, "how do I produce sound using
          javascript", and I was advised to use the library tone.js. The next
          step was to create arrays that would house the arpeggios and could be
          looped through to generate this music. I initially started by creating
          an array in which there were two categories: note, and time. After I
          got this array working, I decided that it would be better suited for
          time contraints to use .midi files converted to the JSON format. I did
          this by using garageband to generate loops in the .aif format,
          converted them to .midi format, and then converted the .midi to a JSON
          file using tone.js' own midi to JSON converter.
        </p>
        <h1 className="about__header"> Garageband process:</h1>
        <img
          className="garageband"
          src="images/garageband.png"
          alt="garageband"
        />
        <h1 className="about__header"> aif to midi conversion:</h1>
        <img
          className="garageband"
          src="images/aiftomidi.png"
          alt="aiftomidi"
        />
        <h1 className="about__header">midi to JSON conversion:</h1>
        <img
          className="garageband"
          src="images/miditojson.png"
          alt="miditojson"
        />
        <p className="about__text">
          After my files were all converted into the ideal formats I had to to
          figure out how to put them into the arrays that I wanted and get them
          to play in the order I wanted. Unlike in the first array I started
          with, the JSON files had a particular time at which they started, and
          this meant that the sequences I created had to be at the same starting
          time. So I created a few arpeggios for T1, a few for T2, and a few for
          T3. Whichever arpeggio is randomized at T1 shares the same starting
          time as the rest of the arpeggios in that category. The same goes for
          the other time categories of T2 and T3.
        </p>
      </div>
    </div>
  );
};
export default About;
