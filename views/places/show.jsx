
   
const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.places.name}</h1>
            <br></br>
            <div className='container px-4'>
              <div className='row g-5'>
                <div className='col'>
                  <h2>Location:</h2>
                  <p>{data.place.city}, {data.place.state}</p>
                  <br></br>
                  <h2>Cuisines:</h2>
                  <p>{data.place.cuisines}</p>
                  <br></br>
                  <h2>Rating:</h2>
                  <p>Not Rated</p>
                </div>
                <div className='col'>
                  <img src={data.place.pic} alt={data.place.name}></img>
                </div>
                <div className='row'>
                  <div className='column'>
                    <h2>Comments:</h2>
                    <p>No comments</p>
                  </div>
                </div>
              </div>
              <div className='row gy-1 gx-2'>
                <div className='col-1 gx-1'>
                  <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                </div>
                <div className='col-1'>
                  <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
                    <input type='submit' className='btn btn-danger' value='Delete' />
                  </form>
                </div>
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show