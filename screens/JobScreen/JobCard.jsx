import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    TouchableHighlight,
    SafeAreaView,
    ScrollView
} from 'react-native';

import { Card, CardItem, Body, Text, View, Button, Thumbnail, Icon, Tabs, Tab, TabHeading } from 'native-base';
import JobDetails from './JobDetail';

export default function JobCard(props) {
    let job = props.job;
    const [modalVisible, setModalVisible] = useState(false);
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <Card key={job.jobId} bordered>
            <CardItem header bordered>
                <Thumbnail small source={{ uri: uri }} style={styles.thumbnail} />
                <Text styles={styles.jobTitle}>{`${job.jobTitle}\nPosted on : ${job.jobDetail.postedOn}`}</Text>
            </CardItem>
            <CardItem >
                <Body>
                    <Text>{job.jobDetail.detailDescription}</Text>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text>View more</Text>
                    </TouchableHighlight>

                </Body>
            </CardItem>
            <CardItem footer bordered>
                <Button transparent small rounded onPress={() => handleViewMore(props.navigator)}>
                    <Text>Like</Text>
                    <Text>Comment</Text>
                    <Text>Share</Text>
                </Button>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <SafeAreaView>
                                <ScrollView>
                                    <JobDetails job={job} />

                                    <TouchableHighlight
                                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text>Close</Text>
                                    </TouchableHighlight>
                                </ScrollView>
                            </SafeAreaView>
                        </View>
                    </View>
                </Modal>
            </CardItem>
        </Card >
    )
}

function handleViewMore(props) {
    console.log(props)
    alert('clicked')
    props.navigation.navigate('JobDetails')
}
const styles = StyleSheet.create({
    container: {
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
    thumbnail: {
        marginRight: 5
    },
    jobTitle: {
        marginRight: 2
    },
    centeredView: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginTop: 50,
        backgroundColor: "white",
        borderRadius: 0,
        minHeight: window.height,
        padding: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        textShadowColor: "pink"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
