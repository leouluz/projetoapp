import React from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'


export default function Index() {

  const navigation = useNavigation();

  function Main(){
    navigation.navigate('Main');
  }
    return (
      <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}>
        <View style={styles.apresentacao}>
        <View style={styles.textApresentation}>
          <Text style={styles.textCurtir}>Já sabe onde vai curtir hoje?</Text>
          <Text style={styles.textCurtir}>Então... Qual é o Role?</Text>
        </View>
        <View style={styles.viewInput}> 
          <TextInput
                autoCorrect={false}
                placeholder="Usuario"
                placeholderTextColor="#ddd"
                style={styles.input}
              />
        </View>
          <View style={styles.viewApresentation}>
            <TouchableOpacity
              onPress={Main}
              style={styles.busqStyle}>
                <Text style={styles.textButtom}>Busque seu Role </Text>
                <Feather name="arrow-right" color="#FFB100" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.backgImage}>
        </View>
      </KeyboardAvoidingView>
    );
}
