import React, { useContext } from "react";
import { Platform, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";


import { NavigationContainer, DefaultTheme, DrawerActions } from '@react-navigation/native';

import { JobContext } from '../../context/JobContext';
import JobCard from './JobCard';

import HomeScreen from '../HomeScreen/HomeScreen'


export default function JobScreen(props) {
    const { jobs } = useContext(JobContext);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {jobs.map(job => {
                    return <JobCard job={job} navigator={props}></JobCard>
                })}
            </ScrollView>
        </SafeAreaView>
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