// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  )
}

export default App