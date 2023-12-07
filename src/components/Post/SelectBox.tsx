import Image from "next/image";
import { useEffect } from 'react';

interface DropDownFrom {
  languages: any;
  database: any;
  cms: any;
  onChangeLanguages: (event: any) => void;
  onChangeDatabase: (event: any) => void;
  onChangeCms: (event: any) => void;
}

const SelectBox = ({ onChangeLanguages, onChangeDatabase, onChangeCms }: DropDownFrom) => {
  useEffect(() => {});

  const renderSelectBox = (label: string, name: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: { value: string; label: string }[]) => (
    <label className='mt-[3px] w-[33%]'>
      <h2 className='text-1xl text-center md:text-[30px] 2xl:text-[40px] text-white'>
        {label}
      </h2>
      <form className='relative -mt-[10px]  -mb-[20px] h-11 w-full hover:opacity-60'>
        <div className='absolute inset-y-2/4 left-[10px] md:left-[15px]'>
          <div className='relative hidden h-[30px] w-[30px] md:flex md:h-[40px] md:w-[40px]  2xl:h-[50px]  2xl:w-[50px]'>
            <Image src={'down.svg'} alt='select画像' layout='fill' objectFit='contain' />
          </div>
        </div>
        <div>
          <select
            className='text-1xl my-4 h-[40px] w-full border border-solid border-skills_border bg-select_bg indent-[15px] text-white  md:h-[50px] md:indent-[70px] md:text-[25px] xl:indent-[100px] 2xl:h-[60px] 2xl:text-[35px] '
            name={name}
            id={name}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </label>
  );

  return (
    <>
      <div className='relative flex justify-center'>
        <div className='mb-10 flex w-full justify-between'>
          {renderSelectBox('Languages', 'languages', onChangeLanguages, [
            { value: '', label: 'ALL' },
            { value: 'HTML/CSS', label: 'HTML/CSS' },
            { value: 'Javascript', label: 'Javascript' },
            { value: 'ReactJS', label: 'ReactJS' },
            { value: 'Next.js', label: 'Next.js' },
            { value: 'php', label: 'PHP' },
            { value: 'Laravel', label: 'Laravel' },
          ])}
          
          {renderSelectBox('Database', 'database', onChangeDatabase, [
            { value: '', label: 'ALL' },
            { value: 'mongodb', label: 'MongoDB' },
            { value: 'firebase', label: 'firebase' },
          ])}
          
          {renderSelectBox('CMS', 'cms', onChangeCms, [
            { value: '', label: 'ALL' },
            { value: 'wordpress', label: 'WordPress' },
            { value: 'MicroCMS', label: 'MicroCMS' },
            { value: 'Contentful', label: 'Contentful' },
          ])}
        </div>
      </div>
    </>
  );
};

export default SelectBox;