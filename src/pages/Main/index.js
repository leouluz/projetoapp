import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

// Estilos
import styles from './styles'

//Componentes
import ListEvent from '../../components/ListEvent'
import HeaderPerfil from '../../components/HeaderPerfil'


export default function Main() {

    return (
      <View style={styles.container}>
        <HeaderPerfil/>
        <ListEvent />
        
        <ScrollView style={styles.scrollEvent}>
          <View style={styles.viewEvent}>
            <View style={styles.eventCard}>
            <View style={styles.viewText}>
            <Text style={styles.textEventTitle}>Party feel's</Text>
            <Text style={styles.textEvento}>Av: Independencia, 1555</Text>
            <Text style={styles.textEvento}>Evento para +16</Text>
            <Text style={styles.textEvento}>Ingresso online: R$15,00</Text>
            </View>
            <Image style={styles.imageEvent} source={{uri: 'https://picsum.photos/500'}} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
}
