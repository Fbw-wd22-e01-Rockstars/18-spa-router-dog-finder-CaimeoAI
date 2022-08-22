import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Dogs from './components/Dogs'
import Whiskey from './components/Whiskey'
import Hazel from './components/Hazel'
import Tubby from './components/Tubby'
import './app.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>HELLOZ. WE HAVE DOGZ. CLOCK ON THEM FOR MORE INFO</h1>

      <Dogs />

    <Routes>
      <Route path='/dogs/whiskey' element={<Whiskey/>}/>
      <Route path='/dogs/hazel' element={<Hazel/>}/>
      <Route path='/dogs/tubby' element={<Tubby/>}/>
    </Routes>

    </div>
    </BrowserRouter>
  );
}


export default App;