import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import InstructorDetail from './instructors/components/InstructorDetail'

import Introduction from './introduction'
import { InstructorList } from './instructors'
import SponsorList from './sponsors'

function App() {
  const links = {
    facebook: 'https://www.facebook.com/seanlin816/',
    github: 'https://github.com/seanhyl816',
  }
  return (
    <div className="App">
      <div className="container-padding">
        {/*<Introduction />*/}
        {/*<InstructorList />*/}
        {/*<SponsorList />*/}
        <InstructorDetail
          name="Sean Lin"
          jobTitle="Senior Engineer"
          detail="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam.</p>"
          imgSrc="/img/sean.png"
          links={links}
        />
      </div>
    </div>
  )
}

export default App
