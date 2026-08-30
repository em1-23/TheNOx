import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/HomePages/Home'
import Header from './Pages/HomePages/Header'
// Fast Access Pages

import Tools from './Pages/Pages2/Tools'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/tools" element={<Tools />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App