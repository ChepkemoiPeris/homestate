import React from 'react'

function Search() {
  return (
<section className="find_section ">
    <div className="container">
      <form action="">
        <div className=" form-row">
          <div className="col-md-10">
            <input type="text" className="form-control" placeholder="Enter your keyword here "/>
          </div>
          {/* <div className="col-md-5">
            <input type="text" className="form-control" placeholder="Location "/>
          </div> */}
          <div className="col-md-2">
            <button type="submit" className="">
              search
            </button>
          </div>
        </div>

      </form>
    </div>
  </section>
  )
}

export default Search