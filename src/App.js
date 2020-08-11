import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Introduction from './introduction'
import Instructor from './instructors/Instructor'
import Menubar from './menubar/Menubar'

function App() {
  return (
    <div className="App">
      <Menubar />
      <div className="container-padding">
        <Introduction />
        <Instructor />
      </div>
    </div>
  )
}

export default App
