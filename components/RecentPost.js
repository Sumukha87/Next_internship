import Image from 'next/image';
import { useState } from 'react';
import '../styles/styles.css'
import Link from 'next/link';
const RecentPosts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
   <div className='all_recent'>
    <Link href="/" style={{ textDecoration: 'none' }}>
    <div className="container_recent">
        <span className='recent_head'>
        <h3>Recent Posts</h3></span>
        <span className='recent_border'></span>
    
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent' 
        >
          <Image src="/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-original.png" alt="Post 1" width={70} height={80} />
        </div>
        <div className={`text_recent ${hoveredIndex === 0 ? 'under' : ''}`}>
          <h3>The spectacle before us was indeed sublime</h3>
          <p>July 26, 2019</p>

        </div>
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <Image src="/pic2.png" alt="Post 1" width={70} height={80} />
        </div>
        <div className={`text_recent ${hoveredIndex === 0 ? 'under' : ''}`}>
          <h3>Post 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <Image src="/pic3.png" alt="Post 1" width={70} height={80} />
        </div>
        <div className={`text_recent ${hoveredIndex === 0 ? 'under' : ''}`}>
          <h3>Post 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <Image src="/pic4.png" alt="Post 1" width={70} height={80} />
        </div>
        <div className={`text_recent ${hoveredIndex === 0 ? 'under' : ''}`} >
          <h3>Post 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
     
    </div>
    
      
     
    
    </Link>
    <br></br>
    <br></br>
    <div className="container_recent1">
        <span className='recent_head'>
        <h3>Social</h3></span>
        <span className='recent_border'></span>
        <br></br>
    <br></br>
    
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent' 
        >
          <Image src="/facebook-square.svg" alt="Post 1" width={70} height={80} />
        </div>
       
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <Image src="/square-twitter.svg" alt="Post 1" width={70} height={80} />
        </div>
       
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <Image src="/square-instagram.svg" alt="Post 1" width={70} height={80} />
        </div>
        
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <Image src="/square-envelope-solid.svg" alt="Post 1" width={70} height={80} />
        </div>
        
      </div>
      </div>
      <div className="container_recent2">
        <span className='recent_head'>
        <h3>Tags</h3></span>
        <span className='recent_border'></span>
        <br></br>
    <br></br>
    
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent' 
        >
          <button className='tag12'>USERS</button>
        </div>
       
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
         <button className='tag12'>OTHERS</button>
        </div>
       
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <button className='tag12'>TECHNOLOGY</button>
        </div>
        
      </div>
      <div className={`post_recent ${hoveredIndex === 0 ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}>
        <div
          className='image_recent'
        >
          <button className='tag12'>MUSIC</button>
        </div>
        
      </div>
      </div>

    
    
    
    </div>

    
  );
};

export default RecentPosts;
