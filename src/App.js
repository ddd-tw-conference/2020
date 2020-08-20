import React, { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import InstructorDetail from './instructors/components/InstructorDetail'

import Menubar from './menubar/Menubar'
import Landing from './landing/Landing'
import Footer from './footer/Footer'
import { InstructorList } from './instructors'
import SponsorList from './sponsors'
import Introduction from './introduction'
import { useParams } from 'react-router'

export const scrollToElement = anchor => {
  if (anchor) {
    const targetElement = document.getElementById(anchor)
    if (targetElement) targetElement.scrollIntoView({behavior: "smooth", inline: "nearest"})
  }
}

function App() {
  const links = {
    facebook: 'https://www.facebook.com/seanlin816/',
    github: 'https://github.com/seanhyl816',
  }
  const { anchor } = useParams()
  useEffect(() => {
    scrollToElement(anchor)
  }, [anchor])
  return (
    <div className="App">
      <Menubar />
      <div className="container-scroll">
        <Landing />
        <div className="container-padding">
          <Introduction />
          <InstructorList />
          <SponsorList id="sponsorList" />
          {/* <InstructorDetail
            name="Sean Lin"
            jobTitle="Senior Engineer"
            detail="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam.</p>"
            imgSrc="/img/sean.png"
            links={links}
          /> */}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
