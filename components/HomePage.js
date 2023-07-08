"use client"

import Section from '../components/Section';
import Sidebar from '../components/Sidebar';
import '../styles/styles.css'
import AuthorCard from './AuthorCard';
import CommentSection from './CommentSection';
import CopyToClipboard from './CopyToClip';
import Footer from './Footer';
import Navbar from './Navbar';
import RecentPosts from './RecentPost';
import SearchPopup from './SearchPopup';
import SubscribeSection from './SubscribeScetion';

const HomePage = () => {
   

  return (
    <div>
        <div>
        
      
        <SearchPopup/>
      </div>
      
    
   <div>
   
    <Navbar/>
    <div className="container">
       
      <div className="content">
        <Section />
        
        <AuthorCard/>
        <br></br><br></br>
        <CommentSection/>
      </div>
      <div className="sidebar">
        <RecentPosts/>
       
      </div>
      
      
      </div>
      <SubscribeSection/>
      <Footer/>
    </div>

    </div>
  );
};

export default HomePage;
