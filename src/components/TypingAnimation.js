import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text, delayBeforeBackspace = 5000, delayBeforeTypingAgain = 2500 }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [delayElapsed, setDelayElapsed] = useState(false);
  const [typingDelayElapsed, setTypingDelayElapsed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        if (currentIndex < text.length) {
          setTypedText(prevTypedText => prevTypedText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setDelayElapsed(true), delayBeforeBackspace);
        }
      } else if (delayElapsed) {
        if (typedText.length > 0) {
          setTypedText(prevTypedText => prevTypedText.slice(0, -1));
        } else {
          setTimeout(() => setTypingDelayElapsed(true), delayBeforeTypingAgain);
          setDelayElapsed(false);
        }
      } else if (typingDelayElapsed) {
        setIsTyping(true);
        setCurrentIndex(0);
        setTypingDelayElapsed(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text, typedText, currentIndex, isTyping, delayElapsed, delayBeforeBackspace, typingDelayElapsed, delayBeforeTypingAgain]);

  return <span className="typing-animation">{typedText}</span>;
};

export default TypingAnimation;
