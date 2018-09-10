import React, {Component} from 'react';
import {Platform, StatusBar, Text, View, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from './pages/home';
import Login from './pages/login';
import Form from './pages/form';


const stackNavigatorOptions: (navigation) => {
    initialRouteName: 'Home',
    title: 'ReactNavigation',  // Title to appear in status bar
        headerLeft: ()=>{
            return(
              <TouchableOpacity  >
                {navigation.state.isDrawerOpen ? 'OPEN' : 'CLOSE'}
              </TouchableOpacity>
            )
        },
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
}

const drawerNavigatorOptions = {
    initialRouteName: 'Form'
}

const DrawerRouters = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Form: {
    screen: Form
  },
}, drawerNavigatorOptions);

const Routers = createStackNavigator({
  Home: {
    screen: DrawerRouters,
  },
  Login: {
    screen: Login
  },
}, stackNavigatorOptions);


export default Routers;
