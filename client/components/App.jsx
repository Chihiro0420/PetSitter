import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Routes, Route, useNavigate } from 'react-router-dom'

// 🎈components linked
import Nav from './Nav'
import Main from './Main'
import PetsitterForm from './PetsitterForm'
import ListingProfiles from './ListingProfiles'
import Registration from './Registration'
import Listings from './Listings'
import Login from './Login'
import Footer from './Footer'
import WaitIndicator from './WaitIndicator'
import MyAccountEdit from './MyAccountEdit'
import Helpdesk from './Helpdesk'
import ContectBtn from './ContectBtn'
import AboutUs from './AboutUs'

export default function App () {
  const navigate = useNavigate()
  cacheUser(useAuth0, navigate)
  return (
    <>
      <div className='app'>
        <Nav />
        <WaitIndicator />
        <ContectBtn />
        <Routes>
          {/* <ScrollToTop /> */}
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/myaccount' element={<Login />} />
          <Route path='/myaccount/edit' element={<MyAccountEdit />} />
          <Route path='/petsitters' element={<Listings />} />
          <Route path='/petsitters/add' element={<PetsitterForm />} />
          <Route path='/petsitters/profiles/:id' element={<ListingProfiles />} />
          <Route path='/faq' element={<Helpdesk />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
