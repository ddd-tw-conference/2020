import React from 'react'
import PropTypes from 'prop-types'
import '../sponsorStyle.css'

const Sponsor = (props) => {
  var sponsorLogoStyle = {
    backgroundImage: 'url(' + process.env.PUBLIC_URL + props.imgSrc + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  return (
    <div className="sponsorLogo">
      <img src={process.env.PUBLIC_URL + props.imgSrc} />
    </div>
  )
}

Sponsor.propTypes = {
  //
  imgSrc: PropTypes.string,
}

export default Sponsor
