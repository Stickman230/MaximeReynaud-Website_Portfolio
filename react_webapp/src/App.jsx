import { useState } from 'react'
import './App.css'
import MyGlobe from '../components/globe';
import BasicMasonry from '../components/project_grid';
import lockIcon from './assets/Lock_Icon.png'

function App() {


  return (
    <div className='main_container'>

      <div className='backgroundCont'>
        <div className='container0'>
          <div className='names'>
            <h1 id='fname'>Maxime</h1>
            <h1 id='lname'>Reynaud</h1>
          </div>
          <h3 id='sub-name'>Computer Scientist & Cybersecurity</h3>
          {/* <img id='lockIcon' src={lockIcon} alt='Lock-Icon'></img> */}
        </div>
      </div>

      <div className='container1'>
        <div className='quote'>
          <p id='quote_text'>"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."</p>
          <p id='quote_author'>-Harriet Tubman</p>
        </div>
        <div className='intro_text'>
          <p>I have started my Computer Science journey by learning robotics and discovering a field of infinite possibility at age 10, this path
            eventualy led me to where I am today with a passion for cybersecurity.
          </p>
          <p id='i_1'>
            Growing up living in multiple country has been a continous learning experience with invaluablea life lessons.
          </p>
          <p id='i_2'>
            Montpellier / France, Jakarta / indonesia, Shanghai / China, Hong Kong / RAS Hong Kong, Exeter / United Kingdom
          </p>
        </div>
        <div className='globe_style'>
          <MyGlobe/>
        </div>
      </div>

      <div className='container2'>
        <p>container2</p>
      </div>

      <div className='container3'>
        <div className='project_text'>
          <h1 id='P_title'>My Projects</h1>
        </div>
        <div id='grid'>
          <BasicMasonry/>
        </div>
      </div>

      <div className='container4'>
        <p>container4</p>
      </div>
    </div>
  );
}

export default App;
