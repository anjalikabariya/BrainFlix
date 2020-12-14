import React from 'react';
import logo from '../../Assets/Logo/Logo-brainflix.png';
import './Header.scss';
import { ReactComponent as SearchIcon } from '../../Assets/Icons/SVG/Icon-search.svg';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '../Button';
import ProfileImage from '../ProfileImage';

function Header() {
    const uploadIConSource = require('../../Assets/Icons/SVG/Icon-upload.svg');
    const uploadIcon = <img src={uploadIConSource} alt="icon" />;
    const ImagePath = require(`../../Assets/Images/Mohan-muruge.jpg`);
    return (
        <div>
            <div className="header__logo">
                <img src={logo} alt='logo' />
            </div>
            <div> 
            <Input
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start">
                <SvgIcon component={ SearchIcon } viewBox="0 0 18 18" />
                 Search</InputAdornment>}
            />
            </div>
            <Button name="upload" icon = {uploadIcon}/>
            <ProfileImage source={ImagePath} />
        </div>
    )
}

export default Header;
