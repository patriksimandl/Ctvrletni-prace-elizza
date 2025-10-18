import { Link } from 'react-router'
import ArrowIcon from '../../assets/icons/arrow_right.svg'
import './Years.css'
import { useState } from 'react'

export function Years({ year }) {
  const [isHovering,setIsHovering] = useState(false);
  
  const changeHover = () => {
    setIsHovering(!isHovering);
  }

  return (
    <Link 
      onMouseEnter={changeHover}
      onMouseLeave={changeHover}
      className='year-link'
      to={`/zápisy výboru a turnaje/${year}`}
    >
      <span className='year-link-year'>{year}</span>
      <img className={`year-link-arrow-image ${isHovering ? 'transform-right' : 'transform-left'}`}  src={ArrowIcon}/>
    </Link>
  )
}