import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/HomePages/Home'

// Fast Access Pages
import LearningJourney from './Pages/Pages2/LearningJourney'
import Tools from './Pages/Pages2/Tools'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/learningjourney" element={<LearningJourney />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App