import {Link, NavLink} from 'react-router'
import { useEffect, useState } from 'react'
import ElizzaLogo from '../assets/elizza logo.jpg'
import burgerMenu from '../assets/icons/burger-menu.svg'
import './MainMenu.css'

export const items = ['Mládež', 'Uplynulé sezóny',  'Zápisy výboru a turnaje', 'Kontakty'];

export function MainMenu() {
  const [burgerMenuActive,setBurgerMenuActive] =  useState(false);
  

  const burgerMenuVisible = async( )=>{
    setBurgerMenuActive(!burgerMenuActive);
    
  }

  useEffect(()=>{
    console.log(burgerMenuActive);
  },[burgerMenuActive])

  return (
    <>
    <div className="main-menu">
      <Link to='/'>
        <img className='logo' src={ElizzaLogo} />
      </Link>
      

      <div className="main-menu-right-container">
        <div className={`burger-menu-c ${burgerMenuActive===true?'burger-menu-active' :''  }`}
          onClick={burgerMenuVisible}
        >
          <div className='burger-menu-block burger-menu-block1'></div>
          <div className='burger-menu-block burger-menu-block2'></div>
          <div className='burger-menu-block burger-menu-block3'></div>
        </div>
        
        
        <div></div>
        {items.map((item)=>{
          return(
            <NavLink 
              to={`/${item.toLowerCase()}`} 
              key={item}
              className="main-menu-link"
            >
              {item.toUpperCase()}
            </NavLink>
          )  
        })}
      </div>
      
      
    </div>
    <div className={`dropdown-links-container ${burgerMenuActive? 'dropdown-links-container-active' : ''}`} >
      {items.map((item)=>{
        return(
          <NavLink 
            className='dropdown-link'
            key={item}
            onClick={burgerMenuVisible}
            to={`/${item.toLowerCase()}`} 
            
          >
            
          {item}
          </NavLink>
        )
        
      })}
    </div>
    </>
  );
}