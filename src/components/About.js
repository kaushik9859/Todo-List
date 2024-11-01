import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div id="aboutContainer">
     <h2> About This To-Do List App</h2>

<p>Our To-Do List app is a simple yet powerful tool designed to help you organize and prioritize your tasks efficiently. With an intuitive and easy-to-navigate interface, this app allows you to add tasks with ease, edit them to make adjustments, and delete them once completed. This keeps your list focused and up-to-date, helping you stay on top of your day.</p>

<h2>Key Features:</h2>
<ul>
<li>Add Tasks: Quickly jot down tasks as they come to mind, ensuring nothing slips through the cracks.</li>
<li>Edit Tasks: Modify existing tasks to reflect new priorities or additional details.</li>
<li>Delete Tasks: Remove tasks once they're completed or no longer relevant, keeping your list clutter-free.</li>
<li>Motivational Quote Carousel:To keep you inspired, the app includes a carousel displaying motivational quotes. These rotating quotes are there to encourage and motivate you to accomplish each task and stay positive throughout the day. Each quote is thoughtfully selected to provide a boost in productivity and mindset.</li>
</ul>
With this To-Do List app, managing your tasks becomes a refreshing and motivating experience. Dive in, get organized, and let each completed task bring a sense of accomplishment and progress.












      </div>
    </div>
  )
}

export default About
