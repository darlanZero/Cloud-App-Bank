import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutUs, FrontPage, IndexLayout } from './pages'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route index element={<FrontPage />} />
          <Route path='/about' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
