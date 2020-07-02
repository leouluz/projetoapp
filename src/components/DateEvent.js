import React from 'react';
import { TouchableOpacity, View, StyleSheet, FlatList, Text } from 'react-native';

  const DATE = [
        {
          id:1,
          data:12,
          dia:'Seg'
        },
        {
          id:2,
          data:13,
          dia:'Ter'
        },
        {
          id:3,
          data:14,
          dia:'Qua'
        },
        {
          id:4,
          data:15,
          dia:'Qui'
        },
        {
          id:5,
          data:16,
          dia:'Sex'
        },
        {
          id:6,
          data:17,
          dia:'Sab'
        },
        {
          id:7,
          data:18,
          dia:'Dom'
        },
        {
          id:8,
          data:'19',
          dia:'Seg'
        },
        {
          id:9,
          data:20,
          dia:'Ter'
        },
        {
          id:10,
          data:21,
          dia:'Qua'
        },
  ];

  function Item({data, dia}) {
    return (
      <View>
        <TouchableOpacity style={styles.cardHeader}>
          <Text style={styles.dataText}>{data}</Text>
          <Text style={styles.text}>{dia}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  export default function ListEvent() {
    return (
        <FlatList
         contentContainerStyle={styles.headerDate}
         horizontal={true}
          data={DATE}
          renderItem={({ item }) => <Item data={item.data} dia={item.dia} />}
          keyExtractor={item => item.id}
        />
    );
  }

  const styles = StyleSheet.create({
    headerDate:{
      flexDirection:'row',
    },
    text:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:18
    },
    cardHeader:{
      width:55,
      height:80,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:8,
      borderRadius:15,
    },
    dataText:{
      fontSize:24,
      fontWeight:'bold',
      color:'#fff'
    },
  });