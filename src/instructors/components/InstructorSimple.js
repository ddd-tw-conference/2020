import React from 'react'
import PropTypes from 'prop-types'
import '../instructorStyle.css'

const InstructorSimple = (props) => {
  var headImgStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + props.imgSrc + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const isMobile = window.innerWidth < 960

  return (
    <div className="container-fluid instructorSimple">
      <div>
        <img src={props.imgSrc} alt="instructor" className="rounded-circle instructorImgContainer" width={isMobile ? 200 : 250}/>
      </div>
      <div className="instructorName row-cols-4">{props.name}</div>
      <div className="instructorTitle row-cols-4">{props.jobTitle}</div>
    </div>
  )
}

InstructorSimple.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  imgSrc: PropTypes.string,
}

export default InstructorSimple
