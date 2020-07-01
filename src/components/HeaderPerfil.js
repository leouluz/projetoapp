import React from 'react';
import { View, StyleSheet,  Text, Image } from 'react-native';

import PerfilImage from '../assets/people.png';

  export default function HeaderPerfil() {
    return (
      <View style={styles.perfilView}>
      <View>
      <Text style={styles.textName} >Olá, Felipe</Text>
      <Text style={styles.text} >Estes sãos eventos proximos a você</Text>
      </View>
      <Image style={styles.imagePerfil} source={PerfilImage} ></Image>
    </View>
    );
  }

  const styles = StyleSheet.create({
   
    text:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:18
    },
    textName:{
      color:'#ffb832',
      fontWeight:'bold',
      fontSize:24
    },
    
    perfilView:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:50,
      marginBottom:20
    },
    imagePerfil:{
      height:50,
      width:50,
      borderWidth:2,
      borderColor:'#ffb832',
      borderRadius:50
    },
  });