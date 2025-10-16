import { Link } from 'react-router'
import OpenIcon from '../../assets/icons/Open-in-new-icon.svg'


export function Years({ year }) {
  return (
    <div>
      <Link target='_blank'>
        {year}
        <img src={OpenIcon}></img>
      </Link>
    </div>
  )
}