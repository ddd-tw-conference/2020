import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/DDD_logo.png'
import './menubar.css'
import languageIcon from '../img/language_icon.svg'
import { scrollToElement } from '../App'

const Menubar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-ddd shadow">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="40" height="40" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse link-color" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <button
                                type="button"
                                className="btn btn-outline-join float-left"
                            >
                                我要參加
                            </button>
                        </li>
                        <li className="nav-item active">
                            <Link
                                className="menu-link"
                                to="/ddd-conference"
                                onClick={() => scrollToElement('ddd-conference')}
                            >
                                DDD年會
                            </Link>
                            {/* <a className="menu-link" href="#">DDD年會</a> */}
                        </li>
                        <li className="nav-item active">
                            <Link
                                className="menu-link"
                                to="/about-us"
                                onClick={() => scrollToElement('about-us')}
                            >
                                關於我們
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                                className="menu-link"
                                to="/instructor"
                                onClick={() => scrollToElement('instructor')}
                            >
                                講師介紹
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <a className="menu-link" href="#">議程</a>
                        </li>
                        <li className="nav-item active">
                            <Link
                                className="menu-link"
                                to="/sponsor"
                                onClick={() => scrollToElement('sponsor')}
                            >
                                贊助商
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown show" style={{ padding: '0.5rem 1rem' }}>
                                <img alt="language" src={languageIcon} height="20" />
                                <a
                                    className="dropdown-toggle"
                                    style={{ color: '#27539D', textDecoration: 'none'}}
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    中文
                                </a>

                                <div className="dropdown-menu custom-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item custom-item" href="#">中文</a>
                                    <a className="dropdown-item custom-item" href="#">英文</a>
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
