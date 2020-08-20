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
    <div>
      <img src={props.imgSrc} alt="sponsorLogo" width="200" />
    </div>
  )
}

Sponsor.propTypes = {
  imgSrc: PropTypes.string,
}

export default Sponsor
