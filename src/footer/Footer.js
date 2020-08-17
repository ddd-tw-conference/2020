import React from 'react'

import whiteLogo from '../img/white_DDD_logo.jpg'
import location from '../img/location-solid.svg'
import clock from '../img/clock-solid.svg'
import email from '../img/email-solid.svg'
import messenger from '../img/messenger.svg'
import facebook from '../img/facebook.svg'

import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row row-height">
          <div className="col-2 element-container">
            <img alt="" src={whiteLogo} height="100" />
          </div>
          <div className="col-3 list-inline text-left element-container">
            <h6 className="text-white">活動資訊</h6>
            <img
              className="list-inline-item"
              src={location}
              alt="location"
              height="18"
            />
            <p className="text-white list-inline-item">Taipei, Taiwan</p>
            <br />
            <img
              className="list-inline-item"
              src={clock}
              alt="clock"
              height="18"
            />
            <p className="text-white list-inline-item">2020/11/27 9:00-16:00</p>
          </div>
          <div className="col-4 list-inline text-left element-container">
            <h6 className="text-white">聯絡資訊</h6>
            <img
              className="list-inline-item"
              src={email}
              alt="email"
              height="18"
              width="18"
            />
            <p className="text-white list-inline-item">
              dddtwconference2020@gmail.com
            </p>
            <br />
            <img
              className="list-inline-item"
              src={messenger}
              alt="messenger"
              height="18"
            />
            <a
              href="http://m.me/DDDCommunity.tw"
              target="_blank"
              className="text-white list-inline-item"
            >
              m.me/DDDCommunity.tw
            </a>
          </div>
          <div className="col-3 list-inline text-left element-container">
            <h6 className="text-white">關於我們</h6>
            <img
              className="list-inline-item"
              src={facebook}
              alt="facebook"
              height="18"
              width="18"
            />
            <a
              href="https://www.facebook.com/DDDCommunity.tw/"
              target="_blank"
              className="text-white list-inline-item"
            >
              DDD Taiwan
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">&copy; Copyright 2020 DDD Taiwan</p>
      </footer>
    </div>
  )
}

export default Footer
