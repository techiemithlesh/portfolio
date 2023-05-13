import React from 'react';
import { Link } from 'react-scroll';
import Image from '../asset/img/mithlesh.png';

const Hero = () => {
  return (
    <>
      <section className='bg-gray-800 text-white py-10' id='home'>
        <div className='container flex mx-auto flex-col justify-between md:flex-row items-center px-4 py-8 md:px-12 md:py-24'>
          <div className='w-full md:w-1/2'>
            <span className='text-yellow-300 pb-4'>Hello, I am</span>
            <h2 className='font-bold text-2xl tracking-wide leading-relaxed uppercase my-2 antialiased'>Mithlesh Patel</h2>
            <p className='mb-8 tracking-wide'>I am a full-stack web developer with experience in PHP LARAVEL, React, Node.js, and more.</p>
            <div className='flex flex-wrap mb-8'>
              <Link
                to='project'
                spy={true}
                smooth={true}
                duration={600}
                className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                View My Work
              </Link>
              <a
                href='https://www.linkedin.com/in/mithlesh-12/'
                target='_blank'
                rel='noreferrer'
                className='bg-transparent hover:bg-blue-500 text-yellow-300 font-semibold hover:text-white py-2 text-center px-4 border border-blue-500 hover:border-transparent rounded-full'
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className='w-full md:w-1/2 py-4 md:py-0'>
            <img className='hero_img object-cover mx-auto' src={Image} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
