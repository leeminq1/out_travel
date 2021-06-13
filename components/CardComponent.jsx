import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';
// const image = require('../assets/background2.png');
// const logo = require('../assets/logo.png');
// import ImageBlurLoading from 'react-native-image-blur-loading';

// import * as firebase from 'firebase';
// import 'firebase/firestore';


export default function CardComponent({ navigation, content }) {
  
 
  return (
    <TouchableOpacity
      // onPress={() => {
      //   navigation.navigate('DetailPage', { content: content });
      // }}
      // style={styles.container}
    >
       <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: content.item.image}} />
                <Body>
                  <Text>{content.item.title}</Text>
                  <Text note>{content.item.author}</Text>
                </Body>
              </Left>
            </CardItem>
            {/* <CardItem cardBody>
              <Image source={{uri: content.item.image}} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem> */}
          </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', alignSelf: 'center' },
  card: {
    width: '100%',
    alignSelf: 'center',
  },
  image: { height: 200, width: '100%', borderRadius: 10 },
  grey: { color: 'grey' },
  pink: { color: 'deeppink' },
  writer: { fontSize: 12, color: 'grey', marginLeft: 10 },
  title: { fontWeight: '700', fontSize: 15, marginLeft: 10 },
});
