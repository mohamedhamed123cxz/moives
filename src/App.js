import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import ContextProvider from './compontonts/context/GlobalState'
import Watchlist from './compontonts/Watchlist'
import Watched from './compontonts/Watched'
import Header from './compontonts/Header'
import Add from './compontonts/Add'

function App() {
  return (
    <Router>
     <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist/>} />
          <Route path="/watched" element={<Watched/>} />
          <Route path='/add' element={<Add />}/>
        </Routes>
       </ContextProvider>
    </Router>
  )
}

export default App
