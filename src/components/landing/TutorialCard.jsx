import { Link } from 'react-router-dom';

function TutorialCard({ title, description, url }) {
  const videoId = new URL(url).searchParams.get('v');

  return (
    <div className="block bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative h-48">
        {videoId ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-700">
            No video available
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#FF6247] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
}

export default TutorialCard;