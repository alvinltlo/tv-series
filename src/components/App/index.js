import React, { Component } from 'react';
import logo from '../../logo.svg';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  // state = {
  //   series: []
  // }

  // componentDidMount() {
    // const series = ["Vikings","Game of Thrones"];
    //
    // setTimeout(() => {
    //   this.setState({series: series})
    // }, 2000);

    // fetch('http://api.tvmaze.com/search/shows?q=vikings')
    // .then((response) => {console.log(response)})

  //   fetch('http://api.tvmaze.com/search/shows?q=vikings')
  //   .then(response => response.json())
  //   .then(json => this.setState({series:json}))
  // }

  render() {
    //          <img src={logo} className="App-logo" alt="logo" />
    return (
      <div className="App">
        <header className="App-header">
          <span className="h4"><FontAwesomeIcon icon="tv" size="s"/> TV Series List</span>
        </header>
           <Main />
      </div>
    );
  }
}

export default App;
