import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text, delayBeforeBackspace = 5000, delayBeforeTypingAgain = 2500 }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // State to track typing/backspacing
  const [delayElapsed, setDelayElapsed] = useState(false); // State to track delay before backspacing
  const [typingDelayElapsed, setTypingDelayElapsed] = useState(false); // State to track delay before typing again

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        // Typing mode
        if (currentIndex < text.length) {
          setTypedText(prevTypedText => prevTypedText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          setIsTyping(false); // Switch to backspacing mode
          setTimeout(() => setDelayElapsed(true), delayBeforeBackspace); // Set delay before backspacing
        }
      } else if (delayElapsed) {
        // Backspacing mode after delay
        if (typedText.length > 0) {
          setTypedText(prevTypedText => prevTypedText.slice(0, -1)); // Remove last character
        } else {
          setTimeout(() => setTypingDelayElapsed(true), delayBeforeTypingAgain); // Set delay before typing again
          setDelayElapsed(false); // Reset delay state
        }
      } else if (typingDelayElapsed) {
        // Delay before typing again
        setIsTyping(true); // Switch to typing mode
        setCurrentIndex(0); // Reset index for next typing cycle
        setTypingDelayElapsed(false); // Reset typing delay state
      }
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(timer); // Cleanup function to clear interval on component unmount
  }, [text, typedText, currentIndex, isTyping, delayElapsed, delayBeforeBackspace, typingDelayElapsed, delayBeforeTypingAgain]);

  return <span className="typing-animation">{typedText}</span>;
};

export default TypingAnimation;
