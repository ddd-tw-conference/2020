import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Introduction from './introduction'
import InstructorList from './instructors'
import SponsorList from './sponsors'

function App() {
  return (
    <div className="App">
      <div className="container-padding">
        <Introduction />
        <InstructorList />
        <SponsorList />
      </div>
    </div>
  )
}

export default App
