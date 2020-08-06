import React from 'react'
import PropTypes from 'prop-types'
import '../instructorStyle.css'

const InstructorSimple = (props) => {
  var headImgStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + props.imgSrc + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  return (
    <div className="container-fluid instructorSimple">
      <div
        className="instructorImgContainer rounded-circle row"
        style={headImgStyle}
      >
        {/*<div className="container-fluid">*/}
        {/*<img*/}
        {/*  className="headShotImage"*/}
        {/*  alt={props.imgAlt}*/}
        {/*  src={process.env.PUBLIC_URL + props.imgSrc}*/}
        {/*/>*/}
        {/*</div>*/}
      </div>
      <div className="instructorName row-cols-4">{props.name}</div>
      <div className="instructorTitle row-cols-4">{props.jobTitle}</div>
    </div>
  )
}

InstructorSimple.propTypes = {
  //
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  imgSrc: PropTypes.string,
}

export default InstructorSimple
