import React, { Component } from 'react';
import App from '../video';

class Content extends Component {

  render() {
    return(
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="">Videos</a>
            </li>
            <li className="breadcrumb-item active">Youtube_API with react</li>
          </ol>
          <div className="row">
              <App />
          </div>
        </div>
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small></small>
            </div>
          </div>
        </footer>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    );
  }

}

export default Content;
