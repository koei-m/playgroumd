import React, {Component} from 'react';
import {connect} from 'react-redux';
import VehicleSpeed from '../components/VehicleSpeed';
import vehicleReducer from '../modules/reducers/vehicle-reducer';

const mapStateToProps = state => {
  return {speed: vehicleReducer.selectSpeed(state)};
};

const mapDispatchToProps = dispatch => {
  return {
    updateSpeed: speed =>
      dispatch(vehicleReducer.vehicleActions.updateSpeed(speed)),
  };
};

class VehicleSpeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <VehicleSpeed targetSpeed={this.props.speed} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VehicleSpeedContainer);
