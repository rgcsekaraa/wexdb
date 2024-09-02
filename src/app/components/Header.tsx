'use client'
import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import workouts from '../../workouts.json'; // Adjust the path as necessary

const Header: React.FC = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [exerciseCount, setExerciseCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Get the count of exercises
    setExerciseCount(workouts.exercises.length);

    // Format the last updated time
    const updatedTime = new Date(workouts.lastUpdated).toLocaleString();
    setLastUpdated(updatedTime);
  }, []);

  return (
    <header className="bg-black font-bold text-white py-4 px-8 flex flex-col items-center relative">
      <h1 className="text-3xl">WEXDB</h1>
      <div className="flex items-center mt-2">
        <span className="font-extralight">A Database For All Workouts & Exercises</span>
        <FaInfoCircle
          className="hidden md:flex ml-2 cursor-pointer"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        />
        {isTooltipVisible && (
          <div className="absolute bg-gray-800 text-white text-sm p-2 rounded shadow-lg mt-8 z-10">
            <p>Total Exercises: {exerciseCount}</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
