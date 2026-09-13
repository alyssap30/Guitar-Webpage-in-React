import { Course } from "../elements/Course";
import Header from "../elements/Header";
import React, { use, useState } from "react";
import GChordImg from "../images/chordDiagrams/G-Chord.png"
import DChordImg from "../images/chordDiagrams/D-Chord.png"
import EmChordImg from "../images/chordDiagrams/Em-Chord.png"
import CChordImg from "../images/chordDiagrams/C-Chord.png"
import HoldingGuitarImg from "../images/Tips Images/HoldingGuitar.png"
import metronomeImg from "../images/Tips Images/metronome.png"
import pickHoldingImg from "../images/Tips Images/HoldingPick.png"

export function CoursePage() {
    const [percentageComplete1, setpercentageComplete1] = useState(0);
    const [percentageComplete2, setpercentageComplete2] = useState(0);
    const [percentageComplete3, setpercentageComplete3] = useState(0);
    const [percentageComplete4, setpercentageComplete4] = useState(0);
    const [percentageComplete5, setpercentageComplete5] = useState(0);
    const [percentageComplete6, setpercentageComplete6] = useState(0);
    const [percentageComplete7, setpercentageComplete7] = useState(0);
    const [percentageComplete8, setpercentageComplete8] = useState(0);
    const [percentageComplete9, setpercentageComplete9] = useState(0);
    const [percentageComplete10, setpercentageComplete10] = useState(0);
    const [isCompleted, setIsCompleted] = useState(true);
    
    const buttonStyle = {
        width: "60%",
        padding: '1% 0',
        margin: '1%',
        borderRadius: '8px',
        border: 'none',
        color: 'white',
        backgroundColor: 'gray',
        fontSize: '18px'
    }

    function expandWindow(divElement, buttonElement) {
        document.getElementById(divElement).style.width = '100%';
        if (document.getElementById(divElement).style.display === "none") {
            document.getElementById(divElement).style.display = "inline-block";
            document.getElementById(buttonElement).textContent = "Close Expansion"}
        else {
            document.getElementById(divElement).style.display = "none";
            document.getElementById(buttonElement).textContent = "View Content"
        }
    }

    function MarkAsComplete() {
        numberOfmodules = 6;
        setpercentageComplete1(percentageComplete1 + 1);
    }
    return (
        <>
        <Header page="Courses Page"/>
        <div className="module_style">
            <h2>Beginner: Module 1</h2>
            <h3>{percentageComplete1}% Complete</h3>
            <button id = "course1button" onClick={() => {expandWindow("course1", "course1button")}} style = {buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course1" style = {{display: "none"}}>

                <Course name = "How to Hold your Guitar" courseType = "Tips"
                courseDescription = "Learn how to hold your guitar in the standard position and the most effective way to hold a pick"  
                text = "A bit of background to guitar: Your picking hand is the hand that plucks/picks the string which is usually your dominant hand in everyday life. Your fretting hand is the hand that presses down the frets which is your non dominant hand."
                    listTips = {["As seen in the picture your guitar rests on your picking hands knee", "The gutar should be placed close to your body for the best posture", "Your picking arm reaches over the top of the guitar body"]}
                    imgURL = {HoldingGuitarImg}/>

                <Course name = "Introduction to Metronome Use" courseType = "Tips"
                courseDescription = "Learn to improve your timing with metronome practice and how to get the most out of practicing with a metronome"
                text = "Metronomes can either be physical or online, they are a click track that even the most professional musicians use to stay in timeso its vital knowing how to use one effectively.  The picture above shows the result you get if you type metronome in the search bar"
                listTips = {["BPM stands for beats per minute", "The standard slow BPM is around 60 BPM", "The standard normal speed is around 80-100 BPM", "A fast BPM is around 100+ BPM"]}
                imgURL = {metronomeImg}/>

                <Course name = "Pick holding tips" courseType = "Tips"
                courseDescription = "Top tips on fretting and how the notes can be picked effectively"
                text = ""
                listTips = {["The pick should always be held between your index and thumb on picking hand", "It should be placed at the end of your finger on the side", "Then grip the the other side on your pick with your thumb on top"]}
                imgURL = {pickHoldingImg}/>

                <Course name = "Standard Tuning + String Names"
                courseDescription = "The string's in letter format and easy ways to remember it + an introduction on tuning your guitar in standard tuning "/>

                <Course name = "Open Chords" courseType = 'Chords' numberOfChords = "4" chords = {["G", "D", "Em", "C"]}
                chordURL = {[GChordImg, DChordImg, EmChordImg, CChordImg]}
                courseDescription = "The basic 4 chords that make up alot of songs: G, D, Em, C"/>

            {/* <h2>Beginner: Module 1 Practice</h2>
            <Course name = "Metronome Practice"/>
            <Course name = "Spider Exercise"/>
            <Course name = "Chord Practice"/>
            <Course name = "Song Practice"/> */}
        </div><br/>

        <div className="module_style">
            <h2>Beginner: Module 2</h2>
            <h3>{percentageComplete2}% Complete</h3>
            <button id = "course2button" onClick={() => {expandWindow("course2", "course2button")}} style = {buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course2" style = {{display: "none"}}>
                <Course name = "Power Chords"
                courseDescription = "Learn the basic power chord shape and how it is put into context"/>
                <Course name = "Palm Muting"/>
                <Course name = "Alternate Picking"/>
                <Course name = "Basic String Bending (Half Step)"/>
                <Course name = "Sliding Technique"/>
                <Course name = "Hammer-ons + Pull-offs"/>
                <Course name = "Note naming on A string"/>
                <Course name = "Basic strumming Patterns"/>
                <Course name = "Pentatonic Scale Shape 1 + 2"/>
                <Course name = "Playing Octave chords at once"/>
                <Course name = "Arpeggios"/>
        </div><br/>
        
        <div className="module_style">
            <h2>Transition from Beginner to Intermediate</h2>
            <h3>{percentageComplete3}% Complete</h3>
            <button id = "course3button" onClick={() => {expandWindow("course3", "course3button")}} style={buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course3" style = {{display: "none"}}>
                <Course name = "Introduction to Barre Chords"
                courseDescription = "Learn the basic barre chord shape for minor and major chords on the 5th and 6th string"/>
                <Course name = "Vibrato Technique"/>
                <Course name = "String Bending (Full Step)"/>
                <Course name = "Pre-bending"/>
                <Course name = "Legato runs"/>
                <Course name = "What is CAGED"/>
                <Course name = "Pentatonic Scale Shape 3 + 4"/>
                <Course name = "String Muting and Rhythmic Scraping"/>
                <Course name = "8h Notes Rhythms"/>
                <Course name = "Note Naming on D string"/>
        </div><br/>

        <div className="module_style">
            <h2>Intermediate: Module 1</h2>
            <h3>{percentageComplete4}% Complete</h3>
            <button id = "course4button" onClick={() => {expandWindow("course4", "course4button")}} style={buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course4" style = {{display: "none"}}>
                <Course name = "Suspended Chords"/>
                <Course name = "7th Chords"
                courseDescription = ""/>
                <Course name = "Maj7th Chords"
                courseDescription = ""/>
                <Course name = "An Introduction to Triads"/>
                <Course name = "An Introduction to Tapping"/>
                <Course name = "Controlling Vibrato"/>
                <Course name = "All 5 CAGED shapeds for major keys"/>
                <Course name = "Double stops and off-beat rhythms"/>
                <Course name = "Note Naming on G string"/>
        </div><br/>

        <div className="module_style">
            <h2>Intermediate: Module 2</h2>
            <h3>{percentageComplete5}% Complete</h3>
            <button id = "course5button" onClick={() => {expandWindow("course5", "course5button")}} style={buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course5" style = {{display: "none"}}>
                <Course name = "Galloping Rhythms"/>
                <Course name = "16th Notes Rhythms"/>
                <Course name = "Natural Harmonics"/>
                <Course name = "Tremelo Picking"/>
                <Course name = "Pentatonic Shape 5 and connecting all shapes"/>
                <Course name = "Circle of Fifths explained"/>
            </div><br/>

        <div className="module_style">
            <h2>Transition from Intermediate to Advanced</h2>
            <h3>{percentageComplete5}% Complete</h3>
            <button id = "course6button" onClick={() => {expandWindow("course6", "course6button")}} style={buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course6" style = {{display: "none"}}>
                <Course name = "9th Chords"/>
                <Course name = "Add9 Chords"/>
                <Course name = "An Introduction to Sweep Picking (2 Strings)"/>
                <Course name = "An Introduction to Hybrid Picking"/>
                <Course name = "An Introduction to Modes (Ionian + Dorian)"/>
                <Course name = "Triplets Rhythm"/>
                <Course name = "Pinch Harmonics Technique"/>
                <Course name = "Triad Inversions"/>
                <Course name = "3 string Sweep Picking"/>
                <Course name = "Note Naming on B string"/>
        </div><br/>

        <div className="module_style">
            <h2>Advanced: Module 1</h2>
            <h3>{percentageComplete6}% Complete</h3>
            <button id = "course7button" onClick={() => {expandWindow("course7", "course7button")}} style={buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course7" style = {{display: "none"}}>
                <Course name = "6/9 Chords"/>
                <Course name = "An Introduction to Modes (Phrygain + Lydian)"/>
                <Course name = "Economy Picking"/>
                <Course name = "Advanced Tapping"/>
                <Course name = "Advanced Hybrid Picking"/>
                <Course name = "Chord-Scale Theory"/>
        </div><br/>

        <div className="module_style">
            <h2>Advanced Module 2</h2>
            <h3>{percentageComplete7}% Complete</h3>
            <button id = "course8button" onClick={() => {expandWindow("course8", "course8button")}} style={buttonStyle}>View Content</button><br/>
        </div>
            <div id = "course8" style = {{display: "none"}}>
                <Course name = "Mode to chord relationships"/>
                <Course name = "Diminished and altered chord families (dim7, m7b5, alt dominant stacks)"/>
                <Course name = "Two handed-tapping"/>
                <Course name = "Whammy Bar Techniques"/>
                <Course name = "Advanced Legato with minimal picking"/>
                <Course name = "6 string Sweep Picking"/>
        </div><br/><br/>

        {/* <h2>A Full Guide to Improvisation (Lead)</h2> 
           
        <Course name="Pentatonic Scales"/>
        <Course name="Major Scales"/>
        <Course name="Minor Scales"/>
        <Course name = "Modes"/>

        <h2>A Full Guide to Improvisation (Rhythm)</h2> 
        
        <Course name = "CAGED Full Explaination"/>
        <Course name = "Circle of 5ths Full Explaination"/>
         <Course name = "Learning the Notes on the Fretboard"/>
        
        <h2>Ear Training</h2>
        <h3>{percentageComplete10}% Complete</h3>
        <Course name = "Identifing the note on the fretboard by the sound"/>
        <Course name = "Rhythm Training"/>
        <Course name = "Name the note by the sound"/>
        <Course name = "Name the chord"/><br/><br/> */}
        </>
    )
};