import { Link } from 'react-router'
import ArrowIcon from '../../assets/icons/arrow_right.svg'
import './Years.css'

export function Years({ year }) {
  return (
      <Link className='year-link' to={`/zápisy výboru a turnaje/${year}`}>
        {year}
        <img src={ArrowIcon}></img>
      </Link>
  )
}