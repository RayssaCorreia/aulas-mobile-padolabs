import  * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator, createNavigationStackNavigation} from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function HomeScreen ({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>      
  );
}

function DetailsScreen (){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Details Screen</Text>
    </View>  
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;