import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
    return (
        <div className='header'>
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' className='header-logo'></img>
            <div className="header-search">
                <input type='text' className='header-input'></input>
                <SearchIcon className='header-searchIcon' />
            </div>
            <div className='header-nav'>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Hello Guest</span>
                    <span className='header-optionSecondLine'>Sign In</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Return</span>
                    <span className='header-optionSecondLine'>& Orders</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Your</span>
                    <span className='header-optionSecondLine'>Prime</span>
                </div>
                <div className="header-optionBasket">
                    <ShoppingCartOutlinedIcon />
                    <span className='header-optionSecondLine header-basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
