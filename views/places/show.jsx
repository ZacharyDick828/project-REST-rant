

const React = require('react')
const Def = require('../default')


  function show(data) {
    let comments = <h3 className="inactive">No comments yet!</h3>
    let rating = <h3 className="inactive">Not yet rated</h3>
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = "";
      for (let i = 0; i < averageRating; i++) {
        stars += "⭐️";
      }
      rating = <h3>{stars} stars</h3>;
      comments = data.place.comments.map((c) => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? "Rant! 😡 " : "Rave! 😻' "} </h2>
            <h4>{c.content}</h4>
            <h3>
              <strong>- {c.author} </strong>
            </h3>
  
            <h4>Rating: {c.stars} </h4>
          </div>
        )
      })
    }
  return (
    <Def>
      <div>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img className="m-4" src={data.place.pic} alt={data.place.name} />
              <h3 className="text-center">
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h1 className="m-4">{data.place.name}</h1>
              <h2>Rating</h2>
              {rating}
              <br />
              <h2>Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
              <div className="d-flex justify-content-center">
                <a
                  href={`/places/${data.place.id}/edit`}
                  className="btn btn-warning mx-4"
                >
                  Edit <i className="fas fa-trash-alt"></i>
                </a>
                <form
                  method="POST"
                  action={`/places/${data.place.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-danger btn-md">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />

          <div className="row mt-5">
            <div className="col-sm-12">
              <h2>
                Comments <i className="bi bi-chat-left-dots"></i>
              </h2>
            </div>
            {comments}
          </div>
          <h2>Leave a Rant or Rave!</h2>
          <form method="POST" action={`/places/${data.place.id}?_method=POST`}>
            <div className="container">
              <div className="row justify-content-start">
                <label htmlFor="">Content</label>
                <input
                  name="content"
                  type="text"
                  className="col-12"
                  maxLength="45"
                />
              </div>
            </div>

            <div className="container">
              <div className="row  mt-5">
                <div className="col-5 ">
                  <label htmlFor="">Author</label> <br />
                  <input name="author" type="text" className="col-12" />
                </div>

                <div className="col-5">
                  <label htmlFor="customRange2" className="form-label ">
                    Star Rating
                  </label>
                  <input
                    name="stars"
                    type="range"
                    className="form-range col-8 col-md-6"
                    min="0"
                    max="5"
                    id="customRange2"
                  ></input>
                </div>

                <div className="col mt-1">
                  <label htmlFor="">Rant?</label> <br />
                  <input
                    name="rant"
                    type="checkbox"
                    className="
               form-check-input"
                  />
                </div>
              </div>
            </div>
            <button className="m-5 btn btn-primary btn-lg"> Add Comment</button>
          </form>
        </main>
      </div>
    </Def>
  );
}


module.exports = show