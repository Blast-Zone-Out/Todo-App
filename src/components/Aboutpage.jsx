import React from "react";
import "./styles/Aboutpage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <p>
        Welcome to the To-Do List App! This application is designed to help you
        organize your tasks efficiently. You can add tasks, mark them as
        completed, and remove them once they're done. All your tasks are saved
        in your browser's local storage, ensuring your data remains safe even
        after refreshing the page.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Add and manage your daily tasks.</li>
        <li>Mark tasks as completed with a simple click.</li>
        <li>Delete tasks you no longer need.</li>
        <li>Persistent data storage using local storage.</li>
        <li>Responsive design for mobile and desktop views.</li>
      </ul>
      <h2>About the Developer</h2>
      <p>
        Hi, I'm Joven, the developer of this project. I am a passionate
        developer currently learning and improving my skills in React.js. This
        project is a step forward in my journey to mastering web development.
        Feel free to explore and use this app to make your life more organized!
      </p>
    </div>
  );
};

export default AboutPage;
