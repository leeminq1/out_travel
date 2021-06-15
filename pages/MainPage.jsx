import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Image,
  View,
  FlatList,
  SafeAreaView,
  Alert,
  RefreshControl,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
  Item,
  Picker,
  Form,
} from "native-base";

import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";

import * as Animatable from "react-native-animatable";
const data = require("../data.json");

export default function MainPage({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [select, setselect] = useState(undefined);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(1500).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, []);

  console.log(select);
  return (
    <Container>
      <HeaderComponent></HeaderComponent>
      {data.length == 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data.diary}
          ListHeaderComponent={() => {
            return (
              <Content style={{ marginTop: 20 }}>
                <Animatable.View
                  animation="jello"
                  easing="ease-out"
                  iterationCount={1}
                  direction="alternate">
                  <Grid style={styles.banner}>
                    <Col size={1} style={{ padding: 20 }}>
                      <Text>총{data.diary.length}개</Text>
                    </Col>
                    <Col size={1}>
                      <Item
                        picker
                        style={{
                          height: "100%",
                          padding: 20,
                          borderBottomWidth: 0,
                        }}>
                        <Picker
                          mode="dropdown"
                          iosIcon={<Icon name="arrow-down" />}
                          placeholder="정렬"
                          placeholderStyle={{ color: "black" }}
                          placeholderIconColor="#007aff"
                          selectedValue={select}
                          onValueChange={(itemValue, itemIndex) =>
                            setselect(itemValue)
                          }
                          style={{ height: "100%", borderWidth: 0 }}>
                          <Picker.Item label="가나다순" value="0" />
                          <Picker.Item label="날짜순" value="1" />
                        </Picker>
                      </Item>
                    </Col>
                  </Grid>
                </Animatable.View>

                <Grid style={{ padding: 20 }}>
                  <Text style={{ color: "grey" }}>여행일지</Text>
                </Grid>
              </Content>
            );
          }}
          onEndReachedThreshold={0.1}
          onEndReached={async () => {
            console.log("바닥 가까이 감: 리프레시");
          }}
          renderItem={(data) => {
            return <CardComponent navigation={navigation} content={data} />;
          }}
          numColumns={1}
          keyExtractor={(data) => data.id.toString()}
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#F6F6F6",
    height: 70,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
});
