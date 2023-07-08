"use client"
import { useState } from 'react';
import '../styles/button.css'
const SearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for:', searchText);
    setSearchText('');
    togglePopup();
  };

  return (
    <div>
        <div className='first_icons'>
          
        <img className='icon' src='/twi.gif'/>
        <img className='icon' src='face.gif'/>
        <img className='icon' src='insta.gif'/>
        <img className='logo' src='/maktub-logo.png'/>
        </div>
      <button className='search_but' onClick={togglePopup}><img className='img' src='/search.png'/></button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter your search query"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SearchPopup;
