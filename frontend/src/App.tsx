import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './routes/Page'
import HomePage from './routes/Page/HomePage'
import HistoryPage from './routes/Page/HistoryPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} >
          <Route index element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
