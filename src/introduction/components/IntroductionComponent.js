import React from 'react'
import PropTypes from 'prop-types'
import '../introStyle.css'

const IntroductionComponent = (props) => {
  var divStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + props.imgSrc + ')',
    backgroundRepeat: 'no-repeat',
  }
  const isMobile = window.innerWidth < 960

  return (
    <div className="container-fluid">
      <div className="title">{props.title}</div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-12">
            <img alt={props.imgAlt} src={props.imgSrc} width={isMobile ? 260 : 400}/>
          </div>
          <div className="col-lg-7 col-12 text-left introDescription">
            {props.description}
          </div>
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
