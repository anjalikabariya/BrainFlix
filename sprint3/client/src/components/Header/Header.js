import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Logo/Logo-brainflix.svg';
import './Header.scss';
import ProfileImage from '../ProfileImage';

const uploadIcon = require('../../Assets/Icons/SVG/Icon-upload.svg');
const ImagePath = require(`../../Assets/Images/Mohan-muruge.jpg`);

function Header() {
    
    return (
        <header className="header">
            <div className="header__logo-container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt='logo' />
                </Link>
            </div>
            <div className="header__navigation">
                <div className="header__search"> 
                    <input className="header__searchBar" type="text" placeholder="Search" />
                </div>
                <div className="header__upload">
                    <div className="header__upload-button-container">
                        <Link to="/upload">
                            <button name="UPLOAD" className="header__upload-button">
                                <img className="header__upload-button-image" src={uploadIcon} alt="upload button" />
                                UPLOAD
                            </button>
                        </Link>
                        <div className="header__Icon">
                            <ProfileImage source={ImagePath} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
