
import React from 'react'
import Mobile from './app/mobile'
import MobileProjects from './app/mobileProjects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mobile />} />
          <Route path='/projects' element={<MobileProjects/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Mobile/> */}
    </div>
  )
}

export default App