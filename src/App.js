import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Introduction from './introduction'
import Instructor from './instructors/Instructor'

function App() {
  return (
    <div className="App">
      <div>
        {/*<Introduction />*/}
        <Instructor />
      </div>
    </div>
  )
}

export default App
