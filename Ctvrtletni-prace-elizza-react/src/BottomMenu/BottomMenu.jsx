import{NavLink} from 'react-router'
import './BottomMenu.css'
import ElizzaLogoWhtie from '../assets/elizza-logo-white-removebg-preview.png'
import PrahaLogo from '../assets/Praha-11-logo-removebg-preview.png'
import { items } from '../MainMenu/MainMenu'



export function BottomMenu() {
  return (
    <div className="bottom-menu">
      <div className='bottom-menu-items'>
        {items.map((item) =>{
          return(
            <NavLink 
              to={`/${item.toLowerCase()}`} className="bottom-menu-item-container" 
              key={item}
            >
              {item}
            </NavLink>
          )
        })}
        
      </div>
      <div className='company-container'>
        ©2025 TTC Elizza Praha
      </div>
    </div>
  )
}