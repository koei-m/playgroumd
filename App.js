import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import store from './src/modules/reducers/store';
import VehicleSpeedScreen from './src/navigators/VehicleSpeedScreen';
import AnimatedViewScreen from './src/navigators/AnimatedViewScreen';
import AsyncScreen from './src/navigators/AsyncScreen';
import UiContextProvider from './src/context/UiContextProvider';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  const SCREENS = [
    {
      name: 'VehicleSpeedScreen',
    },
    {
      name: 'AnimatedViewScreen',
    },
    {
      name: 'AsyncScreen',
    },
  ];

  const Item = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.name);
        }}
        style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SCREENS}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <UiContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerTitle: 'HomeScreen',
              }}
            />
            <Stack.Screen
              name="VehicleSpeedScreen"
              component={VehicleSpeedScreen}
              options={{
                headerTitle: 'VehicleSpeedScreen',
              }}
            />
            <Stack.Screen
              name="AnimatedViewScreen"
              component={AnimatedViewScreen}
              options={{
                headerTitle: 'AnimatedViewScreen',
              }}
            />
            <Stack.Screen
              name="AsyncScreen"
              component={AsyncScreen}
              options={{
                headerTitle: 'AsyncScreen',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UiContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 32,
  },
});
