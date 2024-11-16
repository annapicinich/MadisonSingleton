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
    width: '120px',
    height: '80px',
    position: 'absolute',
    top: '51%',
    left: '24%',
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
      <Link to="/me">
        <img
          src={require(`../image/home.jpg`)}
          alt="Home"
          style={homeStyle}
         
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
