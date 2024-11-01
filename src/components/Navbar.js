import React from 'react';
import todo from '../components/todo.jpg';

// import './App.css';

export default function Navbar() {
  return (
    <div >
      
      <div className='Navbar'>
      <img src={todo} id='todo-icon'/>
      <h4>Todo</h4>
        <div className='Nav-items'>
          
        <a id='Home'>Home</a>
  <a id='About' >About</a>

        </div>
      </div>
    </div>
  );
}
