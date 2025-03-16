// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Are Saying</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"This app has completely transformed my fitness journey! Highly recommended!"</p>
          <h4>- Sarah, Fitness Enthusiast</h4>
        </div>
        <div className="testimonial-card">
          <p>"Amazing workouts that are tailored to my goals. I love the progress tracker!"</p>
          <h4>- John, Busy Professional</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
