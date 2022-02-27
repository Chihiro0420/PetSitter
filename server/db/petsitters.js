const connection = require('./connection')

module.exports = {
  listPetsitters,
  addListing,
  deleteListing
}

function listPetsitters (db = connection) {
  return db('petsitters')
    // .where('auth0_id', auth0Id)
    .select()
}

function addListing (listing, db = connection) {
  const { id, name, location, petNumber, petType, petSize, homeType, serviceRate, availability, description, promoListing } = listing
  const newListing = {
    id,
    name,
    location,
    pet_number: petNumber,
    pet_type: petType,
    pet_size: petSize,
    home_type: homeType,
    service_rate: serviceRate,
    availability,
    description,
    promo_listing: promoListing
  }
  return db('petsitters')
    .insert(newListing)
}

function deleteListing (id, db = connection) {
  return db('petsitters')
    .where('id', id)
    .del()
}
