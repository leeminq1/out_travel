import React, { useState, useEffect, useRef, Component } from "react";
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
import { markers, travel_data } from "../mapData";
import DayComponent from "../components/DayComponent";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const ASPECT_RATIO = width / height;
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function DetailPage({ navigation, route }) {
  const content = route.params.content.item;

  const [location, setLocation] = useState({
    latitude: 37.4822971,
    longitude: 126.9030901,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [region, setRegion] = useState({
    name: "장소를 선택해주세요",
    address: "장소를 선택해주세요",
    latitude: 37.4822971,
    longitude: 126.9030901,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [index, setIndex] = useState(0);

  const map_ref = useRef(null);
  const scrollView_ref = useRef(null);

  const my_location = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      Alert.alert(errorMsg);
      return;
    }
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    setRegion({
      name: "장소를 선택해주세요",
      address: "장소를 선택해주세요",
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };
  // 지도 관련함수

  useEffect(() => {
    navigation.setOptions({
      title: `${content.title}`,
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "#fff",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 15,
      },
      headerTintColor: "grey",
      headerShown: true,
      headerBackTitleVisible: false,
    });
    my_location();
  }, []);

    // 지도 움직이는 함수
    const moveMapView = () => {
      map_ref.current.animateToRegion(region, 1000);
    };
  
    // 지도 animation
    if (map_ref.current) {
      ("지도 animation");
      moveMapView();
    }

  return (
    <Container>
      <Content>
        <GooglePlacesAutocomplete
          style={{ width: width * 0.9 }}
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: "distance",
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true

            setRegion({
              ...region,
              name: details.name,
              address: details.formatted_address,
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            });
          }}
          query={{
            key: "AIzaSyCPLJoiB0TOFClY_1obiwmLWRdRrEBRRPI",
            language: "ko",
            radius: 30000,
            location: `${region.latitude},${region.longitude}`,
          }}
          styles={{
            textInputContainer: {
              width: "100%",
            },
            description: {
              fontWeight: "bold",
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
            listView: {
              zIndex: 5,
            },
          }}
        />
        <Grid style={{ height: height * 0.3 }}>
          <MapView.Animated
            ref={map_ref}
            style={{ width: width }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            // region={region}
            showsUserLocation={true}
            onRegionChange={() => {
              // console.log("지도움직이는중");
              // console.log(region);
              // setLocation({
              //   latitude: region.latitude,
              //   longitude: region.longitude,
              // });
            }}
            onRegionChangeComplete={() => {
              // console.log("지도움직이는것 멈춤");
            }}
            provider="google">
            {markers.map((marker, index) => {
              return (
                <Marker
                  coordinate={{
                    latitude: marker.coordinate.latitude,
                    longitude: marker.coordinate.longitude,
                  }}
                  title={marker.title}
                  description={marker.description}
                  key={index}
                  onPress={(e) => {
                    // onMarkerPress(e);
                  }}></Marker>
              );
            })}
          </MapView.Animated>
        </Grid>
        {travel_data.map((travel_data, index) => {
          return (
            <DayComponent
              travel_data={travel_data}
              key={index}
              index={index}></DayComponent>
          );
        })}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
