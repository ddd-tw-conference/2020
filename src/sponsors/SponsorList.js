import React from 'react'
import Sponsor from './components/Sponsor'

const SponsorList = () => {
  return (
    <>
      <div className="container-fluid title">贊助商</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <Sponsor imgSrc="/img/ibm/ibm.png" />
          </div>
          <div className="col-4">
            <Sponsor imgSrc="/img/amazon/amazon.png" />
          </div>
          <div className="col-4">
            <Sponsor imgSrc="/img/microsoft/microsoft.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Sponsor imgSrc="/img/ibm/ibm.png" />
          </div>
          <div className="col-4">
            <Sponsor imgSrc="/img/ibm/ibm.png" />
          </div>
          <div className="col-4">
            <Sponsor imgSrc="/img/ibm/ibm.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SponsorList
