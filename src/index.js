import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import Content from './components/content';
import './style/sb-admin.css';

class Page extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Content />
      </div>
    );
  }

}

ReactDOM.render(<Page />, document.getElementById('root'));
