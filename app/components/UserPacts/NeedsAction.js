import React from 'react'
import { StyleSheet } from 'react-native'
import PactButton from '../PactButton'

import { Image } from 'react-native'
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
} from 'native-base'
import AppText from '../AppText'

const NeedsAction = () => {
  const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../../assets/FKJ.jpg'),
    },
    {
      text: 'Card Two',
      name: 'Two',
      image: require('../../assets/FKJ.jpg'),
    },
    {
      text: 'Card Three',
      name: 'Three',
      image: require('../../assets/FKJ.jpg'),
    },
    {
      text: 'Card Four',
      name: 'Four',
      image: require('../../assets/FKJ.jpg'),
    },
    {
      text: 'Card Five',
      name: 'Five',
      image: require('../../assets/FKJ.jpg'),
    },
  ]
  return (
    <View style={styles.mainView}>
      <DeckSwiper
        dataSource={cards}
        renderItem={(item) => (
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text>Seth Johnson</Text>
                  <Text note>Collaborator</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.body}>
              <View>
                <AppText>Track: Weather</AppText>
                <AppText>Contract Type: Producer</AppText>
              </View>
              <View>
                <AppText>Initialized By: Seth</AppText>
                <AppText>Date Created: 12/11/2020</AppText>
              </View>
            </CardItem>
            <CardItem>
              <Icon name="heart" style={{ color: '#ED4A6A' }} />
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    display: 'flex',
    padding: 10,
    margin: 30,
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  card: {
    backgroundColor: 'blue',
    elevation: 3,
    width: '100%',
    height: 200,
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: 'green',
  },
})

export default NeedsAction
