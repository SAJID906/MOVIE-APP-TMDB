import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Header from './commponent/Header'
import WatchList from './commponent/WatchList'
import Watched from './commponent/Watched'
import Add from './commponent/Add'
import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    
    <>
    <GlobalProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<WatchList/>}/>
        <Route path='/Watched' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </Router>
    </GlobalProvider>
    </>
  )
}

export default App