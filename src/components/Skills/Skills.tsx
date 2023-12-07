import React from 'react';
import SkillCategory from './SkillCategory';

const Skills = () => {
  return (
    <>
    <div className='mt-[30px]'>
      <h2 className='ml-[30px] text-[25px] my-[5px]'>MySkills</h2>
      <SkillCategory title="Languages" options={["HTML/CSS", "Javascript/Typescript", "ReactJS", "Next.js", "PHP", "Laravel"]} starArray={["★★★", "★★", "★", "★★", "★★", "★"]} />
      <SkillCategory title="Database" options={["MongoDB", "firebaseStore"]} starArray={["★","★"]} />
      <SkillCategory title="CMS" options={["WordPress", "MicroCMS", "Contentful"]} starArray={["★★", "★★", "★★"]} />
      </div>
    </>
  );
}

export default Skills;