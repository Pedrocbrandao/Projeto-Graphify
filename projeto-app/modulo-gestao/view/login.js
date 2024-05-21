import {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import {estilos} from '../css/estilos'

import firebase from 'firebase'

export default class Login extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  atualizarValor = (valor, props) =>{
    const state = this.state
    state[props] = valor
    this.setState(state)
  }

  userLogin = ()=>{
    if(this.state.email === '' || this.state.password === ''){
      alert("Usuário ou senha inválidos!")
      this.setState({isLoading: false})
    } else {
      this.setState({isLoading: true})
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((response)=>{
        this.setState({
          email:'',
          password: '',
          isLoading: false
        })
        this.props.navigation.navigate('TelaHome')
      }).catch((error)=>{
        alert("Erro ao fazer login: " + error.message)
        this.setState({isLoading: false})
      })
    }
  }
 

  render(){  
    return(
      <View style={estilos.container}>
        <Text style={estilos.textLogIn}>Log In</Text>
        <Text>Email</Text>
        <TextInput style={estilos.input} value={this.state.email} onChangeText={(val) => this.atualizarValor(val, 'email')}/>

        <Text>Password</Text>
        <TextInput style={estilos.input} value={this.state.password} onChangeText={(val) => this.atualizarValor(val, 'password')}
        secureTextEntry={true} maxLength={8}/>

        {this.state.isLoading ? (
          <View>
            <ActivityIndicator size='large' color='#3740fe' />
          </View>
        ) : (
          <TouchableOpacity style={estilos.button} onPress={this.userLogin}>
            <Text style={estilos.buttonText}>Log In</Text>
          </TouchableOpacity>
        )}

        <Text style={estilos.signUp} onPress={() => this.props.navigation.navigate('TelaCadastro')}>
          Sign up
        </Text>

      </View>
    )
  }
}
