'use client';
import { useEffect, useState } from 'react';

interface CounterProps {
  count: number;
  label: string;
  labelClassName?: string;
}

const Counter: React.FC<CounterProps> = ({ count, label, labelClassName }) => {
  const [animated, setAnimated] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    setAnimated(true);

    const interval = setInterval(() => {
      if (displayedCount < count) {
        setDisplayedCount((prevCount) => prevCount + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count, displayedCount]);

  return (
    <div
      className={`text-4xl font-bold text-white ${
        animated ? 'counter-up' : ''
      } flex flex-row-reverse justify-end sm:flex-col sm:items-center`}
    >
      <span className="sm:mb-5 w-full text-right sm:w-auto">
        {displayedCount}
      </span>
      <span className={`text-2xl sm:text-3xl  sm:px-10 ${labelClassName}`}>
        {label}
      </span>
    </div>
  );
};

export default Counter;
