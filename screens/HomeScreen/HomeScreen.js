import React, { useContext } from "react";
import { Platform, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import JobScreen from '../JobScreen/JobScreen';
import ResultsScreen from '../ResultsScreen/ResultsScreen';
import Notifications from '../NotificationScreen/Notifications';

export default function HomeScreen(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Jobs" component={JobScreen}></Tab.Screen>
            <Tab.Screen name="Notifications" component={Notifications} />
            {/* <Tab.Screen name="Results" component={ResultsScreen} /> */}
            {/* <Tab.Screen name="Videos" component={JobScreen} /> */}
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
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
});
