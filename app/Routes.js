import React, {Component} from 'react';
import {Platform, StatusBar, Text, View, Button, TouchableOpacity} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './screens/home';
import Login from './screens/login';
import Form from './screens/form';
import SideBar from "./screens/sidebar";


const DrawerRouters = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Form: {
    screen: Form
  },
},{
    initialRouteName: 'Form',
    contentOptions: {
     activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
});

const Routers = StackNavigator({
  Drawer: { screen: DrawerRouters },
}, {
    initialRouteName: "Drawer",
    headerMode: "none",
    title: 'ReactNavigation',  // Title to appear in status bar

});


export default Routers;
