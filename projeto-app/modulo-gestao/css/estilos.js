import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#bfd8ad'
  },
  input:{
    width: '100%',
    padding: 8,
    marginBottom: 15,
    borderRadius: 2,
    backgroundColor: '#fff',
    color: 'grey'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 273,
    backgroundColor: 'green',
    paddingTop: 14,
    marginLeft: 2,
    margin: 15,
  },
  buttonText:{
    color: 'white',
    marginBottom: 11,
    fontSize: 16,
    fontWeight: 'bolder'
  },
  textLogIn:{
    fontWeight: 'bolder',
    marginBottom: 10,
    fontSize: 18
  },
  signUp:{
    color: 'blue',
    left: 226
  },
  returnLogin:{
    color:'blue',
    top: 50,
    left:7,

  },
})