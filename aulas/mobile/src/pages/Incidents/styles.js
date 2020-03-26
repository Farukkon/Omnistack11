import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
    flex: 1,
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText:{
    color: '#2a2a2a',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title:{
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 8,
    color: '#13131a'
  },
  subTitle:{
    color: '#737380',
    fontSize: 16,
    lineHeight: 24
  },
  incidentsList:{
    width: '100%',
    flex: 1,
    marginTop: 15
  },
  incidentContainer:{
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    marginBottom: 15
  },
  incidentProperties:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  incidentValue:{
    fontSize: 16,
    color: '#737380',
    marginBottom: 20
  },
  detailsButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textDetailsButton:{
    fontSize: 16,
    color: '#E02041',
    fontWeight: 'bold'
  }
});

export default styles;