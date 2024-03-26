import { useEffect } from 'react';
import './NightSky.css'; // Import CSS file with styles for NightSky component

const NightSky = () => {
  useEffect(() => {
    // Initialize the night sky component
    const nightSky = document.createElement('night-sky');
    nightSky.id = 'nightSky';
    nightSky.layers = '4';
    nightSky.density = '50';
    nightSky.velocityX = '0';
    nightSky.velocityY = '50';
    nightSky.starColor = '#fff';
    nightSky.backgroundColor = 'transparent';
    
    // Append the night sky component to the body
    document.body.appendChild(nightSky);
    
    return () => {
      // Cleanup: remove the night sky component when the component is unmounted
      document.body.removeChild(nightSky);
    };
  }, []);

  return null; // NightSky doesn't render any JSX directly
};

export default NightSky;
