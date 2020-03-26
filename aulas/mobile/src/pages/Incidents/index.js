import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Image, Text, FlatList, TouchableOpacity} from 'react-native';

import api from '../../services/api';
import styles from './styles';

import Logo from '../../assets/logo.png';


export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    loadIncidents();
  });
  const navigation = useNavigation();

  async function loadIncidents(){
    const response = await api.get('/incidents');
    setIncidents(response.data);
    setTotal(response.headers['x-total-count']);
  };

  async function handleDetails(incident){
    navigation.navigate('Detail', {incident})
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo}/>
        <Text style={styles.headerText}>Total de {total} casos</Text>
      </View>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subTitle}>Escolha um dos casos abaixo e salve o dia.</Text>
      
      <View style={styles.incidentsList}>
        <FlatList
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item: incident})=>(
            <View style={styles.incidentContainer}>
              <Text style={styles.incidentProperties}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperties}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentProperties}>Valor:</Text>
              <Text style={styles.incidentValue}>{incident.value} reais</Text>

              <TouchableOpacity style={styles.detailsButton} onPress={() => handleDetails(incident)}>
                <Text style={styles.textDetailsButton}>Ver mais detalhes</Text>
                <Feather name="arrow-right" color="#E02041"size={18}/>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
