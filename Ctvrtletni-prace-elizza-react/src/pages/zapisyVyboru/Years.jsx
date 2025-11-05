import { Link } from 'react-router'
import ArrowIcon from '../../assets/icons/arrow_right.svg'
import './Years.css'
import { useEffect, useState, useRef } from 'react'

export function Years({ year,winWidth }) {
  const [isHovering,setIsHovering] = useState(false);
  

  const yearElement = useRef(null);

  
  const [yearElementWidth,setYearElementWidth] = useState(null)


 
  useEffect( ()=>{
    const setWidth = () =>{
      if (yearElement.current) {
        setYearElementWidth(yearElement.current.clientWidth);
      }
    }
    
    setWidth();
    
  },[winWidth])

 


  const changeHover = async() => {
    
    await setIsHovering(!isHovering);
  }

 

  return (
    <Link 
      onMouseEnter={changeHover}
      
      onMouseLeave={changeHover}
      ref={yearElement}
      className='year-link'
      to={`/Zápisy výboru/${year}`}
    >
      <span className='year-link-year'>{year}</span>
      <img 
        className={`year-link-arrow-image`} 
        style={{transform: isHovering ? `translateX(${yearElementWidth - 115}px) translate(-50%,-50%)` :`translateX(0%) translate(-50%,-50%)` }}
            
        src={ArrowIcon}
        />
    </Link>
  )
}