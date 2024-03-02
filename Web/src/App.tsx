import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FrontPage, IndexLayout } from './pages'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route index element={<FrontPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
