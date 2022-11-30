
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator, createNavigationStackNavigation} from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export function calendario ({ navigation}) {
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


export default calendario;
