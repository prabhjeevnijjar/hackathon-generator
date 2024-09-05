import { useState, useEffect } from 'react';

const useTimer = (startDate, endDate) => {
  const [status, setStatus] = useState('');
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Format the start and end dates on first render
      if (!formattedStartDate) setFormattedStartDate(formatDate(start));
      if (!formattedEndDate) setFormattedEndDate(formatDate(end));

      if (now > end) {
        setStatus('ended');
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else if (now >= start && now <= end) {
        setStatus('active');
        calculateTimeDifference(now, end);
      } else if (now < start) {
        setStatus('upcoming');
        calculateTimeDifference(now, start);
      }
    };

    const calculateTimeDifference = (currentTime, targetTime) => {
      const diff = targetTime - currentTime;

      const sec = Math.floor((diff / 1000) % 60);
      const min = Math.floor((diff / 1000 / 60) % 60);
      const hrs = Math.floor((diff / 1000 / 60 / 60) % 24);
      const dys = Math.floor(diff / 1000 / 60 / 60 / 24);

      setDays(dys);
      setHours(hrs);
      setMinutes(min);
      setSeconds(sec);
    };

    const formatDate = (date) => {
      const options = { day: 'numeric', month: 'long', year: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
      const daySuffix = getDaySuffix(date.getDate());
      return date.toLocaleDateString('en-US', options).replace(',', `${daySuffix},`).replace(/:00\b/g, '').toUpperCase();
    };

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // Covers 11th-20th
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };

    // Update the timer every second
    const timerInterval = setInterval(calculateTimeRemaining, 1000);

    // Run the initial calculation immediately
    calculateTimeRemaining();

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, [startDate, endDate, formattedStartDate, formattedEndDate]);

  return { status, days, hours, minutes, seconds, formattedStartDate, formattedEndDate };
};

export default useTimer;
