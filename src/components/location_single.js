import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchLocation } from '../actions/index'

class LocationSingle extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchLocation(id);
  }

  render() {
    const { location } = this.props;

    if (!location) {
      return <div>Lataa...</div>
    }

    return(
      <div>
        <Link to="/">{"<"} Back to Index</Link>
        <h3>{location.name}</h3>
        <p>Pyöriä vapaana: {location.bikesAvailable}<br />
        Paikkoja vapaana: {location.spacesAvailable}</p>
        <h5>Koordinaatit:</h5>
        <p>Latitude: {location.lat}<br />
        Longitude: {location.lon}</p>
      </div>
    );
  }
}

function mapStateToProps({ locations }) {
  return { location: locations }
}

export default connect(mapStateToProps, { fetchLocation })(LocationSingle);
