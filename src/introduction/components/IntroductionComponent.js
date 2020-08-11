import React from 'react'
import PropTypes from 'prop-types'
import '../introStyle.css'

const IntroductionComponent = (props) => {
  var divStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + props.imgSrc + ')',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className="container-fluid">
      <div className="title">{props.title}</div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 introImg" style={divStyle}>
            {/*<img alt={props.imgAlt} src={props.imgSrc} />*/}
          </div>
          <div
            className="col-sm-7 introDescription"
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
