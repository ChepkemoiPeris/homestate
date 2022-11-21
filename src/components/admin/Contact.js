import React from 'react'

function Contact() {
  return (
    <div className="card card-outline-secondary">
    <div className="card-header">
        <h3 className="mb-0">Contact</h3>
        <p className="card-category">Contact for support
                        </p>
    </div>
    <div className="card-body">
        <form className="form" role="form" autocomplete="off">
            <fieldset>
                <label htmlFor="name2" className="mb-0">Name</label>
                <div className="row mb-1">
                    <div className="col-lg-12">
                        <input type="text" name="name2" id="name2" className="form-control" required=""/>
                    </div>
                </div>
                <label htmlFor="email2" className="mb-0">Email</label>
                <div className="row mb-1">
                    <div className="col-lg-12">
                        <input type="text" name="email2" id="email2" className="form-control" required=""/>
                    </div>
                </div>
                <label htmlFor="message2" className="mb-0">Message</label>
                <div className="row mb-1">
                    <div className="col-lg-12">
                        <textarea rows="6" name="message2" id="message2" className="form-control" required=""></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary btn-lg float-right">Send Message</button>
            </fieldset>
        </form>
    </div>
</div>

  )
}

export default Contact