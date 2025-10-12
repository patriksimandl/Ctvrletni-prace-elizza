import {Link, NavLink} from 'react-router'
import ElizzaLogo from '../assets/elizza logo.jpg'
import './MainMenu.css'

export const items = ['Mládež', 'Uplynulé sezóny',  'Zápisy výboru a turnaje', 'Kontakty'];

export function MainMenu() {
  
  return (
    <div className="main-menu">
      <Link to='/'>
        <img className='logo' src={ElizzaLogo} />
      </Link>
      <div className="main-menu-right-container">
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
  );
}