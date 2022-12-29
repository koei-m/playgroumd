import React, {Component} from 'react';
import {Animated, View, StyleSheet, Button} from 'react-native';

class AnimatedViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
      scaleAnim: new Animated.Value(1),
    };
  }

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };
  fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  scaleUp = () => {
    Animated.timing(this.state.scaleAnim, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  scaleDown = () => {
    Animated.timing(this.state.scaleAnim, {
      toValue: 0.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: this.state.fadeAnim,
              transform: [
                {scaleX: this.state.scaleAnim},
                {scaleY: this.state.scaleAnim},
              ],
            },
          ]}
        />
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={this.fadeIn} />
          <Button title="Fade Out View" onPress={this.fadeOut} />
          <Button title="Scale Up View" onPress={this.scaleUp} />
          <Button title="Scale Down View" onPress={this.scaleDown} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'red',
    width: 30,
    height: 30,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default AnimatedViewContainer;
