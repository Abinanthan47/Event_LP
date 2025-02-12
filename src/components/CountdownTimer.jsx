import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-27T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0   bg-neutral-950  text-white text-center py-2 font-300 text-md shadow-md">
      <div className="flex justify-center font-300 space-x-4">
        <p className="text-sm md:text-md">{timeLeft.days} <span className="text-xs md:text-sm">days</span></p>
        <p className="text-sm md:text-md">{timeLeft.hours} <span className="text-xs md:text-sm">hours</span></p>
        <p className="text-sm md:text-md">{timeLeft.minutes} <span className="text-xs md:text-sm">minutes</span></p>
        <p className="text-sm md:text-md">{timeLeft.seconds} <span className="text-xs md:text-sm">seconds</span></p>
      </div>
    </div>
  );
};

export default CountdownTimer;
