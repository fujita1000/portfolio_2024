import React from 'react';
import SkillCategory from './SkillCategory';

const Skills = () => {
  return (
    <>
      <SkillCategory title="Languages" options={["HTML/CSS", "Javascript/Typescript", "ReactJS", "Next.js", "PHP", "Laravel"]} starArray={["★★★", "★★", "★", "★★", "★★", "★"]} />
      <SkillCategory title="Database" options={["MongoDB", "firebaseStore"]} starArray={["★","★"]} />
      <SkillCategory title="CMS" options={["WordPress", "MicroCMS", "Contentful"]} starArray={["★★", "★★", "★★"]} />
    </>
  );
}

export default Skills;