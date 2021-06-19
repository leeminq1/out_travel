import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Thumbnail,
  Alert,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Card, Button,
  CardItem,
  Left,
  Body,
  Content, } from "native-base";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { Ionicons } from '@expo/vector-icons'; 

const DayComponent = ({ travel_data, index }) => {

  const [is_view,set_isview]=useState(false);

  // const view_handler=(index)=>{
  //   return(

  //   )
  // }

  console.log(index)

  return (
    <Content contentContainerStyle={{borderWidth:1,borderColor:"#3498db",borderRadius:13,marginBottom:20,paddingTop:10,paddingBottom:20}}>
      <Grid>
        <Grid style={{justifyContent:"space-between",flexDirection:"row",height:50,alignItems:"center"}}>
          <Col size={3}>
            <Text style={{ fontSize: 20, fontWeight: "bold",color:"black" }} onPress={()=>{set_isview(prev=>!prev)}}>
              Day {index + 1}
            </Text>
          </Col>
          <Col size={2}>
            <Text style={{ fontSize: 20,color:"black" }}>{travel_data.day}</Text>
          </Col>
        </Grid>
      </Grid>
      {is_view &&
      <Grid style={{flexDirection:"column"}}>
        <ScrollView horizontal={true} style={{marginBottom:20}}>
        <Grid style={{width:100,height:100,alignItems:"center",justifyContent:"center"}}>
          <Ionicons name="add-circle-outline" size={35} color="black" onPress={()=>{Alert.alert(index+"번째 이미지업로드")}}/>
        </Grid>
            {travel_data.image.map((image,index)=>{
              return(   <Image style={{width:100,height:100}} source={{uri:image}} key={index}></Image>)
            })}
          </ScrollView>
          {travel_data.journey.map((journey,index)=>{
                  return(
                    <Card key={index} >
                      <CardItem style={{backgroundColor:"#7efff5"}}>
                        <Left>
                          <Text style={{fontSize:30,fontWeight:"500",color:"white"}}>{index+1}</Text>
                          <Body style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                            <Text style={{fontSize:15,fontWeight:"200",color:"white"}}>{journey.title}</Text>
                            <Text style={{fontSize:15,fontWeight:"100",color:"white"}}>{journey.role}</Text>
                            <Text note style={{fontSize:15,fontWeight:"100",color:"white"}}>{journey.address}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                    </Card>
                 )
                })}
        </Grid>
        }
       </Content>
  );
};

export default DayComponent;
