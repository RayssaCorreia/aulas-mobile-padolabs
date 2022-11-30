/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator, createNavigationStackNavigation } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Image
          style={{ width: 20, height: 20 }}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8929/8929788.png' }}
        />
        <Text style={{ fontWeight: 'bold', color: '#000000' }}>Accra, Ghana</Text>
      </View >

      <Text style={{ marginTop: 5, marginBottom: 60 }}>20-Sep-22</Text>

      <View style={{
        display: 'flex', flexDirection: 'row', width: 306, height: 161, backgroundColor: '#ffffff', padding: 10, justifyContent: 'space-between', alignItems: 'center', borderRadius: 15, elevation: 20,
        shadowColor: 'grey'
      }}>
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: 120, height: 120 }}>
          <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 62 }}> 20°</Text>
          <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 12 }}> Real feel: 20</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: 120, height: 120 }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7589/7589025.png' }}
          />
          <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 20 }}> Cloudy</Text>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, width: 306, height: 161, padding: 40, justifyContent: 'space-between', alignItems: 'center', }}>
        <View>
          <Text style={{ color: '#414B5A' }}>UV Index</Text>
          <Text style={{ color: '#414B5A' }}>Humidity</Text>
          <Text style={{ color: '#414B5A' }}>Wind Speed</Text>
          <Text style={{ color: '#414B5A' }}>Rain Probability</Text>
          <Text style={{ color: '#414B5A' }}>Pressure</Text>
        </View>
        <View>
          <Text style={{ color: '#414B5A' }}> </Text>
          <Text style={{ color: '#414B5A' }}>55</Text>
          <Text style={{ color: '#414B5A' }}>5.00 mph</Text>
          <Text style={{ color: '#414B5A' }}>30%</Text>
          <Text style={{ color: '#414B5A' }}>1023.1 pa</Text>
        </View>
      </View>

    </View>


  );
}

function calendario() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>calendario!</Text>
    </View>
  );
}

function Localizacao() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Localizacao!</Text>
    </View>
  );
}

function Metas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Metas!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Metas"
        component={Metas}
        options={{
          tabBarLabel: 'Metas',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="calendario"
        component={calendario}
        options={{
          tabBarLabel: 'calendario',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Localizacao"
        component={Localizacao}
        options={{
          tabBarLabel: 'Localizacao',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


