
import React from 'react'
import HomePage from './app/homePage'
import MobileAbout from './app/mobileAbout'
import MobileProjects from './app/mobileProjects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project' element={<MobileProjects/>}/>
          <Route path='/about' element={<MobileAbout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App