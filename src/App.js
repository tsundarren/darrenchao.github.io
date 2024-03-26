import React from 'react';
import './App.css';

// img Imports
import Portrait from './img/portrait.png';
import GitHub from './img/github.png';
import LinkedIn from './img/linkedin.png';
import MusicalCalculator from './img/Musical.png'
import MusicalCalcPreview from './img/musicalcalc.gif'
import ArtWork from './img/ArtWork.png'
import ArtWorkPreview from './img/artwork.gif'
import CampusEats from './img/CampusEats.png'
import CampusEeatsPreview from './img/campuseatspreview.png'

// Component Imports
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import TypingAnimation from './components/TypingAnimation';
import ProjectCard from './components/ProjectCard';
import ScrollDownArrow from './components/ScrollDownArrow';
import SkillBar from './components/SkillBar';
import TitleBar from './components/TitleBar'

function App() {
  
  return (
    <ParallaxProvider>
    <div id="home" className="App">
    <TitleBar /> {/* Add the TitleBar component */}
      <Parallax translateY={[-20, 20]}>
        {/* Intro Container */}
        <ScrollDownArrow />
        <section className="Introduction">
          <header className="App-header">
            <div className="IntroductionContent">
              <div className="IntroductionText">
                <p style={{ fontFamily: 'Source Code Pro, sans-serif', fontSize: '12pt', color: '#bae6fd' }}>Hi! My name is</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '48pt', color: '#bae6fd' }}>Darren Chao</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '32pt', color: '#0e7490' }}>
                  <TypingAnimation text="An aspiring software dev." />
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400', fontSize: '12pt', color: '#0e7490', marginTop: '20px' }}>Hello, I'm Darren! I'm a recent graduate from the University of North Carolina at Charlotte, holding a Bachelor of Science degree in Computer Science. My fascination with computer science began at a young age when I was introduced to basic HTML in elementary school. Back then, I started by creating simple websites for my classmates, and this early exposure ignited my passion for the field. Ever since those initial experiences, I've been captivated by the world of computer science.</p>
              </div>
              <img src={Portrait} className="Portrait" alt="me" />
            </div>

            <div className="Social">
              <Parallax translateY={[0, -75]}>
                <a href="https://GitHub.com/tsundarren" target="_blank" rel="noopener noreferrer">
                  <img src={GitHub} alt='GitHub' className='icon' />
                </a>
                <a href="https://www.LinkedIn.com/in/darrenmond-chao-13685919a/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedIn} alt='LinkedIn' className='icon' />
                </a>
              </Parallax>
            </div>
          </header>
        </section>
      </Parallax>


      {/* Portfolio Container */}
      <section id="portfolio" className="PortfolioSection">
      <div id="nightSky" className="NightSky">
          <night-sky
            id="nightSky"
            layers="4"
            density="3"
            velocity-x="0"
            velocity-y="60"
            star-color="#FFF"
            background-color="transparent"
          ></night-sky>
      </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <h2 className="SectionTitle">MY PROJECTS</h2>
          <hr className="Divider"/>
        </div>
        <div className="Portfolio">
            <ProjectCard
              id="MusicalCalculator"
              title="Musical Calculator"
              description={(
                <div>
                  Musical Calculator is a creative React passion project aimed at exploring modern web development technologies. Through this project, I sought to delve into React and associated libraries to create a unique and engaging user experience. <br /> <br />

                  The core functionality of Musical Calculator focuses on basic arithmetic calculations, utilizing existing context API logic for seamless performance. What sets this project apart is its integration of musical elements, providing users with an interactive and unconventional calculator experience. <br /> <br />

                  By leveraging React's functional event handlers, Musical Calculator allows users to input data through both mouse clicks and keyboard interactions. Additionally, users can enjoy playing a set of 19 distinct piano key sounds alongside performing calculations.
                </div>
              )}
              imageUrl={MusicalCalculator}
              preview={MusicalCalcPreview}
              link='https://github.com/tsundarren/musical-calculator'
            />
          
            <ProjectCard
              id="ArtWork"
              title="ArtWork"
              description={(
                <div>
                  ArtWork represents the culmination of my undergraduate journey at UNCC, developed as part of the capstone course. This project showcases my technical skills in integrating Python Flask, MySQL, HTML5, CSS, and JavaScript. <br /> <br />

                  Operating at the intersection of social networking and digital commerce, ArtWork empowers users to curate their artistic portfolios through expressive posts. By leveraging frontend and backend technologies, ArtWork fosters dynamic interactions, allowing users to engage with each other's creations through likes, comments, and follows. <br /> <br />

                  Users can explore comprehensive portfolios on individual profile pages, offering a glimpse into each artist's style and creations. The real-time auction feature serves as a vibrant marketplace where users can commission and bid for artwork, enticing others to vie for their talents.
                </div>
              )}
              imageUrl={ArtWork}
              preview={ArtWorkPreview}
              link='https://github.com/tsundarren/artwork'
            />

            <ProjectCard
              id="CampusEats"
              title="Campus Eats"
              description={(
                <div>
                  This UNCC 3160 Database Design and Implementation project seeks to enhance the existing "Campus Eats" database by integrating a robust rating system. <br /> <br />

                  Using MySQL, we aim to expand the database's functionality by incorporating user ratings for both restaurants and delivery drivers. <br /> <br />

                  Our goal is to provide users with the ability to contribute valuable insights and reviews, thereby improving the overall experience for the Campus Eats community.
                </div>
              )}
              imageUrl={CampusEats}
              preview={CampusEeatsPreview}
              link='https://github.com/tsundarren/3160-Database-Project'
            />
        </div>  
      </section>

      {/* Skills Container */}
      <Parallax translateY={[-5, 5]}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
          <h2 className="SectionTitle">MY SKILL</h2>
          <hr className="Divider"/>
        </div>
        <section id="skill" className="SkillSection">
          <div className="SkillInfo">
            <p>"With the foundational knowledge from university, I honed these skills through a blend of structured courses and self-directed learning."</p>
          </div>
          <div className="SkillList">
            <SkillBar skill="Java" width={80} />
            <SkillBar skill="Python" width={65} />
            <SkillBar skill="React" width={40} />
            <SkillBar skill="SQL" width={60} />
          </div>
        </section>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
