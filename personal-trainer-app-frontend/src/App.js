import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import Results from "./components/Results";
import './styles.css'; // Import the CSS file

const App = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const fetchWorkoutPlan = async (formData) => {
    try {
      const response = await fetch("https://trainappi.azurewebsites.net/api/workouts/generate-plan/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setWorkoutPlan(data); // Update state with the fetched plan
      } else {
        alert("Error generating plan. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your connection.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <WorkoutForm onSubmit={fetchWorkoutPlan} />
      </div>
      {workoutPlan && (
        <div className="results-container">
          <Results workoutPlan={workoutPlan} />
        </div>
      )}
    </div>
  );
};

export default App;
