import Image from "next/image";
import { useEffect } from 'react';

interface DropDownFrom {
  languages:any,
  database:any,
  cms:any,
  onChangeLanguages: (event: any) => void;
  onChangeDatabase: (event: any) => void;
  onChangeCms: (event: any) => void;
}
const SelectBox = ({ onChangeLanguages, onChangeDatabase, onChangeCms }: DropDownFrom) => {
  useEffect(() => {});

  return (
    <>
      <div className='relative flex justify-center'>
        <div className='mb-10 flex w-full justify-between'>
          <label className='mt-[3px] w-[390px]'>
            <h2 className='text-1xl text-white md:text-[30px] 2xl:text-[40px] text-center'>
            Languages
            </h2>
            <form className='relative -mt-[10px] h-11 w-full hover:opacity-60'>
              <div className='absolute inset-y-2/4 left-[10px] md:left-[15px]'>
                <div className='relative hidden h-[30px] w-[30px] md:flex md:h-[40px] md:w-[40px]  2xl:h-[50px]  2xl:w-[50px]'>
                  <Image
                    src={'down.svg'}
                    alt='select画像'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
              <div>
                <select
                  className='text-1xl my-4 h-[40px] w-full border border-solid border-skills_border bg-select_bg indent-[15px] text-white  md:h-[50px] md:indent-[70px] md:text-[25px] xl:indent-[100px] 2xl:h-[60px] 2xl:text-[35px] '
                  name='languages'
                  id='languages'
                  onChange={(e) => onChangeLanguages(e)}
                >
                  <option value=''> ALL </option>
                  <option value='HTML/CSS'>HTML/CSS</option>
                  <option value='Javascript'>Javascript</option>
                  <option value='ReactJS'>ReactJS</option>
                  <option value='Next.js'>Next.js</option>
                  <option value='php'>PHP</option>
                  <option value='Laravel'>Laravel</option>
                </select>
              </div>
            </form>
          </label>

          <label className='mt-[3px] w-[390px]'>
            <h2 className='text-1xl text-center md:text-[30px] 2xl:text-[40px] '>
            Database
            </h2>
            <form className='relative -mt-[10px] h-11 w-full hover:opacity-60'>
              <div className='absolute inset-y-2/4 left-[10px] md:left-[15px]'>
                <div className='relative hidden h-[30px]  w-[30px] md:flex md:h-[40px] md:w-[40px]  2xl:h-[50px]  2xl:w-[50px]'>
                  <Image
                    src={'down.svg'}
                    alt='select画像'
                    layout='fill'
                    objectFit='contain'
                    className=''
                  />
                </div>
              </div>
              <div>
                <select
                  className='text-1xl my-4 h-[40px] w-full border border-solid border-skills_border bg-select_bg indent-[15px] text-white  md:h-[50px] md:indent-[70px] md:text-[25px] xl:indent-[100px] 2xl:h-[60px] 2xl:text-[35px] '
                  name='database'
                  id='database'
                  onChange={(e) => onChangeDatabase(e)}
                >
                  <option value=''>ALL</option>
                  <option value='mongodb'>MongoDB</option>
                  <option value='firebase'>firebase</option>
                </select>
              </div>
            </form>
          </label>

          <label className='mt-[3px] w-[390px]'>
            <h2 className='text-1xl text-center text-white md:text-[30px] 2xl:text-[40px] '>
            CMS
            </h2>
            <form className='relative -mt-[10px] h-11 w-full hover:opacity-60'>
              <div className='absolute inset-y-2/4 left-[10px] md:left-[15px]'>
                <div className='relative hidden h-[30px]  w-[30px] md:flex md:h-[40px] md:w-[40px]  2xl:h-[50px]  2xl:w-[50px]'>
                  <Image
                    src={'down.svg'}
                    alt='select画像'
                    layout='fill'
                    objectFit='contain'
                    className=''
                  />
                </div>
              </div>
              <div>
                <select
             className='text-1xl my-4 h-[40px] w-full border border-solid border-skills_border bg-select_bg indent-[15px] text-white  md:h-[50px] md:indent-[70px] md:text-[25px] xl:indent-[100px] 2xl:h-[60px] 2xl:text-[35px] '
                  name='cms'
                  id='cms'
                  onChange={(e) => onChangeCms(e)}
                >
                  <option value=''>ALL</option>
                  <option value='wordpress'>WordPress</option>
                  <option value='MicroCMS'>MicroCMS</option>
                  <option value='Contentful'>Contentful</option>
                </select>
              </div>
            </form>
          </label>
        </div>
      </div>
    </>
  );
};

export default SelectBox