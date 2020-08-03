import React from 'react'
import PropTypes from 'prop-types'
import './introStyle.css'

const IntroductionComponent = (props) => {
  return (
    <div>
      <div className="title">{props.title}</div>
      <div>
        <div>
          <img alt={props.imgAlt} src={props.imgSrc} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
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
