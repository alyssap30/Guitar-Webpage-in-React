import { Item } from '../elements/Item.jsx';
import Header from '../elements/Header.jsx';

export function GuitarPage() {
    return (
        <>
        <Header page="Guitar Page"/>
        <h2>Harley Benton</h2>

          <Item name="Harley Benton TE-90FLT VW Deluxe Series" price="£160 - £170" type = "Guitar"
          ImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTXLi06o5STVRx9tjb02wmD7OMpoeK4YSk-okvy7zFA&s=10" 
          ImageAlt="White Telecaster with Humbuckers"
          buyurl = "https://tinyurl.com/yc7w999b"
          spec1 = "Chambered Ash" spec2 = "Bolt-on maple" spec3 = "" spec4 = "628mm" spec5 = "42mm" 
          spec6 = "Maple" spec7 = "Natural White" spec8 = "22" spec9 = "2 Roswell FLT-NI Alnico 2 humbuckers" 
          spec10 = "1 Volume, 1 Tone, 3-Way Toggle Switch" spec11 = ""/> 

          <Item name= "Harley Benton SC-500 WH Vintage Series" price="£140 - £150" type = "Guitar"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_36/362634/21608424_800.jpg" 
          ImageAlt= "White Les Paul"
          buyurl = "https://www.thomann.co.uk/harley_benton_sc_500_wh_vintage_series.htm"
          spec1 = "Poplar" spec2 = "Set-in Maple" spec3 = "C" spec4 = "628mm" spec5 = "43mm" 
          spec6 = "Roseacer" spec7 = "White" spec8 = "22" spec9 = "2 Vintage-style Humbuckers" 
          spec10 = "2 Volume, 2 Tone, 3-Way Toggle Switch" spec11 = "Tune-O-Matic"/>

          <Item name= "Harley Benton MS-60LH VW Vintage Series" price="£130 - £150" type = "Guitar"
          ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_33/339362/16907350_800.jpg" 
          ImageAlt = "White Mustang Guitar"
          buyurl = "https://www.thomann.co.uk/harley_benton_ms_60_vw_ltd_edition.htm"
          spec1 = "Basswood" spec2 = "Bolt-on Maple" spec3 = "" spec4 = "610mm" spec5 = "42mm Graphite" 
          spec6 = "Amaranth" spec7 = "Vintage White" spec8 = "22" spec9 = "2 Rosewell STA Alnico-5 vintage style single coils" 
          spec10 = "1 Volume, 1 Tone, On and off Slider for pickups" spec11 = "Tune-O-Matic"/>

        
          <h2>Headless Guitars</h2>

          <div className='guitarContainer'>
            <Item name= "Hils Next HN5 Headless" price="£350 - £550" type = "Guitar"
            ImageSrc = "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_60/608734/20492331_800.jpg"
            ImageAlt = "Black Hils Headless guitar"
            buyurl = "https://www.thomann.co.uk/hils_next_hn5_black.htm?gad_source=1&gad_campaignid=1581403900&gbraid=0AAAAADuDMCUAoX_d1xhGfBbHEBgsBFAbi&gclid=Cj0KCQjw5bjVBhCiARIsAJzMVnT9yPkhaqp_7Z1twzsdfN2alQm30ymAdsdmGwdlXu13GS_io3oqofYaAtsiEALw_wcB"
            spec1 = "Mahogany" spec2 = "Bolt-on Roasted Maple" spec3 = "Slim C" spec4 = "648mm" spec5 = "42mm Bone" 
            spec6 = "Rosewood" spec7 = "Satin Black" spec8 = "24" spec9 = "2 Hils Active Humbuckers" 
            spec10 = "1 Volume, 1 Tone, 3-Way Switch" spec11 = "Alchemy Headless Tremolo"/>

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