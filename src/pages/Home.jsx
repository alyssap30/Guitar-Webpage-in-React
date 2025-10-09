import Header from "../elements/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Discover from "../elements/Discover";

export function Home() {
    return (
        <>
            <Header page="Home Page" />
            <h3>Discover</h3>
            <Discover ImageSrc = "https://cdn05.zipify.com/hKpvoF2xisBtUgZ3EnDYccGb3OA=/fit-in/3840x0/7c8dbdd4d821406aa38ea890e31178fc/electric-guitar-buying-guide.jpeg"
            text = "Choose the right guitar for you!"/>

            <Discover ImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_V8mWehHxKFrMBkzd0tXZNEnZhGGt5V-Dg&s" 
            text = "Find your unique sound!"/><br/>

            <Discover ImageSrc = "https://learn-2-play-guitar.com/wp-content/themes/live-music/images/maingraphic.jpg"
            text = "Improve your guitar skills no matter your level"/>

        </>
    );
}