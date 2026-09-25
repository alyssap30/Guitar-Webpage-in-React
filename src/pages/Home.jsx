import Header from "../elements/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Discover from "../elements/Discover";
import { Quiz } from "../elements/Quiz"

export function Home() {
    const CardStyle = {
        backgroundColor: "white",
        width: "92%",
        boxSizing: "border-box",
        maxWidth: "950px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px 10px",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        display: "inline-block"};

    return (
        <>
            <Header page="Home Page" />

            <div style = {CardStyle}>
                <h2>About me + Why I Started this Project</h2>
                <h3>About me</h3>
                <p>I'm a guitarist of 8 years, I started with acoustic guitar where I learnt the basics of guitars e.g basic riffs and chords. As time went on I was moving 
                    into my teenage years and started getting an interest in indie rock music with bands such as the Arctic Monkeys. Throughout my journey I started with 
                    lessons for the first 6 years and got to a mid grade 3 to early grade 4 level on electric guitar</p>
                <p>Currently 2 years into being fully self-taught I found I struggled finding out what to learn to get better and had many phases of not picking up the 
                    guitar for months and I only really developed into an early grade 4 guitarist after 1 and a half years. I tryed online courses, youtube videos and books 
                    but nothing really motivated me enough.</p>
                <p>During this summer I found a trick and worked out how I keep myself motivated with guitar which is through structure and have a whole lot of time on my hands this summer.
                    I was practicing everyday for 1.5 hours and I moved up to mid grade 6 within a month. Don't get me wrong my fingers hurt so bad and were cut and blistered up which stopped 
                    my motivation streak but the main point is how much progress I made in such little time with the help of structure.
                </p>
                <h3>Why I Started this Project</h3>
                <p>I'm a computing student and I orginally started this website to learn the React.js framework and make it as a great porfolio piece that I have shown at 
                    pretty much every tech interview I go to. Then I had a random thought, I was thinking about how other guitars are likely to have fallen into the same 
                    rabbit hole I have so this is not only something I'm using in attempt of impressing recuiters it's also something I hope helps other guitars to find 
                    direction and structure in their guitar practice.</p>
            </div>
            <h2>My aims for this webpage</h2>
            <Discover ImageSrc = "https://cdn05.zipify.com/hKpvoF2xisBtUgZ3EnDYccGb3OA=/fit-in/3840x0/7c8dbdd4d821406aa38ea890e31178fc/electric-guitar-buying-guide.jpeg"
            text = "Helping you choose the right guitar for you!"/>

            <Discover ImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_V8mWehHxKFrMBkzd0tXZNEnZhGGt5V-Dg&s" 
            text = "Finding your unique sound!"/><br/>

            <Discover ImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxS60FdNhm7tKTliviKqdHIlZ3S7oX3wMcVCI6YdZZ3w&s=10"
            text = "Improve your guitar skills no matter your level"/>

            <Discover ImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpD6mfd8dntM-3MaVcU2nLzVHbnfUydYJOx37qNS0-A&s=10"
            text = "Last of all having fun and enjoying playing guitar!"/>

            <h2>Guitar skills quiz</h2>
            <Quiz/>
        </>
    );
}