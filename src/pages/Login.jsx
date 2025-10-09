import React, { useState } from 'react';
import Header from '../elements/Header.jsx';

export function Login(){
    const [FullName, setFullName] = useState("Guest");
    const [User, setUser] = useState("Unknown");
    const [DateOfBirth, setDOB] = useState("Unknown");
    const [GuitarLevel, setGuitarLevel] = useState("Not sure");

    const [Genres, setGenres] = useState ([]);
    const [NewGenre, setNewGenre] = useState("");
    const [color, setColor] = useState ("#9E9E9E");
    


    function handleChangeName(event) {
        setFullName(event.target.value)};

    function handleChangeUser(event) {
        setUser(event.target.value)};

    function handleChangeDOB(event) {
        setDOB(event.target.value)};

    function handleChangeGuitarLevel(event) {
        setGuitarLevel(event.target.value)};
    
    // Function to add a new genre to the list
    function handleSetGenre(event) {
        setNewGenre(event.target.value);
    }
    
    function AddGenre() {
        setGenres(g => [...g, NewGenre]);
        setNewGenre(""); 
    }

    function DeleteGenre(index) {
        const updatedGenres = Genres.filter((_, i) => i !== index);
        setGenres(updatedGenres);
    }

    //Colour Change Function
    function handleChangeColour(event) {
        setColor(event.target.value)};


    const myinformation = {
        backgroundColor: color,
        transition: "0.25s ease",
        width: "80%",
        display: "block",
        margin: "auto",
        textAlign: "center",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        justifyContent: "center"
    };

    const inputfield = {
        borderRadius: "8px",
        textAlign: "center"
    }

    const GenreBox = {
        backgroundColor: "white",
        color: "black",
        width: "60%",
        justifyContent: "centre",
        marginBottom: "10px"
    }

    return (
        <>
        <Header page ="Login Page"/>
        <br/>
        <div style = {myinformation}>
            <h2>My Information</h2>
            <p>Name: {FullName}</p><hr/>
            <p>Username: {User}</p><hr/>
            <p>Date of Birth: {DateOfBirth}</p><hr/>
            <p>Skill Level: {GuitarLevel}</p><hr/>
            <p>Favourite Genres</p>
            <ul className="Ul">
                {Genres.map((Genre, index) => 
                <li key={index} style = {GenreBox}>
                    <span>{Genre}</span>
                    <button className="Button" onClick={() =>DeleteGenre(index)}>Delete</button></li>)}
            </ul>
        </div><br/>

        <div style = {myinformation}>
             <h2>Change your Information</h2>
            <label>Full Name</label><br/>
            <input value = {FullName} onChange={handleChangeName} style = {inputfield}/><hr/>

            <label>Username</label><br/>
            <input value = {User} onChange={handleChangeUser} style = {inputfield}/><hr/>

            <label>Date of Birth</label><br/>
            <input value = {DateOfBirth} onChange={handleChangeDOB} type = "date" style = {inputfield}/><hr/>

            <label>Guitar Level</label><br/>
            <select value = {GuitarLevel} onChange={handleChangeGuitarLevel} style = {inputfield}>
                <option value = "Not sure">Not Sure</option>
                <option value = "Beginner">Beginner</option>
                <option value = "Intermediate">Intermediate</option>
                <option value = "Advanced">Advanced</option>
                <option value = "Professional">Professional</option>
            </select><hr/>

            <label>Favourite Genres</label><br/>
            <input id = "genreinput"
            type = "text"
            style={inputfield}
            value = {NewGenre}
            onChange={handleSetGenre}/>
            <button className="Button" onClick={AddGenre}>Add</button><br/><hr/>

            <label>Theme:</label>
            <input type = "color" value = {color} onChange={handleChangeColour} style = {inputfield}/>
        </div><br/>
        </>
    );
}
