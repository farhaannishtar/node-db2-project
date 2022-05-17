// STRETCH
const cars = [
  {
    vin: '1111111111111',
    make: 'lexus',
    model: 'dope',
    mileage: 444,
    title: 'clean',
    transmission: 'manual' 
  },
  {
    vin: '1111111111112',
    make: 'honda',
    model: 'nice',
    mileage: 444,
    title: 'clean',
  },
  {
    vin: '11111111111113',
    make: 'merc',
    model: 'fast',
    mileage: 444, 
  }
]

exports.seed = function(knex) {
  return knex('cars')
    .truncate().then(() => {
      return knex('cars').insert(cars)
    })
}