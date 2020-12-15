import React from 'react';
import logo from '../../Assets/Logo/Logo-brainflix.svg';
import './Header.scss';
import { ReactComponent as SearchIcon } from '../../Assets/Icons/SVG/Icon-search.svg';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '../Button';
import ProfileImage from '../ProfileImage';

const uploadIConSource = require('../../Assets/Icons/SVG/Icon-upload.svg');
const uploadIcon = <img src={uploadIConSource} alt="icon" />;
const ImagePath = require(`../../Assets/Images/Mohan-muruge.jpg`);

function Header() {
    
    return (
        <div className="header">
            <div className="header__logo-container">
                <img className="header__logo" src={logo} alt='logo' />
            </div>
            <div className="header__navigation">
                <div className="header__search"> 
                    <Input className="header__searchBar"
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">
                        <SvgIcon className="header__searchIcon" component={ SearchIcon } viewBox="0 0 18 18" />
                        Search</InputAdornment>}
                    />
                </div>
                <div className="header__upload">
                    <div >
                        <Button name="UPLOAD" className="header__uploadBtn" icon = {uploadIcon}/>
                    </div>
                    <div className="header__Icon">
                        <ProfileImage source={ImagePath} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
