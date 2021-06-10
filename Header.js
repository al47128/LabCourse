import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
function Header() {
    return (
        <nav className="header">
            <img className="header__logo"  alt="logo" src="https://startupyard.com/wp-content/uploads/2015/03/Gjirafa-Logo.png"></img>
            <div className="header__search">
                 <input type="text" className="header__searchInput" placeholder="Search something"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
            {/*1st link*/}
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__ optionLineOne">Hello</span>
                <span className="header__ optionLineTwo">Sign in or Sign Out</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__ optionLineOne">Returns</span>
                <span className="header__ optionLineTwo">Orders</span>
                </div>
                </Link>

                <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__ optionLineOne">You</span>
                <span className="header__ optionLineTwo">&Prime</span>
                </div>
                </Link>
                </div>
                
                <Link  to="/checkout"classsName="header__link">
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span classNme="header__optionLineTwo header__basketCount">2</span>
                    </div>
                </Link>
                

            
                
        </nav>
    ) 
}
export default Header