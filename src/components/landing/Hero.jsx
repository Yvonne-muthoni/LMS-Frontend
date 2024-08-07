import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Skeleton, useToast } from '@chakra-ui/react';

function Hero() {
    const [featuredCourse, setFeaturedCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
        const fetchFeaturedCourse = async () => {
            setLoading(true); // Ensure loading is true when fetching starts
            try {
                // Simulating a delay to see the skeleton effect
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                const response = await axios.get('http://localhost:5001/courses');
                setFeaturedCourse(response.data[0] || null); // Use the first course for demonstration
            } catch (error) {
                console.error('Error fetching featured course:', error);
                toast({
                    title: 'Error',
                    description: 'There was a problem fetching the featured course.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                setFeaturedCourse(null);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedCourse();
    }, [toast]);

    const getYouTubeVideoId = (url) => {
        if (!url) return null;
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

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
                    <div className='mockup-window border-2 border-slate-100/20 w-full max-w-[1060px] shadow-xl rounded-xl'>
                        <div className='relative pb-[56.25%] w-full h-0 overflow-hidden rounded-xl'>
                            {loading ? (
                                <Skeleton height="100%" width="100%" borderRadius="xl" position="absolute" top="0" left="0" />
                            ) : featuredCourse ? (
                                <iframe
                                    className='absolute top-0 left-0 w-full h-full rounded-xl'
                                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(featuredCourse.video)}`}
                                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    frameBorder='0'
                                    title='YouTube video'
                                ></iframe>
                            ) : (
                                <p className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white'>No featured course available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
