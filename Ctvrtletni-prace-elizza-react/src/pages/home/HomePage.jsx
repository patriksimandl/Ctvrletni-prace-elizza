import { BottomMenu } from "../../BottomMenu/BottomMenu"
import { MainMenu } from "../../MainMenu/MainMenu"
import { homeContent } from "../../data/home"
import { Post } from "../uplynuleSezony/Post"
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <MainMenu />
      <div className="home-page-container">
        {homeContent.map((item) => {
          return (
            <Post image={item.image} header={item.header} textContent={item.textContent} />
          )
        })}
      </div>
      <BottomMenu />

    </>
  )
}