import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

// Estilos
import styles from './styles'

//Componentes
import DateEvent from '../../components/DateEvent'
import HeaderPerfil from '../../components/HeaderPerfil'
import FeedEvent from '../../components/FeedEvent'

export default function Main() {

    return (
      <View style={styles.container}>
        <HeaderPerfil/>
        <DateEvent />
        <FeedEvent/>
      </View>
    );
}
