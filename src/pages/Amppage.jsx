import Header from "../elements/Header";
import {Amps} from "../elements/Amps.jsx"; 

export function Amppage() {
    return (
        <>
            <Header page="Amplifiers Page" />

            <h2>Marshall</h2>
            <Amps name = "Marshall MG50GFX" price = "£260" 
            ImageSrc = "https://www.dawsons.co.uk/cdn/shop/files/products_2FM31-MG15GR_2FM31-MG15GR_1702367335830_496x496_crop_bottom.jpg?v=1702367347" 
            ImageAlt = "Marshall MG50GFX Amplifier" 
            buyurl="https://tinyurl.com/yrecthh8" />

            <Amps name = "Marshall Code 50" price = "£225"
            ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_38/380977/11576144_800.jpg"
            ImageAlt = "Marshall Code 50 Amplifier"/>

            <Amps name = "Marshall JVM410H" price = "£1235"
            ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_10/108990/6859222_800.jpg"
            ImageAlt = "Marshall JVM310H Amplifier"/>

            <h2>Fender</h2>
            <Amps name="Fender 65 Twin Reverb" price= "£1900"
            ImageSrc= "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_15/153777/12531507_800.jpg"
            ImageAlt = "Fender 65 Twin Reverb Amplifier"
            buyurl = "https://tinyurl.com/3dwnp3fx/"/>

            <Amps name="Fender Champion II 100" price= "£310" 
            ImageSrc= "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/595637/19655524_800.jpg"
            ImageAlt= "Fender Champion II 100 Amplifier"
            buyurl= "https://www.thomann.co.uk/fender_champion_ii_100.htm"/>

            <Amps name="Fender Mustang LT50" price= "£230"
            ImageSrc= "https://m.media-amazon.com/images/I/71VdM7iD+uL._UF1000,1000_QL80_.jpg"
            ImageAlt= "Fender Mustang LT50 Amplifier"
            buyurl="https://tinyurl.com/299muenz"/>
        </>
    );
}