import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='pt-[170px] pb-[250px] space-y-[250px]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div>
                    <div className='flex flex-col justify-center text-center lg:text-left'>
                        <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold header-landing text-baseContent'>
                            Learn To Code
                            <br />
                            <span>
                                {' '}&&{' '}
                                <span className='underline decoration-[#FF6247] decoration-wavy underline-offset-8'>
                                    Have Fun
                                </span>
                            </span>
                            <br />
                            Doing It
                        </h1>
                        <p className='py-[16px] font-medium text-xl text-gray-600'>
                            Build beautiful apps & websites with easy to follow tutorials
                        </p>
                        <div>
                            <Link 
                                to="/courses" 
                                className='inline-block px-20 py-3 font-medium text-white bg-[#FF6247] rounded-lg shadow-md hover:bg-[#e55343]'
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center md:h-full'>
                    <div className='mockup-window bg-[#0F0F0F] border-2 border-slate-100/20 w-full max-w-[1060px] shadow-xl'>
                        <div className='flex items-center justify-center'>
                            <iframe
                                className='w-full aspect-video'
                                src='https://player.vimeo.com/video/940121640?muted=1&loop=1&autopause=0'
                                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                frameBorder='0'
                                title='Introduction Video'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
