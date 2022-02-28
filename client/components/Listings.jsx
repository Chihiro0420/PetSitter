import { Link } from 'react-router-dom'
import ListingsItem from './ListingsItem'
import React, { useEffect, useState } from 'react'
import { getListing } from '../apis/listings'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListingFromList } from '../actions/listings'
// import { fetchListing } from '../actions/listing'

function Listings () {
  const dispatch = useDispatch()

  // << Using useState >>
  const [listings, setListings] = useState([])

  const token = useSelector(state => state.user.token)

  const [search, setSearch] = useState('')

  const [dropdownLists, setDropdownLists] = useState({
    service: '-1',
    pet: '-1'
  })

  useEffect(() => {
    getListing()
      .then(apiResponse => {
        setListings(apiResponse)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [dropdownLists])

  function deleteFromList (id) {
    dispatch(deleteListingFromList(id, token))
    getListing()
      .then(apiResponse => {
        setListings(apiResponse)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  // << this is for select service and pet type >>
  function setSelectPetBar (event) {
    setDropdownLists({
      ...dropdownLists,
      [event.target.name]: event.target.value

    })
  }

  // << this is for location search bar >>
  function handleChange (event) {
    const searchTerm = event.target.value
    setSearch(searchTerm)
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('drop', dropdownLists)
    console.log('search', search)

    getListing(search)
      .then(listings => {
        const filterdata = listings.filter(listing => listing.location.toLowerCase().includes(search.toLowerCase()) && listing.pet_type === dropdownLists.pet && listing.service_rate.toLowerCase().includes(dropdownLists.service.toLowerCase()))
        setListings(filterdata)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <div className="listing-image">
        <img src="/images/listing-top.jpeg" alt="" />
        <div className="listing-top">
          <div>
            <p>I am looking for</p>
            <div className="listing-button">
              <select onChange={setSelectPetBar} value={dropdownLists.service} name="service" className ="select-pet">
                <option value="-1">--- Select Service ---</option>
                <option value="Pet Sitting">Pet Sitting</option>
                <option value="Pet Walking">Pet Walking</option>
                <option value="Pet Boarding">Pet Boarding</option>
                <option value="Pet Grooming">Pet Walking</option>
              </select>
            </div>
            <div>
              <p>My pet type</p>
              <select onChange={setSelectPetBar} value={dropdownLists.pet} name="pet" className ="select-pet">
                <option value="-1">--- Select Pet Type ---</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="guinea pig">Guinea pig</option>
                <option value="rabbit">Rabbits</option>
              </select>
            </div>
            <div>
              <p>Near me in</p>
              <div className="wrap">
                <div className="searchbar-button">
                  <input
                    onChange={handleChange}
                    value={search}
                    type="text"
                    id='searchValue'
                    className="searchbar"
                    placeholder='Input your area'
                    name='searchValue'></input>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="linkto-add-profile">
        <h3>Would you like to be a pet sitter?</h3>
        <p>Please click here to post your profile!</p>
        <Link to='/petsitters/add' className="button-linktoaddprofile">Add to listing</Link>
      </div>
      {/* display all lists */}
      <p>Scroll down to browse our friendly pet sitters to help with your boarding or caring needs for your furry best friend! 💖</p>
      { listings.map((listing) => {
        return <>
          <ListingsItem listing={listing} deleteFromList={deleteFromList}/>
        </>
      })}

      {/* search function : select service or pet type */}
      {/* { dropdownLists
        ? listings
          // .filter(pet => pet.pet_type === dropdownLists.pet && pet.service_rate.toLowerCase().includes(dropdownLists.service.toLowerCase()))
          .map((listing) => {
            return <>
              <ListingsItem listing={listing} deleteFromList={deleteFromList}/>
            </>
          })
        : listings
          .map((listing) => {
            return <>
              <ListingsItem listing={listing} deleteFromList={deleteFromList}/>
            </>
          })
      } */}
      {/* search function : location */}
      {/* {search.length === 0
        ? listings.map((listing) => {
          return <>
            <ListingsItem listing={listing} deleteFromList={deleteFromList} />
          </>
        })
        : listings
          // .filter(listing => listing.location.toLowerCase().includes(search.toLowerCase()))
          .map((listing) => {
            return <>
              <ListingsItem listing={listing} deleteFromList={deleteFromList} />
            </>
          })
      } */}
    </>

  )
}

export default Listings
