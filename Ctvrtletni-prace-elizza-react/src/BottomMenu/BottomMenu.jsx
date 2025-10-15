import{NavLink} from 'react-router'
import './BottomMenu.css'
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