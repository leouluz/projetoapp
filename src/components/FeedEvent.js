import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';

  const DATE = [
    {
      id: 1,
      titleEvent: "Party feel's",
      placeEvent: "Av: Independencia, 1555",
      maxYear: "+16",
      priceEvent: "R$15,00",
      imageEvent: "https://picsum.photos/600"
    },
  ];

  function Item({titleEvent, placeEvent, maxYear, priceEvent, imageEvent}) {
    return (
      <View style={styles.eventCard}>
        <View style={styles.viewText}>
          <Text style={styles.textEventTitle}> {titleEvent} </Text>
          <Text style={styles.textEvento}>{placeEvent}</Text>
          <Text style={styles.textEvento}>Evento para {maxYear} </Text>
          <Text style={styles.textEvento}>Ingresso online: {priceEvent} </Text>
        </View>
        <Image style={styles.imageEvent} source={{uri: {imageEvent} }} />
      </View>
    )
  }
  export default function FeedEvent() {
    return (
        <FlatList
         contentContainerStyle={styles.viewEvent}
         horizontal={true}
          data={DATE}
          renderItem={({ item }) => <Item 
            titleEvent={item.titleEvent}
            placeEvent={item.placeEvent} 
            maxYear={item.maxYear}
            priceEvent={item.priceEvent}
            imageEvent={item.imageEvent} />}
          keyExtractor={item => item.id}
        />
    );
  }

  const styles = StyleSheet.create({
    //VIEW EVENTOS
    viewEvent:{
      borderRadius:20,
      backgroundColor:'#29404e',
      marginBottom:10,
    },
    eventCard:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    textEvento:{
      color:'#ddd'
    },
    textEventTitle:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:20
    },
    imageEvent:{
      resizeMode:'stretch',
      width:130,
      height:'100%',
      borderRadius:20
    },
    viewText:{
      padding: 15,
    },
  });