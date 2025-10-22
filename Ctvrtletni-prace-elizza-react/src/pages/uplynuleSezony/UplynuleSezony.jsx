import { MainMenu } from "../../MainMenu/MainMenu"
import { BottomMenu } from "../../BottomMenu/BottomMenu"
import './UplynuleSezony.css'

export function UplynuleSezony () {
  return(
    <>
      <title>Uplynulé sezóny</title>
      <MainMenu />
      <div className="uplynule-sezony-container">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi voluptatum nemo repellendus beatae aspernatur, fugit quaerat nostrum sint cumque praesentium, suscipit inventore corrupti excepturi velit tempora sapiente a eveniet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid suscipit aut sint dicta possimus minima fuga iste cumque est similique, itaque quia vero, voluptas a inventore sed modi minus!
        </div>

      </div>
      <BottomMenu />
    </>
  )
}