Overview

What is your app?

This project is an Artificial Intelligence music player that explores a unique approach to generating music by utilizing arpeggios instead of traditional scale-based methods. It also incorporates the Tone.js library for sound production.

Problem

The initial challenge was to find an innovative way to generate music that simulates human processes. The initial idea of using modal music theory was abandoned due to existing solutions. The project pivoted to creating a system based on arpeggios. The need for a sound library led to the adoption of Tone.js. The project addresses the challenge of organizing and playing .midi files converted to JSON format.

User Profile

Users of this app are individuals interested in exploring AI-generated music patterns. They can interact with the app to understand the novel approach to music generation. Considerations include users with varying levels of musical knowledge.

Features

Generation of music using arpeggios
Integration with the Tone.js library for sound production
Conversion of .midi files to JSON format
Categorization of arpeggios based on time constraints
User interface with About and Music Player sections
Implementation
Tech Stack

JavaScript for app logic
Tone.js library for sound production
reactpixi for animations
Sitemap
Home
About
Music Player
Mockups
Visuals of the About and Music Player screens (not provided)
Data
JSON format for storing arpeggios and music data
Endpoints
Data Endpoint ("/data"):

Method: GET

Description: Responds with JSON data containing information from the cadence1, main1, and main2 variables.
Auth
Not needed
Roadmap
Sprint Tasks
Set up the project structure
Implement the arpeggio generation logic
Integrate Tone.js for sound production
Convert .midi files to JSON using Tone.js converter
Categorize arpeggios based on time constraints
Develop the user interface for About and Music Player sections
Test and debug functionalities
Timeframes
Week 1: Do everything for Sunday
Week 2: Do everything extra for demo-day on Thursday
Nice-to-haves
Additional music-related features such as: 
electronic keyboard for people to make their own arpeggios to add to the system
Enhanced user interface:
Choosing a sprite of their choice to move along with the notes
Adding more ways in which the sprite can move 
User accounts for saving preferences- can use auth here 
This breakdown outlines the key aspects of your project based on the provided information. Feel free to adjust the details and add more specific information as needed.
