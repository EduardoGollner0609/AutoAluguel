import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './routes/Page'
import HomePage from './routes/Page/HomePage'
import HistoryPage from './routes/Page/HistoryPage'
import AutomobileDetails from './routes/Page/AutomobileDetails'
import { ClientRegister } from './routes/Page/ClientRegister'
import { AutomobileRegister } from './routes/Page/AutomobileRegister'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} >
          <Route index element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="automobile-details/:automobileId" element={<AutomobileDetails />} />
          <Route path="user-register" element={<ClientRegister />} />
          <Route path="automobile-register/:automobileId" element={<AutomobileRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
