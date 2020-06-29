import React, { Component } from "react";
import JobScreen from "./JobScreen";
import JobDetail from "./JobDetail";
import { TabNavigator } from "react-navigation";

import { Button, Text, Icon, Footer, FooterTab } from "native-base";

export default (MainScreenNavigator = TabNavigator(
    {
        JobScreen: { screen: JobScreen }
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            onPress={() => props.navigation.navigate("JobScreen")}>
                            <Icon name="bowtie" />
                            <Text>Lucy</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => props.navigation.navigate("JobDetail")}>
                            <Icon name="bowtie" />
                            <Text>Lucy</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
))
