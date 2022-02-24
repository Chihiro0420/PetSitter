import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'

// import Registration from './Registration'
import Register from './Registration'


export default function App() {
  cacheUser(useAuth0)

  return (
    <>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profiles' element={<Profile />} />
          {/* 🎈 if you build your Componets comments out! this and check it's working */}
          {/* <Route path='/petsitters/listing' element={<Listing />} /> */}
          <Route path='/petsitters/profiles' element={<PetsitterProfiles />} />
        </Routes>
      </div>
    </>
  )
}
