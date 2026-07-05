import { Course } from "../elements/Course";
import Header from "../elements/Header";
import React, { use, useState } from "react";

export function CoursePage() {
    const [percentageComplete1, setpercentageComplete1] = useState(0);
    const [percentageComplete2, setpercentageComplete2] = useState(0);
    const [percentageComplete3, setpercentageComplete3] = useState(0);
    const [percentageComplete4, setpercentageComplete4] = useState(0);

    return (
        <>
        <Header page="Courses Page"/>
        <h2>Chords</h2>
        <h3>{percentageComplete1}% Complete</h3>
        <Course name = "4 Basic Chords"/>
        <Course name = "Open Chords"/>
        <Course name = "Power Chords"/>
        <Course name = "7th Chords"/>
        <Course name = "Maj7th Chords"/>
        <Course name = "Barre Chords (Minor + Major)"/>
        <h2>A Guide to Improvisation (Lead)</h2> 
           <h3>{percentageComplete2}% Complete</h3>
        <Course name="Pentatonic Scales" estimatedCompletion = "?"/>
        <Course name="Major Scales" estimatedCompletion = "?"/>
        <Course name="Minor Scales" estimatedCompletion = "?"/>
        <Course/>
        <h2>A Guide to Improvisation (Rhythm)</h2> 
        <h3>{percentageComplete3}% Complete</h3>
        <Course name = "What is the CAGED System"/>
        <Course/>
        <Course/>
        <Course/>
        <h2>Ear Training</h2>
        <h3>{percentageComplete4}% Complete</h3>
        <Course name = "Identifing the note on the fretboard by the sound"/>
        <Course name = "Rhythm Training"/>
        <Course name = "Name the note by the sound"/>
        <Course name = "Name the chord"/>
        </>
    )
};