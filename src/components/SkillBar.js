import React from 'react';
import './SkillBar.css';

const SkillBar = ({ skill, width }) => {
  return (
    <div className="SkillBar">
      <div className="SkillBarFill" style={{ width: `${width}%` }}></div>
      <span className="SkillName">{skill}</span>
    </div>
  );
};

export default SkillBar;
