import React from 'react'
import './Header.css'
import logo from '../src/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
   
const Header = () => {

  const [{basket}] = useStateValue();
console.log(basket)

  return (
    <nav className='header'>
    {/* logo -> img */}
      {/* <Link to="/"> */}
      <Link to='/'>
<img className='header__logo' src={logo} alt="logo" />

       </Link> 
{/*Input  */}
<div className="header__search">
<input type="text" className="header__searchInput" />
<SearchIcon className='header__searchIcon' />
</div>

{/* 3 Links */}
<div className="header__nav">
{/* 1st link */}
<Link to="/login">
<div className="header__option">
  <span className="header__optionLineOne">Hello Saad</span>
<span className='header__optionLineTwo'>Sign In</span> 
</div>
</Link>


{/* 2nd link */}

<div className="header__option">
  <span className="header__optionLineOne">returns</span>
<span className='header__optionLineTwo'>& orders</span>
</div>


{/* 3rd link */}

<div className="header__option">
  <span className="header__optionLineOne"> your</span>
<span className='header__optionLineTwo'>prime</span>
</div>


{/* 4rth link */}

<Link to="/checkout">
<div className="headerOption__bascket">
{/* basket icon */}
<ShoppingCartIcon />
{/* numbers of item */}
<span className='header__optionLineTwo header__bascketCount'>{basket?.length}</span>
</div>
</Link>

</div>
  </nav>
  )
}

export default Header
