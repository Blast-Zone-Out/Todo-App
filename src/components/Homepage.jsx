import React from "react";
import "./styles/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Joven's Task Manager</h1>
        <p>
          Stay organized and boost your productivity with our easy-to-use task
          manager. Add tasks, mark them as complete, and manage your day
          effectively!
        </p>
        <button className="cta-button">
          <Link to="/taskpage" className="link">
            Get Started
          </Link>
        </button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>What You Can Do</h2>
        <ul>
          <li>✅ Add and delete tasks with ease.</li>
          <li>📋 Mark tasks as completed with a single click.</li>
          <li>💾 Tasks are saved automatically using local storage.</li>
          <li>📱 Responsive design for all devices.</li>
        </ul>
      </section>

      {/* Steps Section */}
      <section className="steps">
        <h2>How to Use</h2>
        <ol>
          <li>Enter your task in the input box.</li>
          <li>Click the "Add" button to add it to your list.</li>
          <li>Click on a task to mark it as complete.</li>
          <li>Click the "×" icon to remove unwanted tasks.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Choose Us?</h2>
        <p>
          Organize your day with ease. Increase productivity by staying focused
          on what matters. No account required—just start managing your tasks
          instantly!
        </p>
      </section>
    </div>
  );
};

export default Homepage;
