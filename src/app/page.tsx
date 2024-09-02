"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import WorkoutCard from './components/WorkoutCard';
import workouts from '../workouts.json';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleWorkouts, setVisibleWorkouts] = useState(workouts.exercises.slice(0, 4)); // Load first 4 workouts
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMoreWorkouts = useCallback(() => {
    const nextWorkouts = workouts.exercises.slice(visibleWorkouts.length, visibleWorkouts.length + 4); // Load next 4 workouts
    setVisibleWorkouts((prev) => [...prev, ...nextWorkouts]);
  }, [visibleWorkouts]);

  useEffect(() => {
    const filteredWorkouts = workouts.exercises.filter((workout) =>
      workout.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setVisibleWorkouts(filteredWorkouts.slice(0, 4)); // Load first 4 filtered workouts
  }, [searchQuery]);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreWorkouts();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMoreWorkouts]);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {visibleWorkouts.map((workout, index) => (
          <WorkoutCard key={index} name={workout.name} videoUrl={workout.videoUrl} />
        ))}
      </div>
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default Home;
