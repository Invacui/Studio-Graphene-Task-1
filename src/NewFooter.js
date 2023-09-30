import React from "react";

const NewFooter = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row justify-content-around">
          <div className="col-md-4 border border-primary">
            <h1>NewsLetter</h1>
            <p>Get news about articles and updates in your inbox</p>
          </div>
          <div className="col-md-5">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary py-2">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <p className="mb-0">Copyright 2022 All Rights Reserved by SG</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
