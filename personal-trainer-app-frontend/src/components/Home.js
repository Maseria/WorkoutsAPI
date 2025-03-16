import React, { useState, useEffect } from 'react';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  // Fetch workouts from Django API
  useEffect(() => {
    fetch('http://localhost:8000/api/workouts/')
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error('Error fetching workouts:', error));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newWorkout = { title, description, duration };

    const response = await fetch('http://localhost:8000/api/workouts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorkout),
    });

    if (response.ok) {
      const savedWorkout = await response.json();
      setWorkouts([...workouts, savedWorkout]); // Update state with new workout
      setTitle('');
      setDescription('');
      setDuration('');
    } else {
      console.error('Failed to add workout');
    }
  };

  return (
    <div className="home">
      <h1>Personal Trainer App</h1>

      <h2>Add a New Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button type="submit">Add Workout</button>
      </form>

      <h2>Available Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <h3>{workout.title}</h3>
            <p>{workout.description}</p>
            <p>Duration: {workout.duration} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
