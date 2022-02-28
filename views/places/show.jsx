

const React = require('react')
const Def = require('../default')
const Rant = require('./comments')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <br></br>
        <div className='container px-4'>
          <div className='row g-5'>
            <div className='col'>
              <h2>Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <br></br>
              <h2>Cuisines:</h2>
              <p>{data.place.cuisines}</p>
              <br></br>
              <h2>Rating:</h2>
              <p>Not Rated</p>
            </div>
            <div className='col'>
              <img src={data.place.pic} alt={data.place.name}></img>
              <h3>Located in {data.place.city}, {data.place.state}</h3>
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
          <div className='row'>
              <div className='column'>
                <h2>Comments:</h2>
                {comments}
                <div className='row border-top'>
                <h2>Tell Us Your Thoughts!</h2>
            </div>
            <form method='POST' action={`/places/${data.id}/comment`}>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label htmlFor='author'>Author</label>
                        <input 
                        type='text'
                        className='form-control' id='author' name='author' />
                    </div>
                <div className='row'>
                    <label htmlFor='content'>Content</label>
                    <textarea
                    maxLength='500'
                    className='form-control' id='content' name='content' >
                    </textarea>
                </div>               
                    <div className='form-group col-md-4'>
                        <label htmlFor='stars'>Star Rating</label>
                        <input 
                        type='range' step='0.5' max='5.0' required
                        className='form-range' id='stars' name='stars' />
                    </div>
                    <div className='form-group col-sm-1'>
                        <label htmlFor='rant' className='form-check-label'>Rant</label>
                        <input 
                        type='checkbox'
                        className='form-check-input' id='rant' name='rant'/>
                    </div>
                </div>
                <input type='submit' className='btn btn-primary m-1' value='Add Comment' />
            </form>
              </div>
            </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = show