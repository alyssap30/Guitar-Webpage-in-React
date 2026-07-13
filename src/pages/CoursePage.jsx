import { Course } from "../elements/Course";
import Header from "../elements/Header";
import React, { use, useState } from "react";
import GChordImg from "../images/chordDiagrams/G-Chord.png"
import DChordImg from "../images/chordDiagrams/D-Chord.png"
import EmChordImg from "../images/chordDiagrams/Em-Chord.png"
import CChordImg from "../images/chordDiagrams/C-Chord.png"

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

    const moduleStyle = {
        width: "90%",
        height: "40%",
        maxWidth: "600px",
        boxShadow: "5px 5px 5px lightgray",
        margin: "10px 10px",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "white",
        display: "inline-block",
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
    
    return (
        <>
        <Header page="Courses Page"/>
        <div style= {moduleStyle}>
            <h2>Beginner: Module 1</h2>
            <h3>{percentageComplete1}% Complete</h3>
            <button id = "grade1button" onClick={() => {expandWindow("grade1", "grade1button")}} style = {buttonStyle}>View Content</button><br/>
            <div id = "grade1" style = {{display: "none"}}>
            <Course name = "How to Hold your Guitar + Pick"/>
            <Course name = "Introduction to metronome Use"/>
            <Course name = "Fretting and Pick holding tips"/>
            <Course name = "Standard Tuning + String Names"/>
            <Course name = "Open Chords" courseType = 'Chords' numberOfChords = "4" chords = {["G", "D", "Em", "C"]}
            chordURL = {[GChordImg, DChordImg, EmChordImg, CChordImg]}
            courseDescription = "G, D, Em, C"/>
            <Course name = "Note naming on E string"/>

            <h2>Beginner: Module 1 Practice</h2>
            <Course name = "Metronome Practice"/>
            <Course name = "Spider Exercise"/>
            <Course name = "Chord Practice"/>
            <Course name = "Song Practice"/>
        </div></div><br/>

        <div style={moduleStyle}>
            <h2>Beginner: Module 2</h2>
            <h3>{percentageComplete2}% Complete</h3>
            <button id = "course2button" onClick={() => {expandWindow("course2", "course2button")}} style = {buttonStyle}>View Content</button><br/>
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
        </div></div><br/>
        
        <div style={moduleStyle}>
            <h2>Bridging the gap between Intermediate and Beginner</h2>
            <h3>{percentageComplete3}% Complete</h3>
            <button id = "course3button" onClick={() => {expandWindow("course3", "course3button")}} style={buttonStyle}>View Content</button><br/>
            <div id = "course3" style = {{display: "none"}}>
                <Course name = "Introduction to Barre Chords (Major and Minor Shape)"
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
        </div></div><br/>

        <div style={moduleStyle}>
            <h2>Intermediate: Module 1</h2>
            <h3>{percentageComplete4}% Complete</h3>
            <button id = "course4button" onClick={() => {expandWindow("course4", "course4button")}} style={buttonStyle}>View Content</button><br/>
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
        </div></div><br/>

        <div style={moduleStyle}>
            <h2>Intermediate: Module 2</h2>
            <h3>{percentageComplete5}% Complete</h3>
            <button id = "course5button" onClick={() => {expandWindow("course5", "course5button")}} style={buttonStyle}>View Content</button><br/>
            <div id = "course5" style = {{display: "none"}}>
                <Course name = "Galloping Rhythms"/>
                <Course name = "16th Notes Rhythms"/>
                <Course name = "Natural Harmonics"/>
                <Course name = "Tremelo Picking"/>
                <Course name = "Pentatonic Shape 5 and connecting all shapes"/>
                <Course name = "Circle of Fifths explained"/>
        </div></div><br/>

        <div style={moduleStyle}>
            <h2>Bridging the gap between Advanced and Intermediate</h2>
            <h3>{percentageComplete5}% Complete</h3>
            <button id = "course6button" onClick={() => {expandWindow("course6", "course6button")}} style={buttonStyle}>View Content</button><br/>
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
        </div></div><br/>

        <div style={moduleStyle}>
            <h2>Advanced: Module 1</h2>
            <h3>{percentageComplete6}% Complete</h3>
            <button id = "course7button" onClick={() => {expandWindow("course7", "course7button")}} style={buttonStyle}>View Content</button><br/>
            <div id = "course7" style = {{display: "none"}}>
                <Course name = "6/9 Chords"/>
                <Course name = "An Introduction to Modes (Phrygain + Lydian)"/>
                <Course name = "Economy Picking"/>
                <Course name = "Advanced Tapping"/>
                <Course name = "Advanced Hybrid Picking"/>
                <Course name = "Chord-Scale Theory"/>
        </div></div><br/>

        <div style={moduleStyle}>
            <h2>Advanced Module 2</h2>
            <h3>{percentageComplete7}% Complete</h3>
            <button id = "course8button" onClick={() => {expandWindow("course8", "course8button")}} style={buttonStyle}>View Content</button><br/>
            <div id = "course8" style = {{display: "none"}}>
                <Course name = "Mode to chord relationships"/>
                <Course name = "Diminished and altered chord families (dim7, m7b5, alt dominant stacks)"/>
                <Course name = "Two handed-tapping"/>
                <Course name = "Whammy Bar Techniques"/>
                <Course name = "Advanced Legato with minimal picking"/>
                <Course name = "6 string Sweep Picking"/>
        </div></div><br/><br/>

        {/* <h2>A Full Guide to Improvisation (Lead)</h2> 
           
        <Course name="Pentatonic Scales"/>
        <Course name="Major Scales"/>
        <Course name="Minor Scales"/>
        <Course name = "Modes"/>
        <h2>A Full Guide to Improvisation (Rhythm)</h2> 
        
        <Course name = "CAGED Full Explaination"/>
        <Course name = "Circle of 5ths Full Explaination"/>
        
        <h2>Ear Training</h2>
        <h3>{percentageComplete10}% Complete</h3>
        <Course name = "Identifing the note on the fretboard by the sound"/>
        <Course name = "Rhythm Training"/>
        <Course name = "Name the note by the sound"/>
        <Course name = "Name the chord"/><br/><br/> */}
        </>
    )
};