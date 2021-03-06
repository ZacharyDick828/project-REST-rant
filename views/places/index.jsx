// Imports
const React = require('react')
const Def = require('../default')

// Places view function
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={place.name} className='col-sm-6'>
                <h2>
                    <a href={`/places/${place.id}`}>{place.name}</a>
                </h2>
                <p key={data.index} className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
                <p key={data.index} className='text-center'>
                    {place.cuisines}
                </p>
                <img key={data.index} src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index