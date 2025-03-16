import React, { useState } from 'react';
import axios from 'axios';

const Nutrition = () => {
  const [mealName, setMealName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mealData = { mealName, ingredients, mealType };

    try {
      const response = await axios.post('http://your-backend-url/api/nutrition', mealData);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting the meal data:", error);
      setResponseMessage('There was an error submitting your meal data.');
    }
  };

  return (
    <div>
      <h2>Create Your Meal Plan</h2>
      <form onSubmit={handleSubmit}>
        <label>Meal Name:</label>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          required
        />

        <label>Ingredients:</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />

        <label>Meal Type:</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <button type="submit">Submit Meal Plan</button>
      </form>

      <div>{responseMessage}</div>
    </div>
  );
};

export default Nutrition;
