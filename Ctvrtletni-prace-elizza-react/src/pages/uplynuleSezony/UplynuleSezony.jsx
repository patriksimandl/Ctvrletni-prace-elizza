import { MainMenu } from "../../MainMenu/MainMenu"
import { BottomMenu } from "../../BottomMenu/BottomMenu"
import './UplynuleSezony.css'
import maLong from '../../assets/Images/Malong-celebration.avif';
import shareIcon from '../../assets/icons/share-icon.svg';
import photoIcon from '../../assets/icons/photo-album-icon.svg'
import { Post } from "../../shared/Post";
import { uplynuleSezonyContent } from "../../data/uplynuleSezony"; 

export function UplynuleSezony() {
  
  
  return (
    <>
      <title>Uplynulé sezóny</title>
      <MainMenu />
      <div className="uplynule-sezony-container">
        {uplynuleSezonyContent.map((item)=>{
          console.log(item.textContent);
          return(
            <Post image={item.image} header={item.header} textContent={item.textContent} />
          )
        })}
        

      </div>
      <BottomMenu />
    </>
  )
}