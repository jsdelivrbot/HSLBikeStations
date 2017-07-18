import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchLocations } from '../actions/index';

class LocationList extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  renderLocations() {
    // Go through objects and return li elements with stationIds and names.
    return _.map(this.props.locations, location => {
      return (
        <li className="list-group-item" key={location.stationId}>
          <Link to={`/station/${location.stationId}`}>{location.stationId}: {location.name}</Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h3>Pyöräasemat</h3>
        <ul className="list-group">
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({locations}) {
  return { locations: locations };
}

export default connect(mapStateToProps, { fetchLocations })(LocationList);
