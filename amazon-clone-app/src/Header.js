import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { useGlobalContext } from './context';
import {auth} from './firebase'

const Header = () => {
    const { cart,user } = useGlobalContext()

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' className='header-logo'></img>
            </Link>
            <div className="header-search">
                <input type='text' className='header-input'></input>
                <SearchIcon className='header-searchIcon' />
            </div>
            <div className='header-nav'>
                <Link to={!user && '/login'}>
                    <div className='header-option' onClick={handleAuth}>
                        <span className='header-optionLineOne'>Hello Guest</span>
                        <span className='header-optionSecondLine'>{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Return</span>
                    <span className='header-optionSecondLine'>& Orders</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Your</span>
                    <span className='header-optionSecondLine'>Prime</span>
                </div>
                <Link to='/checkout' className='shopping-cartIcon'>
                <div className="header-optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className='header-optionSecondLine header-basketCount'>{cart.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
