import { Course } from "../elements/Course";
import Header from "../elements/Header";

export function CoursePage() {
    percentageComplete1 = 0
    
    return (
        <>
        <Header page="Courses Page"/>
        <h2>A Guide to Improvisation {percentageComplete1}</h2> 
        <Course name="Pentatonic Scales" estimatedCompletion = "?"/>
        <Course name="Major Scales" estimatedCompletion = "?"/>
        <Course name="Minor Scales" estimatedCompletion = "?"/>
        </>
    )
};