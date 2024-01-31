
import React from 'react'
import Mobile from './app/mobile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mobile />} />
        </Routes>
      </BrowserRouter>
      {/* <Mobile/> */}
    </div>
  )
}

export default App