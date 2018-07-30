import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader'

class Series extends Component {

  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

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

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true});

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({series:json, isFetching: false}))
    //console.log(e);
    //console.log(e.target.value);
  }

  render () {
    const { series, seriesName, isFetching } = this.state;
    return (
      //<div>Series container  The length of series array - {this.state.series.length}
      <div>
        <Intro message="Here you can find all of your most loved series"/>
      <div>
        <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
      </div>
      {
        !isFetching && series.length === 0 && seriesName.trim() ===''
        &&
        <p>Please enter series name into the input</p>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !==''
        &&
        <p>No TV series have been found with this name</p>
      }
      {
        isFetching && <Loader/>
      }
      {
        !isFetching && <SeriesList list={this.state.series} />
      }
      </div>
    )
  }
}

export default Series;
