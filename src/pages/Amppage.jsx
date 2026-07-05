import Header from "../elements/Header";
import { Item } from "../elements/Item"; 

export function Amppage() {
    return (
        <>
            <Header page="Amplifiers Page" />

            <h2>Marshall</h2>
            <Item name = "Marshall MG50GFX" price = "£260" type = "Amp"
            ImageSrc = "https://www.dawsons.co.uk/cdn/shop/files/products_2FM31-MG15GR_2FM31-MG15GR_1702367335830_496x496_crop_bottom.jpg?v=1702367347" 
            ImageAlt = "Marshall MG50GFX Amplifier" 
            buyurl="https://tinyurl.com/yrecthh8"
            spec1 = "50W" spec2 = "16.6kg"  spec3 = "Black/Gold" spec4 = "518 x 494 x 278 mm" spec5 = "4 Analog Channels" spec6 = "12 inch" 
            spec7 = "Reverb, Chorus, Flanger, Phaser, Octaver, Vibrate and Delay" spec8 = "Yes" spec9 = ""/>

            <Item name = "Marshall Code 50" price = "£225" type = "Amp"
            ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_38/380977/11576144_800.jpg"
            ImageAlt = "Marshall Code 50 Amplifier"
            spec1 = "50W" spec2 = "13kg" spec3 = "Black" spec4 = "530 x 440 x 280 mm" spec5 = "4 Digital Channels" spec6 = "12 inch" 
            spec7 = "24 Professional Effects including Reverb, Delay, Chorus, Flanger, Phaser, Tremolo and Vibrato" 
            spec8 = "Yes" spec9 = "100 Presets and Bluetooth connectivity"/>

            <Item name = "Marshall JVM410H" price = "£1235" type = "Amp"
            ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_10/108990/6859222_800.jpg"
            ImageAlt = "Marshall JVM310H Amplifier"
            spec1 = "100W" spec2 = "22kg" spec3 = "Black" spec4 = "740 x 310 x 215 mm" spec5 = "4 Channels" spec6 = "N/A - Head Unit" 
            spec7 = "Digital Reverb and Delay" spec8 = "Yes" spec9 = "Must be used with a speaker cabinet"/>

            <h2>Fender</h2>
            <Item name="Fender 65 Twin Reverb" price= "£1900" type = "Amp"
            ImageSrc= "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_15/153777/12531507_800.jpg"
            ImageAlt = "Fender 65 Twin Reverb Amplifier"
            buyurl = "https://tinyurl.com/3dwnp3fx/"
            spec1 = "85W" spec2 = "29 kg" spec3 = "Black" spec4 = "673 x 267 x 5050 mm" spec5 = "2 Channels" spec6 = "2x 12 inch" 
            spec7 = "Spring reverb and tremolo" spec8 = "Yes " spec9 = "Includes tilt-back stand"/>

            <Item name="Fender Champion II 100" price= "£310" type = "Amp"
            ImageSrc= "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/595637/19655524_800.jpg"
            ImageAlt= "Fender Champion II 100 Amplifier"
            buyurl= "https://www.thomann.co.uk/fender_champion_ii_100.htm"
            spec1 = "100W" spec2 = "18kg" spec3 = "Black" spec4 = "260 x 483 x 660 mm" spec5 = "2 Channels" spec6 = "2x 12 inch" 
            spec7 = "Reverb, Delay, Chorus, Vibratone, Tremolo and Phaser" spec8 = "Yes" spec9 = "Built-in recorder and aux input"/>

            <Item  name="Fender Mustang LT50" price= "£230" type = "Amp"
            ImageSrc= "https://m.media-amazon.com/images/I/71VdM7iD+uL._UF1000,1000_QL80_.jpg"
            ImageAlt= "Fender Mustang LT50 Amplifier"
            buyurl="https://tinyurl.com/299muenz"
            spec1 = "50W" spec2 = "9kg" spec3 = "Black" spec4 = "432 x 216 x 419 mm" spec5 = "1 Channel" spec6 = "12 inch" 
            spec7 = "20 Amp Models and 25 Effects" spec8 = "Yes" spec9 = "60 Memory slots for saving presets"/>
        </>
    );
}