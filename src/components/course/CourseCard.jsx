// import React from 'react';

// const CourseCard = ({ title, description, url,  }) => {
//     return (
//         <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100 flex flex-col" style={{ height: '400px', width: '300px' }}>
//             <div className="p-6 flex flex-col h-full">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
//                 <p className="text-gray-600 mb-4 flex-grow">{description}</p>
//                 <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#FF6247] underline">
//                     Watch Trailer
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default CourseCard;
import React from 'react';

const CourseCard = ({ title, description, url }) => {
    // Extract the YouTube video ID from the URL
    const videoId = url.split('v=')[1];
    const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100 flex flex-col" style={{ height: '400px', width: '300px' }}>
            <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow overflow-hidden" style={{ maxHeight: '4rem', textOverflow: 'ellipsis' }}>{description}</p>
                <div className="flex justify-center mt-auto">
                    <iframe
                        className="rounded-xl"
                        width="100%"
                        height="150px"
                        src={videoEmbedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '12px' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
