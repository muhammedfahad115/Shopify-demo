import React, { useState } from 'react';
import axios from 'axios';

const TimerManager = () => {
  const [timer, setTimer] = useState({
    storeId: '',
    startTime: '',
    endTime: '',
    description: '',
    displayOptions: {}
  });

  const handleChange = (e) => {
    setTimer({ ...timer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/timers', timer);
    alert('Timer created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="storeId" value={timer.storeId} onChange={handleChange} placeholder="Store ID" />
      <input name="startTime" value={timer.startTime} onChange={handleChange} placeholder="Start Time" />
      <input name="endTime" value={timer.endTime} onChange={handleChange} placeholder="End Time" />
      <textarea name="description" value={timer.description} onChange={handleChange} placeholder="Promotion Description" />
      {/* Add inputs for display options */}
      <button type="submit">Create Timer</button>
    </form>
  );
};

export default TimerManager;
