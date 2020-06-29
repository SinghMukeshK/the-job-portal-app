import * as React from 'react';
import Expo from "expo";
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Badge, Item, Input, Left, Right, Body, Icon, Text } from 'native-base';

import { TabNavigator } from "react-navigation";

import { NavigationContainer, DefaultTheme, DrawerActions } from '@react-navigation/native';

//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';

import UserProvider from './context/UserContext';
import JobProvider from './context/JobContext';


import HomeScreen from './screens/HomeScreen/HomeScreen';
import JobScreen from './screens/JobScreen/JobScreen';
import SettingScreen from './screens/Setting';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  // const isDrawerOpen = useIsDrawerOpen();
  return (
    <NavigationContainer theme={MyTheme}>
      <UserProvider>
        <JobProvider>
          <Header searchBar styles={styles.header} >
            <Icon name="menu" style={styles.menuIcon} />
            <Item style={styles.searchBar}>
              <Input placeholder="Search Openings" />
              <Icon name="ios-search" onPress={() => alert('Searching')} />
            </Item>
            <Icon small name="ios-people" style={styles.menuIcon} />
          </Header>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
            <Drawer.Screen name="Jobs" component={JobScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
          </Drawer.Navigator>
        </JobProvider>
      </UserProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  appheader: {
    backgroundColor: 'blue'
  },
  searchBar: {
    marginLeft: 15,
    marginRight: 15
  },
  menuIcon: {
    paddingTop: 7
  }

});

  // export default function App() {
  //   return (
  //     <Container>
  //       <NavigationContainer theme={MyTheme}>
  //         <UserProvider>
  //           <JobProvider>
  //             <Header>
  //               <Left>
  //                 <Button transparent>
  //                   <Icon name='menu' onPress={() => { }} />
  //                 </Button>
  //               </Left>
  //               <Body>
  //                 <Title>Header</Title>
  //               </Body>
  //               <Right />
  //             </Header>
  //             <Tab.Navigator>
  //               <Tab.Screen name="Home" component={HomeScreen} />
  //               {/* <Tab.Screen name="Details" component={SettingScreen} />
  //               <Tab.Screen name="Setting" component={SettingScreen} /> */}
  //             </Tab.Navigator>
  //           </JobProvider>
  //         </UserProvider>
  //       </NavigationContainer>
  //     </Container >
  //   );
  // }
