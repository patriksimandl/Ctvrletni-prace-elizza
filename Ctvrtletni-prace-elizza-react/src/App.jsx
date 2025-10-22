import {Routes, Route} from 'react-router'
import { useState } from 'react'
import { HomePage } from './pages/home/HomePage'
import { Kontaky } from './pages/kontakty/Kontakty'
import{Mladez} from './pages/mladez/Mladez'
import { UplynuleSezony } from './pages/uplynuleSezony/UplynuleSezony'
import { ZapisyVyboru } from './pages/zapisyVyboru/ZapisyVyboru'
import { Zapisy } from './pages/zapisyVyboru/Zapisy'

function App() {
  //make from array items state and move it to App component
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  return(
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path='/mládež' element={<Mladez />}/>
      <Route path='/zápisy výboru a turnaje' element={<ZapisyVyboru winWidth={winWidth} setWinWidth={setWinWidth}/>}/>
      <Route path='/uplynulé sezóny' element={<UplynuleSezony />}/>
      <Route path='/zápisy výboru a turnaje/:year' element={<Zapisy />}/>

      <Route path='/kontakty' element={<Kontaky />}/>
    </Routes>
    
  )
}

export default App
