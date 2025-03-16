const BASE_URL = "http://127.0.0.1:8000/api"; // Your Django Backend

// Fetch all workouts
export const fetchWorkouts = async () => {
  const response = await fetch(`${BASE_URL}/workouts/`);
  return response.json();
};

// Fetch nutrition plans
export const fetchNutrition = async () => {
  const response = await fetch(`${BASE_URL}/nutrition/`);
  return response.json();
};

// Submit workout log (User Input)
export const logWorkout = async (workoutData) => {
  const response = await fetch(`${BASE_URL}/workouts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workoutData),
  });
  return response.json();
};

// Consume Classmate's API (Health Analysis)
export const analyzeHealth = async (workoutData) => {
  const CLASSMATE_API_URL = "https://health-check-api.azurewebsites.net/api/analyze/";
  const response = await fetch(CLASSMATE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workoutData),
  });
  return response.json();
};

// Fetch a public nutrition API (e.g., CalorieNinjas API)
export const getNutritionFacts = async (foodItem) => {
  const PUBLIC_API_URL = `https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`;
  const response = await fetch(PUBLIC_API_URL, {
    headers: { "X-Api-Key": "your-public-api-key" }, // Replace with actual API key
  });
  return response.json();
};
