// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const images = Array.from({ length: 64 }, (_, i) => i + 1);

  const containerStyle = {
    textAlign: 'center',
    height: '100vh',
    overflow: 'hidden',
    // marginTop: '-51px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(45px, .5fr))',
    gridAutoRows: '50vh', // Each row of images will be 50% of the viewport height
    // marginTop: '-40px',
    // height: '100vh',
    // overflow: 'hidden',
  };

  const photoStyle = {
    width: '100%',   // Full width of each grid cell
    height: '100%',  // Full height of each grid cell (50vh)
    objectFit: 'cover',
  };

  const wordStyle = {
    position: 'absolute',
    top: '45%',
    left: '53%',
    transform: 'translate(-50%, -50%)',
    
  };
  const nameStyle = {
    width: '1600px', // Adjust as needed for a smaller container
    height: '300px', // Adjust as needed
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
  };
  const homeStyle = {
    width: '140px',
    height: '80px',
    position: 'absolute',
    top: '53%',
    left: '24%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',

  };
  const meStyle = {
    width: '130px',
    height: '80px',
    position: 'absolute',
    top: '50%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',

  };
  const photosStyle = {
    width: '130px',
    height: '80px',
    position: 'absolute',
    top: '49%',
    left: '58%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',

  };
  const apStyle = {
    width: '130px',
    height: '80px',
    position: 'absolute',
    top: '50%',
    left: '41%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',

  };
  


  return (
    <div style={containerStyle}>
        <div style={wordStyle}>
      
          <img
           
            src={require(`../image/name.jpg`)}
            alt={`Name`}
            style={nameStyle}
            
          />
          
       
      </div>
      <Link to="/">
        <img
          src={require(`../image/home.jpg`)}
   
          style={homeStyle}
         
        />
      </Link>
      <Link to="/me">
        <img
          src={require(`../image/me.jpg`)}
 
          style={meStyle}
         
        />
      </Link>
      <Link to="/photos">
        <img
          src={require(`../image/photos.jpg`)}
        
          style={photosStyle}
         
        />
      </Link>
      <Link to="/ap">
        <img
          src={require(`../image/ap.jpg`)}
        
          style={apStyle}
         
        />
      </Link>
      <div style={gridStyle}>
        {images.map((num) => (
          <img
            key={num}
            src={require(`../image/${num}.jpg`)}
            alt={`Image ${num}`}
            style={photoStyle}
            
          />
        ))}
      </div>
      
    </div>
  );
}

export default Home;
