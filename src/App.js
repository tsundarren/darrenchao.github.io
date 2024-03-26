import React from 'react';
import './App.css';

// Importing images
import Portrait from './img/portrait.png';
import GitHub from './img/github.png';
import LinkedIn from './img/linkedin.png';
import MusicalCalculator from './img/musical-calculator.png'
import ArtWork from './img/artwork.png'
import CampusEats from './img/campus-eats.png'

// Importing React components
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
      <TitleBar /> 
      <Parallax translateY={[-20, 20]}>
        <ScrollDownArrow />

        {/* Introduction Section */}
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

            {/* Social Icons */}
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

      {/* Portfolio Section */}
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
              title="Musical Calculator"
              description={(
                <div>
                  Musical Calculator is a React passion project exploring modern web development. It combines basic arithmetic functionality with interactive piano sounds, providing users with a unique and engaging calculator experience. Users can perform calculations through mouse clicks or keyboard inputs while enjoying 19 distinct piano key sounds.
                </div>
              )}
              imageUrl={MusicalCalculator}
            />
          
            <ProjectCard
              title="ArtWork"
              description={(
                <div>
                  ArtWork, developed as part of my UNCC capstone course, showcases my technical expertise in Python Flask, MySQL, HTML5, CSS, and JavaScript. It merges social networking with digital commerce, enabling users to curate artistic portfolios and engage dynamically through likes, comments, and follows. With real-time auctions, users can commission and bid for artwork, fostering a vibrant marketplace for creative talent.
                </div>
              )}
              imageUrl={ArtWork}
            />

            <ProjectCard
              title="Campus Eats"
              description={(
                <div>
                  The UNCC 3160 Database Design and Implementation project aims to enhance the "Campus Eats" database with a robust rating system. Using MySQL, we'll integrate user ratings for restaurants and delivery drivers, empowering users to contribute insights and reviews for the Campus Eats community.
                </div>
              )}
              imageUrl={CampusEats}
            />
        </div>  
      </section>

      {/* Skill Section */}
      <Parallax translateY={[5, -5]}>
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
