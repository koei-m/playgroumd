import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';
import AsyncComponent from '../components/AsyncComponent';
import LoadingComponent from '../components/LoadingComponent';
import sagas from '../modules/reducers/sagas';

const mapStateToProps = state => {
  return {
    name: sagas.selectName(state),
    time: sagas.selectTime(state),
    isLoading: sagas.selectIsLoading(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTime: () =>
      dispatch(sagas.asyncActions.getTimeRequested({flag: true})),
    fetchName: () =>
      dispatch(sagas.asyncActions.getNameRequested({name: 'KOEI'})),
  };
};

class AsyncContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.isLoading ? <LoadingComponent /> : <AsyncComponent />}
        <Button title="GET_NAME" onPress={this.props.fetchName} />
        <Button title="GET_TIME" onPress={this.props.fetchTime} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncContainer);
