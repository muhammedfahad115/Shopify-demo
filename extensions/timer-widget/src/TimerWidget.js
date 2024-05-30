import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';

const TimerWidget = ({ storeId }) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const fetchTimer = async () => {
      const response = await axios.get(`/api/timers/${storeId}`);
      setTimer(response.data[0]); // Assuming one timer per store
    };
    fetchTimer();
  }, [storeId]);

  if (!timer) return <div>Loading...</div>;

  return (
    <div>
      <p>{timer.description}</p>
      <p>Ends in: {new Date(timer.endTime).toLocaleString()}</p>
    </div>
  );
};

export default TimerWidget;
