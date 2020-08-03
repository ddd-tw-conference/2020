import React from 'react'
import PropTypes from 'prop-types'
import './introStyle.css'

const IntroductionComponent = (props) => {
  return (
    <div className="container-fluid">
      <div className="title container-fluid">{props.title}</div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <img alt={props.imgAlt} src={props.imgSrc} />
          </div>
          <div
            className="col-sm-9 introDescription"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div>
      </div>
    </div>
  )
}

IntroductionComponent.propTypes = {
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  imgAlt: PropTypes.string,
}

export default IntroductionComponent
