// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Events from '.assets/pages/Events'
import Bookings from '.assets/pages/Bookings'
import Dashboard from '.assets/pages/Dashboard'
import EventDetails from './assets/pages/EventDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  )
}

export default App
