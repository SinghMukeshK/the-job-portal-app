import React from 'react';

import { SafeAreaView, ScrollView } from 'react-native';
import { Card, CardItem, Body, Text, View, Accordion, Content, Container, Header, Item } from 'native-base';

export default function JobCard(props) {
    let job = props.job;
    return (
        <Card key={job.jobId} >
            <CardItem header bordered>
                <View><Text>{job.jobTitle}</Text></View>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text>
                        {job.jobDetail.detailDescription}
                    </Text>
                    {job.dates && job.dates.map(key => {
                        return (<View>
                            <Text>{key.name} {key.value}</Text>
                        </View>)
                    })}
                    <Text>Eligibility</Text>
                    {job.eligibilities && job.eligibilities.map(key => {
                        return (<View>
                            <Text>{key.name} {key.value}</Text>
                        </View>)
                    })}
                </Body>

            </CardItem>
            <CardItem footer bordered>
                {/* <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text> */}
            </CardItem>
        </Card>
    )
}