import React, { useState, useEffect, useRef, Component } from "react";
import {logout} from '../config/firebaseFunctions';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    ActivityIndicatorBase,
    Image,
    Modal,
    Alert,
    Pressable,
    Animated,
  } from "react-native";
  import { Col, Row, Grid } from "react-native-easy-grid";
  import { Ionicons } from "@expo/vector-icons";
  import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Title,
  } from "native-base";
  import MapView, { Marker, Callout, Circle } from "react-native-maps";
  import * as Location from "expo-location";
  import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


export default function AddPage({navigation}) {

    const logoutFunc = () => {
        logout(navigation);
      };

      return (
        <Container>
          <Header>
          <Left>
            <Icon name='arrow-back' />
          </Left>
          <Body>
            <Title>Add Page</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right> */}

          </Header>
          <Content padder>
            <Text>
              Add Pages
            </Text>
            <TouchableOpacity onPress={logoutFunc}>
                <Text>로그아웃</Text>
            </TouchableOpacity>
          </Content>
        </Container>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

})
