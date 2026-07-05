import { Item } from '../elements/Item.jsx';
import Header from '../elements/Header.jsx';

export function GuitarPage() {
    return (
        <>
        <Header page="Guitar Page"/>
        <div id="gibson">

          <h2>Gibson</h2>

          <Item name="Gibson Les Paul" price="£1600" type = "Guitar"
          ImageSrc = "https://m.media-amazon.com/images/I/51Bck9-Au+L.jpg" 
          ImageAlt="Sunburst Les Paul Guitar"
          buyurl = "https://tinyurl.com/yc7w999b"
          spec1 = "Mahogany" spec2 = "Mahogany" spec3 = "Slim Taper" spec4 = "628mm" spec5 = "43mm Graphtech" 
          spec6 = "Rosewood" spec7 = "Vintage Bourbon Burst" spec8 = "22" spec9 = "2 60s Burstbucker Humbuckers" 
          spec10 = "2 Volume, 2 Tone, 3-Way Toggle Switch" spec11 = "Tune-O-Matic"/> 

          <Item name= "Gibson SG Standard" price="£1300" type = "Guitar"
          ImageSrc = "https://r2.gear4music.com/media/60/604503/600/preview.jpg" 
          ImageAlt=" Red SG Standard Guitar"
          buyurl = "https://tinyurl.com/3c7u333v"
          spec1 = "Mahogany" spec2 = "Mahogany" spec3 = "Rounded" spec4 = "628mm" spec5 = "43mm Graphtech" 
          spec6 = "Rosewood" spec7 = "Heritage Cherry" spec8 = "22" spec9 = "2 Humbuckers" 
          spec10 = "2 Volume, 2 Tone, 3-Way Toggle Switch" spec11 = "Tune-O-Matic"/>

          <Item name= "Gibson 80s Explorer" price="£1900" type = "Guitar"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_56/561980/18040512_800.jpg" 
          ImageAlt = "Black 80s Explorer Guitar"
          buyurl = "https://tinyurl.com/4fxnc3t8"
          spec1 = "Mahogany" spec2 = "Mahogany" spec3 = "Slim Taper" spec4 = "628mm" spec5 = "43mm Graphtech" 
          spec6 = "Rosewood" spec7 = "Black Ebony" spec8 = "22" spec9 = "2 80s Tribute Humbuckers" 
          spec10 = "2 Volume, 1 Tone, 3-Way Toggle Switch" spec11 = "Tune-O-Matic"/>
        </div>

        <div id="fender">
          <h2>Fender</h2>

          <Item name= "Fender Stratocaster" price="£500" type = "Guitar"
          ImageSrc = "https://m.media-amazon.com/images/I/61Z01+68f8L.jpg"
          ImageAlt = "Sunburst Stratocaster Guitar"
          buyurl = "https://tinyurl.com/msermru9"
          spec1 = "Poplar" spec2 = "Maple" spec3 = "Modern C" spec4 = "648mm" spec5 = "42.86mm Micarta" 
          spec6 = "Rosewood" spec7 = "3 Colour Sunburst" spec8 = "21" spec9 = "3 Single-Coil Pickups" 
          spec10 = "1 Master Volume, 2 Tone, 5-Way Switch" spec11 = "Vintage-Style Synchronized Tremolo"/>

          <Item name= "Fender Telecaster" price="£700" type = "Guitar"
          ImageSrc = "https://rvb-img.reverb.com/image/upload/s--bJ5OwHUj--/t_card-square/v1529421711/r8befer5k6tuhp1fhts0.png"
          ImageAlt = "Yellow Telecaster Guitar"
          buyurl = "https://tinyurl.com/48zuxkvr"
          spec1 = "Ash" spec2 = "Maple" spec3 = "Modern C" spec4 = "648mm" spec5 = "42mm Synthetic Bone" 
          spec6 = "Maple" spec7 = "Butterscotch Blonde" spec8 = "22" spec9 = "2 Single-Coil Pickups" 
          spec10 = "1 Master Volume, 1 Master Tone, 3-Way Switch" spec11 = "6-Saddle String-Through-Body Hardtail"/>

          <Item name= "Fender Mustang" price="£600" type = "Guitar"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/595119/19262898_800.jpg"
          ImageAlt = "Blue Mustang Guitar"
          buyurl= "https://tinyurl.com/36fdfbkx"
          spec1 = "Alder" spec2 = "Maple" spec3 = "Modern C" spec4 = "609mm" spec5 = "42mm Synthetic Bone" 
          spec6 = "Rosewood" spec7 = "Aquatone Blue" spec8 = "22" spec9 = "2 Single-Coil Pickups" 
          spec10 = "1 Master Volume, 1 Master Tone, 3-Way Switch" spec11 = "6-Saddle String-Through-Body Hardtail"/>
        </div>

        <div id="ibanez">
          <h2>Ibanez</h2>

          <Item name = "Ibanez JEMJRL-WH" price = "£440" type = "Guitar"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_35/356025/10109671_800.jpg"
          ImageAlt = "White Ibanez JEMJRL-WH Guitar"
          buyurl = "https://www.thomann.co.uk/ibanez_jemjr_wh.htm"
          spec1 = "Meranti" spec2 = "Maple" spec3 = "Wizard III" spec4 = "648mm" spec5 = "" 
          spec6 = "Jatoba" spec7 = "White" spec8 = "24" spec9 = "2 Quantum Humbuckers, 1 Quantum Single Coil" 
          spec10 = "1 Master Volume, 1 Tone, 5-Way Switch" spec11 = "Standard double-locking tremolo Floyd Rose"/>

          <Item name = "Ibanez TOD10-MM Tim Henson" price = "£1400"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/597438/19349671_800.jpg"
          ImageAlt = "Ibanez TOD10-MM Tim Henson guitar"
          spec1 = "Basswood" spec2 = "Bolt-on Maple" spec3 = "AZ Oval C" spec4 = "648mm" spec5 = "Graph tech" 
          spec6 = "Ebony" spec7 = "Metallic Mauve" spec8 = "24" spec9 = "2 Fishman Fluence Tim Henson Signature Series" 
          spec10 = "Volume and tone control with push/pull function" spec11 = ""/>

          <Item name = "Ibanez ICHI10-VWM" price = "£875" type = "Guitar"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_52/523689/19282411_800.jpg"
          ImageAlt = "Headless Ibanez ICHI10-VWM guitar"
          spec1 = "Nyatoh" spec2 = "Bolt-on Maple" spec3 = "Wizard C" spec4 = "648mm" spec5 = "Plastic" 
          spec6 = "Roasted birdseye maple" spec7 = "Vintage White Matte" spec8 = "24" spec9 = "3 S1 single coils" 
          spec10 = "Volume and tone controls" spec11 = "Ibanez Mono-Tune"/>
        </div>
        <br/>
      
      </>
    );
}