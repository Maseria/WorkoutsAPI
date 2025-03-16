import React, { useState } from 'react';

const GeneratePlan = () => {
  const [goal, setGoal] = useState('Weight Loss');
  const [experience, setExperience] = useState('Beginner');
  const [duration, setDuration] = useState(20);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [error, setError] = useState(null);

  const handleGeneratePlan = async () => {
    const formData = {
      goal,
      experience,
      duration,
    };

    try {
      const response = await fetch('http://localhost:8000/api/generate-plan/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setWorkoutPlan(data);
        setError(null);
      } else {
        setError('Error generating plan. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please check your connection.');
    }
  };

  return (
    <div>
      <h1>Generate Workout Plan</h1>
      <div>
        <label>
          Goal:
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Endurance">Endurance</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Experience Level:
          <select value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Workout Duration (weeks):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleGeneratePlan}>Generate Plan</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {workoutPlan && (
        <div>
          <h2>Workout Plan</h2>
          <div>
            {workoutPlan.days.map((day, index) => (
              <div key={index}>
                <h3>{day.name}</h3>
                <p>Workout: {day.workout}</p>
                <p>Duration: {day.duration}</p>
                <p>Intensity: {day.intensity}</p>
              </div>
            ))}
          </div>
          <h2>Nutrition Plan</h2>
          <div>
            <p>Breakfast: {workoutPlan.nutrition.breakfast}</p>
            <p>Lunch: {workoutPlan.nutrition.lunch}</p>
            <p>Dinner: {workoutPlan.nutrition.dinner}</p>
            <p>Snacks: {workoutPlan.nutrition.snacks}</p>
            <p>Hydration: {workoutPlan.nutrition.hydration}</p>
          </div>
          <h2>Tips</h2>
          <ul>
            {workoutPlan.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneratePlan;