import React from 'react';
import NavContainer from './styles';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.PNG';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import CartButtons from '../CartButtons/';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';

const Nav = () => {
  const { currentUser } = useUserContext();
  const { openSidebar } = useProductsContext();

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} style={{width:"40px"}} alt='' />
            <img src={logo2}  alt='' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {currentUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to='/orders'>orders</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Nav;
