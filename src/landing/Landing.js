import React, { useState } from 'react'
import './landing.css'
import whiteLogo from '../img/white_DDD_logo.jpg'
import location from '../img/location.svg'
import clock from '../img/clock.svg'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import Typography from '@material-ui/core/Typography'

const Landing = () => {
  const { t, i18n } = useTranslation()
  const eventTime = moment('27-11-2020 09:00:00', 'DD-MM-YYYY HH:mm:ss')

  const getDuration = () => {
    const currentTime = moment()
    const duration = moment.duration(eventTime.diff(currentTime))
    return duration
  }

  const [duration, setDuration] = useState(getDuration())

  const Days = Math.floor(duration.asDays())
  const Hours = duration.hours()
  const Mins = duration.minutes()
  const Secs = duration.seconds()

  setInterval(function () {
    setDuration(getDuration())
  }, 1000)

  const isMobile = window.innerWidth < 960

  return (
    <div className="landing-container">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-4 col-12">
            <img src={whiteLogo} alt="whiteLogo" height="200" />
          </div>
          <div className="col-lg-8 col-12 title-margin">
            <Typography variant={isMobile ? 'h5' : 'h4'} className="text-left text-white">
              Domain Driven Design Taiwan
            </Typography>
            <Typography variant={isMobile ? 'h5' : 'h4'} className="text-left text-white">
              {t('landing.title')}
            </Typography>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-outline-light float-left"
              >
                {t('landing.join')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container time-margin">
        <div className="row">
          <div className="col-lg-2 col-6 list-inline mt-5">
            <img
              className="list-inline-item"
              src={location}
              alt="location"
              height="30"
            />
            <p className="text-white list-inline-item">Taipei, Taiwan</p>
          </div>
          <div className="col-lg-2 col-6 list-inline mt-5">
            <img
              className="list-inline-item"
              src={clock}
              alt="clock"
              height="30"
            />
            <p className="text-white list-inline-item">
              {eventTime.format('D MMM YYYY')}
            </p>
          </div>
          <div className="col-lg-2 col-6">
            <div className="countdown-border">
              <h1 className="text-white mt-4">{Days}</h1>
              <p className="text-white">Days</p>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="countdown-border">
              <h1 className="text-white mt-4">{Hours}</h1>
              <p className="text-white">Hrs</p>
            </div>
          </div>
          <div className="col-lg-2 col-6 countdown-margin">
            <div className="countdown-border">
              <h1 className="text-white mt-4">{Mins}</h1>
              <p className="text-white">Mins</p>
            </div>
          </div>
          <div className="col-lg-2 col-6 countdown-margin">
            <div className="countdown-border">
              <h1 className="text-white mt-4">{Secs}</h1>
              <p className="text-white">Secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
