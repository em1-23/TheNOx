import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/HomePages/Home'

// Fast Access Pages
import Tools from './Pages/Pages2/Tools'
import Experiments from './Pages/Pages2/Experiments'
import Goals from './Pages/Pages2/Goals'
import Websitecreate from './Pages/Pages2/Websitecreate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/experiments" element={<Experiments />}></Route>
        <Route path="/goals" element={<Goals />}></Route>
        <Route path="/websitecr" element={<Websitecreate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App