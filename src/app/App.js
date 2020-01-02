import React from 'react'
import { Router } from '@reach/router'
import Details from '../components/details/details'
import './App.css'
import List from '../components/list/list'

function App() {
  return (
    <div>
      <header>
        <h1>Garden Sensors</h1>
      </header>
      <Router>
        <List path='/' />
        <Details path='/details/:id' />
      </Router>
    </div>
  )
}

export default App
