import React from 'react'
import PropTypes from 'prop-types'

const IntroductionComponent = (props) => {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
      </div>
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
