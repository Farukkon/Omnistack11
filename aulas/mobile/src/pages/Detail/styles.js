import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  incidentDetail:{
    marginTop: 30,
    paddingHorizontal: 24,
    paddingBottom:24,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  incidentProperties:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#41414D',
    marginTop: 24
  },
  incidentValue:{
    fontSize: 16,
    color: '#737380',
    marginTop: 5
  },
  contact:{
    marginTop: 30,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  contactTitle:{
    fontSize:24,
    fontWeight: 'bold'
  },
  contactSubTitle:{
    fontSize: 16,
    color: '#737380',
    marginTop: 20
  },
  buttonGroup:{
    marginTop: 10,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width:'48%',
    height: 50,
    backgroundColor: '#E02041',
    borderRadius: 8
  },
  textButton:{
    color: '#fff',
    fontSize: 16
  }
});

export default styles;