import { Link, useParams } from 'react-router'
import { zapisy } from '../../data/zapisyVyboru'
import { MainMenu } from '../../MainMenu/MainMenu';
import OpenInNewIcon from '../../assets/icons/Open-in-new-icon.svg'
import './Zapisy.css'
import Harimoto from '../../assets/Images/harimoto-celebration.avif'
import { BottomMenu } from '../../BottomMenu/BottomMenu';


export function Zapisy() {
  const params = useParams();

  const { year } = params;




  return (
    <>
      <MainMenu />


      <div className='zapisy-page-container'>
        <div className="gradiant"/>
        <img src={Harimoto} className='background-image' />
        <div className="green-gradiant"/>
        <div className='links-container'>
        


          {zapisy.map((item) => {
            if (item['name'].includes(year)) {
              return (
                
                  <Link className='link' key={item['name']} to={item['link']} target='_blank'>
                    
                      {item['name']}
                      <img src={OpenInNewIcon} alt='Open-in-new-icon' className='open-in-new-icon'/>
                  </Link>
                

              )
            }
          })}
        </div>
        
      </div>
      <BottomMenu />
      
    </>
  )
}