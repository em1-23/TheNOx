import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/HomePages/Home'
import Header from './Pages/HomePages/Header'
// Fast Access Pages

import Tools from './Pages/Pages2/Tools'
import Experiments from './Pages/Pages2/Experiments'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/experiments" element={<Experiments />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App