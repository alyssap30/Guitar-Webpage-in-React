import Guitars from '../elements/Guitars.jsx';
import Header from '../elements/Header.jsx';

export function GuitarPage() {
    return (
        <>
        <Header page="Guitar Page"/>
        <div id="gibson">

          <h2>Gibson</h2>

          <Guitars name="Gibson Les Paul" price="£1600" 
          ImageSrc = "https://m.media-amazon.com/images/I/51Bck9-Au+L.jpg" 
          ImageAlt="Sunburst Les Paul Guitar"
          buyurl = "https://tinyurl.com/yc7w999b"/> 

          <Guitars name= "Gibson SG Standard" price="£1300" 
          ImageSrc = "https://r2.gear4music.com/media/60/604503/600/preview.jpg" 
          ImageAlt=" Red SG Standard Guitar"
          buyurl = "https://tinyurl.com/3c7u333v"/>

          <Guitars name= "Gibson 80s Explorer" price="£1900" 
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_56/561980/18040512_800.jpg" 
          ImageAlt = "Black 80s Explorer Guitar"
          buyurl = "https://tinyurl.com/4fxnc3t8"/>
        </div>

        <div id="fender">
          <h2>Fender</h2>

          <Guitars name= "Fender Stratocaster" price="£500" 
          ImageSrc = "https://m.media-amazon.com/images/I/61Z01+68f8L.jpg"
          ImageAlt = "Sunburst Stratocaster Guitar"
          buyurl = "https://tinyurl.com/msermru9"/>

          <Guitars name= "Fender Telecaster" price="£700" 
          ImageSrc = "https://rvb-img.reverb.com/image/upload/s--bJ5OwHUj--/t_card-square/v1529421711/r8befer5k6tuhp1fhts0.png"
          ImageAlt = "Yellow Telecaster Guitar"
          buyurl = "https://tinyurl.com/48zuxkvr"/>

          <Guitars name= "Fender Mustang" price="£600" 
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/595119/19262898_800.jpg"
          ImageAlt = "Blue Mustang Guitar"
          buyurl= "https://tinyurl.com/36fdfbkx"/>
        </div>

        <div id="ibanez">
          <h2>Ibanez</h2>

          <Guitars name = "Ibanez JEMJRL-WH" price = "£440"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_35/356025/10109671_800.jpg"
          ImageAlt = "White Ibanez JEMJRL-WH Guitar"
          buyurl = "https://www.thomann.co.uk/ibanez_jemjr_wh.htm"/>

          <Guitars name = "Ibanez TOD10-MM Tim Henson" price = "£1400"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_59/597438/19349671_800.jpg"
          ImageAlt = "Ibanez TOD10-MM Tim Henson guitar"/>

          <Guitars name = "Ibanez ICHI10-VWM" price = "£875"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_52/523689/19282411_800.jpg"
          ImageAlt = "Headless Ibanez ICHI10-VWM guitar"/>
        </div>
        <br/>
      
      </>
    );
}