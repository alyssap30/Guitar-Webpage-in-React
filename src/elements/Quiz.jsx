import {useState} from "react";

export function Quiz() {
    const labels = {
        textAlign: "left",
        padding: "30px"
    }
    const header = {
        textAlign: "center"
    }
    const Box = {
        backgroundColor: "white",
        width: "90%",
        height: "40%",
        boxSizing: "border-box",
        maxWidth: "750px",
        boxShadow: "5px 5px 5px lightgray",
        margin: "10px 10px",
        padding: "20px",
        borderRadius: "8px",
        display: "inline-block",
    }
    // Question Boxs Display Manipulation
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActiveR, setIsActiveR] = useState(false);

    const questionBox = {
        backgroundColor: "rgb(231, 231, 231)",
        width: "90%",
        height: "40%",
        boxSizing: "border-box",
        fontSize: "18px",
        maxWidth: "750px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "30px",
        padding: "20px 40px",
        textAlign: "left",
        borderRadius: "8px",
    }
    const Box1 = {
        ...questionBox, 
        display: isActive1 ? "inline-block" : "none"
    }
    const Box2 = {
        ...questionBox, 
        display: isActive2 ? "inline-block" : "none"
    }
    const Box3 = {
        ...questionBox,
        display: isActive3 ? "inline-block" : "none"
    }
    const Box4 = {
        ...questionBox,
        display: isActive4 ? "inline-block" : "none"
    }
    const Box5 = {
        ...questionBox,
        display: isActive5 ? "inline-block" : "none"
    }
    const Box6 = {
        ...questionBox,
        display: isActive6 ? "inline-block" : "none"
    }
    const BoxResults = {
        ...questionBox,
        display: isActiveR ? "inline-block" : "none"
    }

    // Counter of the number of questions that correspond to each level
    const [starter, setStarter] = useState(0);
    const [beginner, setBeginner]= useState(0);
    const [intermediate, setIntermediate] = useState(0);
    const [advanced, setAdvanced] = useState(0);

    const [QValue, handleQ] = useState ("");
    const handleChange = (event) => {
        handleQ(event.target.value)
    }
    function Start() {
        setIsActive1(true);
    }
    // Used as error handing incase program behaves in an unexpected manner
    function PreventWindowStacking () {
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        setIsActive6(false);
    }
    // Handles each answer to the questions
    function questionHanding(questionNum, setOpeningWindow) {
        function answerHanding (setVar, varName) {
            setVar(varName + 1);
            PreventWindowStacking();
            setOpeningWindow(true)
        }
        if (QValue === `${questionNum}a`) {
            answerHanding(setStarter, starter);
        }
        else if (QValue === `${questionNum}b`) {
            answerHanding(setBeginner, beginner);
        }
        else if (QValue === `${questionNum}c`) {
            answerHanding(setIntermediate, intermediate);
        }
        else if (QValue === `${questionNum}d`) {
            answerHanding(setAdvanced, advanced)
        }
        else { alert("Please Select an answer") }
    }

    // Question 1
    function Q1() {
        questionHanding("1", setIsActive2)
    }
    function exitQ1() {
        setIsActive1(false);
    }
    // Question 2
    function Q2() {
        questionHanding("2", setIsActive3)
    }
    function exitQ2() {
        setIsActive2(false);
    }
    //Question 3
    function Q3() {
        questionHanding("3", setIsActive4)
    }
    function exitQ3() {
        setIsActive3(false);
    }

    // Question 4
    function Q4() {
        questionHanding("4", setIsActive5)
    }

    function exitQ4() {
        setIsActive4(false);
    }

    // Question 5
    const [bg1, setBg1] = useState(false);
    const [bg2, setBg2] = useState(false);
    const [bg3, setBg3] = useState(false);
    const [bg4, setBg4] = useState(false);
    const [in1, setIn1] = useState(false);
    const [in2, setIn2] = useState(false);
    const [in3, setIn3] = useState(false);
    const [in4, setIn4] = useState(false);
    const [av1, setAv1] = useState(false);
    const [av2, setAv2] = useState(false);
    const [av3, setAv3] = useState(false);
    const [av4, setAv4] = useState(false);
    const [Q5Number, setQ5Number] = useState(0);

    
    function handlesetBg1 (event) {
        setBg1(event.target.value)
        if (bg1 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetBg2 (event) {
        setBg2(event.target.value)
        if (bg2 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetBg3 (event) {
        setBg3(event.target.value)
        if (bg3 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetBg4 (event) {
        setBg4(event.target.value)
        if (bg4 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetIn1 (event) {
        setIn1(event.target.value)
        if (in1 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetIn2 (event) {
        setIn2(event.target.value)
        if (in2 === true) {
            setQ5Number(Q5Number + 1)}};

    function handlesetIn3 (event) {
        setIn3(event.target.value)
        if (in3 === true) {
                setQ5Number(Q5Number + 1)}};
    
    function handlesetIn4 (event) {
        setIn4(event.target.value)
        if (in4 === true) {
                setQ5Number(Q5Number + 1)}};

    function handlesetAv1 (event) {
        setAv1(event.target.value)
        if (av1 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetAv2 (event) {
        setAv2(event.target.value)
        if (av2 === true) {
            setQ5Number(Q5Number + 1)}};

    function handlesetAv3 (event) {
        setAv3(event.target.value)
        if (av3 === true) {
            setQ5Number(Q5Number + 1)}};
    
    function handlesetAv4 (event) {
        setAv4(event.target.value)
        if (av4 === true) {
            setQ5Number(Q5Number + 1)}};
    function Q5() {
        if (Q5Number === 0) {
            setStarter(starter + 1);
            setIsActive5(false);
            setIsActive6(true);
        }
        else if (Q5Number < 8) {
            setAdvanced(advanced + 1);
            setIsActive5(false);
            setIsActive6(true)}
        else if (Q5Number >= 4) {
            setBeginner(beginner + 1);
            setIsActive5(false);
            setIsActive6(true);
        }
        else if (Q5Number < 4) {
            setIntermediate(intermediate + 1);
            setIsActive5(false);
            setIsActive6(true);
        }
    }

    function exitQ5() {
        setIsActive5(false);
    }
    
    //Question 6
    const [beg1, setBeg1] = useState("");
    const [int1, setInt1] = useState("");
    const [int2, setInt2] = useState("");
    const [adv1, setAdv1] = useState("");
    const [adv2, setAdv2] = useState("");
    const [adv3, setAdv3] = useState("");
    const [Q6Number, setQ6Number] = useState(0);

    function handleBeg1 (event) {
        setBeg1(event.target.value)
        if (beg1 === true) {
            setQ6Number(Q6Number + 1)}};
    
    function handleInt1 (event) {
        setInt1(event.target.value)
        if (int1 === true) {
            setQ6Number(Q6Number + 1)}};
    
    function handleInt2 (event) {
        setInt2(event.target.value)
        if (int2 === true) {
            setQ6Number(Q6Number + 1)}};
        
    function handleAdv1 (event) {
        setAdv1(event.target.value)
        if (adv11 === true) {
            setQ6Number(Q6Number + 1)}};
    
    function handleAdv2 (event) {
        setAdv2(event.target.value)
        if (adv2 === true) {
            setQ6Number(Q6Number + 1)}};
    
    function handleAdv3 (event) {
        setAdv3(event.target.value)
        if (adv3 === true) {
            setQ6Number(Q6Number + 1)}};
    
    function CalcResult () {
        if (Q6Number === 0) {
            setStarter(starter + 1);
            setIsActive6(false);
            setIsActiveR(true);
        }
        else if (Q6Number < 0) {
            setBeginner(beginner + 1);
            setIsActive6(false);
            setIsActiveR(true);
        }
        else if (Q6Number < 2 && Q6Number) {
            setIntermediate(intermediate + 1);
            setIsActive6(false);
            setIsActiveR(true);
        }
        else if (Q6Number < 4) {
            setAdvanced(advanced + 1)
            setIsActive6(false);
            setIsActiveR(true);}}

    function StartAgain() {
        setIsActive2(true);
        setIsActiveR(false);
        setBeginner(0);
        setIntermediate(0);
        setAdvanced(0);
    }

    const starterper = Math.round((starter / 6) * 100 * 100) / 100;
    const beginnerper = Math.round((beginner / 6) * 100 * 100) / 100;
    const intermediateper = Math.round((intermediate / 6) * 100 * 100) / 100;;
    const advancedper = Math.round((advanced / 6) * 100 * 100) / 100;

    const Button = {
        padding: "6px 30px",
        backgroundColor: "rgba(59, 71, 71, 0.55)",
        boxShadow: "1px 2px 2px rgb(178, 178, 178)",
        border: "1px solid black",
        fontSize: "14px",
        color: "white",
        border: "none",
        margin: "0px 2px auto",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "0.3s ease",
        cursor: "pointer"}

    return (
        <>
        <div id = "startbox" style = {Box}>
            <h3>Quiz to check your guitar skills</h3><br/>
            <p>(Please answer to the best of your ability)</p>
            
            <button style = {Button} onClick ={Start}>Take Quiz</button>
        </div><br/>


        <div style = {Box1}>
            <h3 style = {header}>Question 1</h3>
            <label style = {labels}><input type = "radio" name = "q1" onChange = {handleChange} value = "1a"/>
                I can't play any chords or very little</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q1" onChange = {handleChange} value = "1b"/>
                I can play all open chords</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q1" onChange = {handleChange} value = "1c"/>
                I can play bar chords</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q1" onChange = {handleChange} value = "1d"/>
                I can compose a rhythm guitar piece</label><br/><br/><br/>
            
            <div style = {{textAlign: "center"}}>
                <button style = {Button} onClick= {exitQ1}>Exit</button>
                <button style = {Button} onClick = {Q1}>Next Question</button>
            </div>
        </div>

        <div style = {Box2}>
            <h3 style = {header}>Question 2</h3>
            <label style = {labels}><input type = "radio" name = "q2" onChange={handleChange} value = "2a"/>
                I have little to no scale knowledge</label><br/><br/>
            
            <label style = {labels}><input type = "radio" name = "q2" onChange={handleChange} value = "2a"/>
                I know the basic pentatonic and/or major scale</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q2" onChange={handleChange} value = "2b"/>
                I can play the major and pentonic scale in CAGED</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q2" onChange={handleChange} value = "2c"/>
                I know all the 7 modes in every key</label><br/><br/><br/>

            
            <div style = {{textAlign: "center"}}>
                <button style = {Button} onClick= {exitQ2}>Exit</button>
                <button style = {Button} onClick = {Q2}>Next Question</button>
            </div>
        </div>


        <div style = {Box3}>
            <h3 style = {header}>Question 3</h3>
            <label style = {labels}><input type = "radio" name = "q3" onChange={handleChange} value = "3a"/>
                What's improvisation</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q3" onChange={handleChange} value = "3b"/>
                I can piece together basic licks</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q3" onChange={handleChange} value = "3c"/>
                I know my way around the fretboard in every key</label><br/><br/><br/>

            <div style = {{textAlign: "center"}}>
                <button style = {Button} onClick= {exitQ3}>Exit</button>
                <button style = {Button} onClick = {Q3}>Next Question</button>
            </div>
        </div>

        <div style = {Box4}>
            <h3 style = {header}>Question 4</h3>
            <label style = {labels}><input type = "radio" name = "q4" onChange={handleChange} value = "4a"/>
                I can't maintain a constant rhythm</label><br/><br/>
            
            <label style = {labels}><input type = "radio" name = "q4" onChange={handleChange} value = "4b"/>
                I regularly practice with a metromnome and can keep in time with it</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q4" onChange={handleChange} value = "4b"/>
                I can keep in time on-beat but often can't off-beat</label><br/><br/>

            <label style = {labels}><input type = "radio" name = "q4" onChange={handleChange} value = "4c"/>
                I can keep in time all the time</label><br/><br/><br/>

            <div style = {{textAlign: "center"}}>
                <button style = {Button} onClick= {exitQ4}>Exit</button>
                <button style = {Button} onClick = {Q4}>Next Question</button>
            </div>
        </div>


        <div style = {Box5}>
            <h3 style = {header}>Question 5</h3>
            <h4>Tick the Techniques you can do</h4>

            <label style = {labels}><input type = "checkbox" onChange={handlesetBg1} value = {bg1}/>
                Sliding</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetBg2} value = {bg2}/>
                Palm Muting</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetBg3} value = {bg3}/>
                Bending</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetBg4} value = {bg4}/>
                Hammer on</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetIn1} value = {in1}/>
                Tapping</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetIn2} value = {in2}/>
                Pull off</label><br/><br/>
        
            <label style = {labels}><input type = "checkbox" onChange={handlesetIn3} value = {in3}/>
                Vibrato</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetIn4} value = {in4}/>
                Muted Notes</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetAv1} value= {av1}/>
                Legato hammer and pull-off</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handlesetAv2} value = {av2}/>
                Pinch Harmonic</label><br/><br/>
            
            <label style = {labels}><input type = "checkbox" onChange={handlesetAv3} value = {av3}/>
                Pre-bends</label><br/><br/>
            
            <label style = {labels}><input type = "checkbox" onChange={handlesetAv4} value = {av4}/>
                Fast licks in 16th notes</label><br/><br/><br/>

            <div style = {{textAlign: "center"}}>
                <button style = {Button} onClick = {exitQ5}>Exit</button>
                <button style = {Button} onClick = {Q5}>Next Question</button>
            </div>
        </div>


        <div style = {Box6}>
            <h3 style = {header}>Question 6</h3>
            <h4>Tick the types of picking you can do</h4>

            <label style = {labels}><input type = "checkbox" onChange={handleBeg1} value = {beg1}/>
                Down Picking</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handleInt1} value = {int1}/>
                Fingerstyle</label><br/><br/>
            
            <label style = {labels}><input type = "checkbox" onChange={handleInt2} value = {int2}/>
                Alternate Picking</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handleAdv1} value = {adv1}/>
                Tremolo Picking</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handleAdv2} value = {adv2}/>
                Hybrid Picking</label><br/><br/>

            <label style = {labels}><input type = "checkbox" onChange={handleAdv3} value = {adv3}/>
                Sweep Picking</label><br/><br/>

            <div style = {{textAlign: "center"}}>  
                <button style = {Button} onClick = {CalcResult}>Calculate Result</button>
            </div>
        </div>

        <div style = {BoxResults}>
            <h3 style = {header}>Results</h3>
            <p>You are {starterper}% Starter</p>
            <p>You are {beginnerper}% Beginner</p>
            <p>You are {intermediateper}% Intermediate</p>
            <p>You are {advancedper}% Advanced</p>
            <div style = {{textAlign: "center"}}>
                <button style = {Button} onClick={StartAgain}>Start Again</button>
            </div>
        </div>
        </>
    );
}