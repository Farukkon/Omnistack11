import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { composeAsync } from 'expo-mail-composer'; //Mail Composer


import Logo from '../../assets/logo.png'
import styles from './styles';

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();
  const incident = route.params.incident;

  function handleGoBack(){
    navigation.goBack();
  }

  function handleSendWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`)
  }

  const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de ${incident.value} reais`
  async function handleSendEmail(){
    await composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: message,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo}/>
        <TouchableOpacity onPress={handleGoBack} >
          <Feather name="arrow-left" color="#E02041"size={24}/>
        </TouchableOpacity>
      </View>
      <View style={styles.incidentDetail}>
        <Text style={styles.incidentProperties}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperties}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperties}>Descrição:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperties}>Valor:</Text>
        <Text style={styles.incidentValue}>{incident.value} reais</Text>
      </View>
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Salve o dia!</Text>
        <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.contactSubTitle}>Entre em contato:</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={handleSendWhatsApp} style={styles.button}><Text style={styles.textButton}>WhatsApp</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleSendEmail} style={styles.button}><Text style={styles.textButton}>E-mail</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
