import React, { useContext } from 'react';
import { Platform, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Title, Badge, Card, CardItem, Content, Footer, FooterTab, Right, Icon, Button, Text } from "native-base";

import { UserContext } from '../context/UserContext';
import { JobContext } from '../context/JobContext';
import JobCard from './Job/JobCard';
import { readDirectoryAsync } from 'expo-file-system';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();

export default function HomeScreen(props) {
    const { jobs } = useContext(JobContext);
    return (
        <React.Fragment>
            <Content>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        {jobs.map(job => {
                            return <JobCard job={job} navigator={props}></JobCard>
                        })}
                    </ScrollView>
                </SafeAreaView>
            </Content>
        </React.Fragment>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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