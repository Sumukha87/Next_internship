"use client"

import Image from 'next/image';
import '../styles/styles.css'
import Link from 'next/link';
import CopyToClipboard from './CopyToClip';
const Section = () => {
  return (
    <div className='main_flex'>
    <div className="container">
      
      <div className="section">
        <div className="image">
          <Image className='first_img' width={800} height={500} src="/pic1.png" alt="Image 1"  />
        </div>
        <div className="text">
          <h2 className='hed'>Far far away, behind the word mountains</h2>
          <p className='hed'>August 15, 20192 min read  1  318</p>
          <br></br>
          <p className='para'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
<br></br>
<br></br>
Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
<br></br>
<br></br>
A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
        <br></br>
<br></br>
        <Image className='second_img' src="/pic4.png" width={700} height={400}/>
        <p className='para'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli,<br></br><br></br> but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
<br></br>
<br></br>
<br></br>
Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
<br></br>
<br></br>
A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<br></br>
<br></br>
<p className='para'>She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
<br></br>
<br></br>
<div className="image-grid">
  
      <div className="image-container">
      <Link href="/">
        <Image src="/pic5.png" alt="Image 1" width={250} height={200} /> </Link>
      </div>
      <div className="image-container">
      <Link href="/">
        <Image src="/pic4.png" alt="Image 2" width={250} height={200} /></Link>
      </div>
      <div className="image-container">
      <Link href="/">
        <Image src="/pic3.png" alt="Image 3" width={250} height={200} /></Link>
      </div>
     
      </div>
      <br></br>
<br></br><br></br>
<br></br>
      <Image className='third_img' src="/pic3.png" width={700} height={400}/>
      <br></br>
<br></br><br></br>
<br></br>
<h2 className='hed'>Little Blind Text</h2>
      <p className='para'>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.

The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.</p>
    
     <ul className='para1'>
     <br></br>
<br></br>
      <li>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her,</li><br></br>
<br></br>
      <li>Made her drunk with Longe and Parole and dragged her into their agency.</li><br></br>
<br></br>
      <li>
      Where they abused her for their projects again and again.
      </li>
     </ul>
     <Image className='fourth_img1' src="/pic5.png" width={700} height={400}/>
     <h2 className='hed'>Bookmarksgrove</h2>  <br></br>
<br></br>
     <p className='para'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
     <br></br>
<br></br>
It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
<br></br>
<br></br>
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p><br></br>
<br></br>
<p className='italic'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline</p>
<br></br>
<br></br>

<br></br>
<h3 className='hed'>Tagged in: Country, Image</h3><br></br>
<br></br>
<hr></hr>
<div >
<h3 className='hed'>Share the Article</h3>

<img className='soci' src='/com_soc.png'/>
</div>
<br></br>
<div className='copy'>
  
<CopyToClipboard/></div>
      </div>
     
      
      
      <div>
      
      </div>
     
    </div>
    </div>
  );
};

export default Section;
