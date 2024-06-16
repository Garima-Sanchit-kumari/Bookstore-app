import React from 'react';
import Homes from './homes/Homes';

import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses'
import Signup from './components/Signup';
import Contacts from './contacts/Contacts';
import Abouts from './abouts/Abouts';


function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Homes/>}/>
          <Route path='/course' element={<Courses/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/about' element={<Abouts/>}/>
        </Routes>
      </div>
   
    </>
  );
}

export default App;