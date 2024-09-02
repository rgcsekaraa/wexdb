import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface WorkoutCardProps {
  name: string;
  videoUrl: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ name, videoUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component is in view
    threshold: 0.25,   // Trigger when 25% of the component is in view
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div ref={ref} className="bg-black shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl text-white font-normal mb-2 p-1 flex justify-center">{name}</h2>
      <div className="aspect-w-16 aspect-h-9 relative">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="loader"></div> 
          </div>
        )}
        {inView && (
          <iframe
            width="100%"
            height="315"
            src={getEmbedUrl(videoUrl)}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`transition-opacity duration-100 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;
