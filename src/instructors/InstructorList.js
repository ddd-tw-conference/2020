import React from 'react'
import InstructorSimple from './components/InstructorSimple'

const InstructorList = (props) => {
  return (
    <>
      <div className="container-fluid title" id="instructor">講師介紹</div>
      <div className="container-fluid instructors">
        <div className="row">
          <div className="col-lg-4 col-12">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-lg-4 col-12">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-lg-4 col-12">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-lg-4 col-12">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-lg-4 col-12">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default InstructorList
