import React from 'react';
import './Features.css'; // Correct path to Features.css

const Features = () => {
  return (
    <section className="features" data-aos="fade-left">
      <div className="feature-card">
        <h3>Custom Workouts</h3>
        <p>Personalized plans to match your fitness goals.</p>
      </div>
      <div className="feature-card">
        <h3>Nutrition Tracking</h3>
        <p>Keep track of your meals and stay on target.</p>
      </div>
      <div className="feature-card">
        <h3>Progress Monitoring</h3>
        <p>Track your progress over time with detailed stats.</p>
      </div>
    </section>
  );
};

export default Features;
