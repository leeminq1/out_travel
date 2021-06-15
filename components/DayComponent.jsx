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
import CollapsibleView from "@eliav2/react-native-collapsible-view";

const DayComponent = ({ travel_data, index }) => {



  return (
 
    <ScrollView>
    <CollapsibleView title={ <Grid>
        <Grid style={{justifyContent:"space-between",flexDirection:"row"}}>
          <Col size={3}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Day {index + 1}
            </Text>
          </Col>
          <Col size={2}>
            <Text>{travel_data.day}</Text>
          </Col>
        </Grid>
      </Grid>}>
      </CollapsibleView>
      <Grid style={{height:300}}>
        <ScrollView horizontal={true}>
          {travel_data.image.map((image,index)=>{
            return(   <Image style={{width:100,height:100}} source={{uri:image}}></Image>)
         



          })}


        </ScrollView>

      </Grid>

      </ScrollView>

  );
};

export default DayComponent;
