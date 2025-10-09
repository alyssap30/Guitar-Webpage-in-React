import  {Modules} from "../elements/Modules.jsx";
import Header from "../elements/Header";
import {Quiz} from "../elements/Quiz.jsx";

export function GuidePage() {
    return (
        <>
            <Header page="Guitar Guide Page"/>

            <h2>Guitar Level Quiz</h2>
            <Quiz/>

            <h2>Beginners Guide</h2>
            <Modules modname = "Module 1" 
            check1 = "Tuning your guitar" 
            check2 = "Holding the guitar in the correct way" 
            check3 = "Using a pick" 
            check4 = "Plucking single notes"
            check5 = "Spider exercise"/>
            
            <Modules modname = "Module 2"
            check1 = "Basic Chords (Em, A, E, D, G)"
            check2 = "Chord Change practice"
            check3 = "Using a Capo" 
            check4 = "Metronome practice" 
            check5 = "Your first song (Hey Joe)"/><br/>

            <Modules modname="Module 3"
            check1 = "Learning the Major Scale" 
            check2 = "Learning the Minor Scale" 
            check3 = "Major and Minor Pentatonic Scale Exercise" 
            check4 = "More Chords (C, Am, F)"
            check5 = "Your second song ()"/>

            <Modules modname="Module 4"
            check1 = "Major and Minor Pentatonic Scale Exercise"
            check2 = "Sliding between notes" 
            check3 = "An introduction to overdrive" 
            check4 = "Power Chords"
            check5 = "Power Chord song (Rock you like a Hurricane)"/><br/>
          

            <h2>Intermediate Guide</h2>

            <Modules modname = "Module 1" 
            check1 = "5 string barre chords" 
            check2 = "6 string barre chords" 
            check3 = "Maj7 Shape" 
            check4 = "Dom 7th Shape" 
            check5 = "Barre chord song (Mardy Bum)"/>

            <Modules modname = "Module 2" 
            check1 = "Palm Muting" 
            check2 = "Full bends" 
            check3 = "Hammer-ons" 
            check4 = "Pull-offs"
            check5 = "Basic riff song (Do I wanna know)"/><br/>

            <Modules modname = "Module 3"
            check1 = "Pre-bending" 
            check2 = "Vibrato" 
            check3 = "Half bends" 
            check4 = "Quarter bends"
            check5 = "Bending song practice (Comfortably Numb solo)"/>

            <Modules modname="Module 4"
            check1 = "8th notes practice" check2 = "16th notes practice" 
            check3 = "Legato" 
            check4 = "Tapping"
            check5 = "Tapping solo (Eruption tapping part)"/><br/>
        
            <h2>Advanced Guide</h2>
            <Modules modname = "Module 1" 
            check1 = "Ecomomy picking" 
            check2 = "Hybrid Picking" 
            check3 = "Tremolo picking" 
            check4 = "Pinch harmonics" 
            check5 = "Picking type practice"/>

            <Modules modname = "Module 2"
            check1 = "What are modes" 
            check2 = "Modes 1 + 2" 
            check3 = "Modes 3 + 4" 
            check4 = "Modes 5 + 6" 
            check5 = "Mode 7"/><br/>

            <Modules modname="Module 3"
            check1 = "Learning to improvise" 
            check2 = "Riff creation" 
            check3 = "Moving between modes practice" 
            check4 = "Improvising over chord changes" 
            check5 = "Your first improvised solo"/>

            <Modules modname="Module 4"
            check1 = "Triad arpeggios" 
            check2 = "Sweep picking" 
            check3 = "Fluently soloing across the fretboard" 
            check4 = "Review of all techniques" 
            check5 = "End of advanced journey"/><br/>
            
        </>
    )
}
