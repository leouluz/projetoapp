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
  ];

  function Item({data, dia}) {
    return (
      <TouchableOpacity style={styles.cardHeader}>
        <Text style={styles.dataText}>{data}</Text>
        <Text style={styles.text}>{dia}</Text>
      </TouchableOpacity>
    )
  }
  export default function ListEvent() {
    return (
      <View style={styles.headerDate}>

        <FlatList
          data={DATE}
          renderItem={({ item }) => <Item data={item.data} dia={item.dia} />}
          keyExtractor={item => item.id}
        />
        </View>
    );
  }

  const styles = StyleSheet.create({

    text:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:18
    },
    textSelect:{
      color:'#102733',
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
    cardHeaderSelect:{
      width:55,
      height:80,
      backgroundColor:'#ffb832',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15
    },
    dataText:{
      fontSize:24,
      fontWeight:'bold',
      color:'#fff'
    },
    dataTextSelect:{
      color:'#102733',
      fontSize:24,
      fontWeight:'bold'
    },
    headerDate:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10,
    },
  });