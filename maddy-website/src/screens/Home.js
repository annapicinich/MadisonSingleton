// src/Home.js
import React from 'react';

function Home() {
  const images = Array.from({ length: 64 }, (_, i) => i + 1);

  const containerStyle = {
    textAlign: 'center',
    height: '99vh',
    overflow: 'hidden',
    marginTop: '-51px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(45px, 1fr))',
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
    // width: '45px',
    // height: '320px',
    fontSize: '150px',
    
    // top: '-50px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
   
    fontWeight: 'bold',
    
  };

  return (
    <div style={containerStyle}>
        <div style={wordStyle}>
            MADISON
            </div>
      <div style={gridStyle}>
        {images.map((num) => (
          <img
            key={num}
            src={require(`../image/${num}.jpg`)}
            alt={`Image ${num}`}
            style={photoStyle}
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.filter = 'brightness(0.7)';
            //   e.currentTarget.style.opacity = '0.9';
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.style.filter = 'brightness(1)';
            //   e.currentTarget.style.opacity = '1';
            // }}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Home;
