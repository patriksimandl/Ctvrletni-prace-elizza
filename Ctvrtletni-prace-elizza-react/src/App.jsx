import {Routes, Route} from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { Kontaky } from './pages/kontakty/Kontakty'


function App() {
  return(
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path='/kontakty' element={<Kontaky />}/>
      <Route/>
    </Routes>
    
  )
}

export default App
