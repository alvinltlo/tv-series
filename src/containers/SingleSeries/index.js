import React, {Component} from 'react';
import Loader from '../../components/Loader';
import SerieDetail from '../../components/SeriesDetail';
import { Link } from 'react-router-dom';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
    .then(response => response.json())
    .then(json => this.setState({ show: json}))
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        { show === null && <Loader /> }
        { show !== null
          &&
          <SerieDetail showDetail={this.state.show}/>
        }
        <Link to={`/`}>
          back
        </Link>
      </div>
    )
  }
}

export default SingleSeries;
