import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/DDD_logo.png'
import './menubar.css'
import languageIcon from '../img/language_icon.svg'
import { scrollToElement } from '../App'
import { useTranslation, withTranslation, Trans } from 'react-i18next'

function Menubar() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-ddd shadow">
        <a className="navbar-brand" href="#">
          <img src={logo} width="40" height="40" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse link-color"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                type="button"
                className="btn btn-outline-join float-left"
                href="https://dddtaiwan.kktix.cc/events/dddtw-conf-2020"
                target="_blank"
              >
                {t('menubar.join')}
              </a>
            </li>
            <li className="nav-item active">
              <Link
                className="menu-link"
                to="/ddd-conference"
                onClick={() => scrollToElement('ddd-conference')}
              >
                {t('menubar.ddd-conference')}
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="menu-link"
                to="/about-us"
                onClick={() => scrollToElement('about-us')}
              >
                {t('menubar.about-us')}
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="menu-link"
                to="/instructor"
                onClick={() => scrollToElement('instructor')}
              >
                {t('menubar.speakers')}
              </Link>
            </li>
            <li className="nav-item active">
              <a className="menu-link" href="#">
                {t('menubar.agenda')}
              </a>
            </li>
            <li className="nav-item active">
              <Link
                className="menu-link"
                to="/sponsor"
                onClick={() => scrollToElement('sponsor')}
              >
                {t('menubar.sponsors')}
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown show" style={{ padding: '0.5rem 1rem' }}>
                <img alt="language" src={languageIcon} height="20" />
                <a
                  className="dropdown-toggle"
                  style={{ color: '#27539D', textDecoration: 'none' }}
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  中文
                </a>
                <div
                  className="dropdown-menu custom-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <button
                    className="dropdown-item custom-item"
                    onClick={() => changeLanguage('cht')}
                  >
                    中文
                  </button>
                  <button
                    className="dropdown-item custom-item"
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menubar
