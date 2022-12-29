import React, {Component} from 'react';
import {connect} from 'react-redux';
import ControlSpeed from '../components/ControlSpeed';
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

class ControlSpeedContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ControlSpeed
        onValueChange={speed => {
          this.props.updateSpeed(speed);
        }}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlSpeedContainer);
