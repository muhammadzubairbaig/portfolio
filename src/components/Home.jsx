import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import ReactTyped from 'react-typed';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] -mt-1 sm:mt-0'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
         <Fade left>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
         Zubair Baig
        
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>

          <ReactTyped loop
            strings={['I am a Senior Frontend Developer']}
            typeSpeed={40}
            backSpeed={100}
          />
        </h2>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>

          <ReactTyped loop
            strings={['React | Angular | Vue js | Javascript | Typescript']}
            typeSpeed={40}
            backSpeed={100}
          />
        </h2>
        </Fade>
       <Fade right>
       <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Experienced Senior Frontend Engineer offering 5 years of experience providing high-impact web solutions for diverse industry organizations.Skilled in designing,
          developing and testing multiple web based applications
        </p>
       </Fade>
        <div>
        <Fade bottom>
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={500} className='flex'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </Link>
          </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;