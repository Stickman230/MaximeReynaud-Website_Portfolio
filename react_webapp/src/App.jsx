import { useState } from 'react'
import './App.css'
import lockIcon from './assets/Lock_Icon.png'

function App() {


  return (
    <div className='main_container'>
      <div className='container0'>
        <div className='names'>
          <h1 id='fname'>Maxime</h1>
          <h1 id='lname'>Reynaud</h1>
        </div>
        <h3 id='sub-name'>Computer Scientist & Cybersecurity</h3>
        <img id='lockIcon' src={lockIcon} alt='Lock-Icon'></img>
      </div>

       <div className='container1'>
        <div className='quote'>
          <p id='quote_text'>"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."</p>
          <p id='quote_author'>-Harriet Tubman</p>
        </div>
      </div>

      {/*
      <div className='container2'>
        <p>container2</p>
      </div>

      <div className='container3'>
        <p>container3</p>
      </div> */}
    </div>
  );
}

export default App;
