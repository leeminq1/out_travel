import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Thumbnail,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Card, CardItem, Button } from "native-base";

const DayComponent = ({ travel_data, index }) => {
  console.log(index);
  return (
    <>
      <Grid style={{ borderWidth: 5, borderColor: "red" }}>
        <Grid style={{ height: 200 }}>
          <Col size={3}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Day {index + 1}
            </Text>
          </Col>
          <Col size={4}>
            <Text>{travel_data.day}</Text>
          </Col>
          <Col size={3}>
            <Button light>
              <Text> 날짜/수정 </Text>
            </Button>
          </Col>
        </Grid>
      </Grid>
      <Grid></Grid>
    </>
  );
};

export default DayComponent;
