import React from 'react'
import InstructorSimple from './components/InstructorSimple'

const InstructorList = (props) => {
  return (
    <>
      <div className="container-fluid title">講師介紹</div>
      <div className="container-fluid instructors">
        <div className="row">
          <div className="col-4">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-4">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-4">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-4">
            <InstructorSimple
              name="Sean Lin"
              jobTitle="Senior Engineer"
              imgSrc="/img/sean.png"
            />
          </div>
          <div className="col-4">
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
