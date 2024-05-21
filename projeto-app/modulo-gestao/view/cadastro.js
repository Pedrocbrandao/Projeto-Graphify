import { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import {estilos} from '../css/estilos'

export default class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      displayName: ''
    };
  }

  atualizarValor = (valor, props) => {
    const state = this.state;
    state[props] = valor;
    this.setState(state);
  };

  cadastrar = () => {
    if (this.state.email === '' || this.state.password === '' || this.state.displayName === '') {
      alert("Usuário ou senha inválida!");
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((response) => {
        response.user.updateProfile({
          displayName: this.state.displayName
        });
        this.setState({
          email: '',
          password: '',
          isLoading: false,
          displayName: ''
        });
        this.props.navigation.navigate('TelaLogin');
      }).catch((error) => {
        alert("Erro: " + error);
        this.setState({ isLoading: false });
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size='large' color='#3740fe' />
        </View>
      );
    }

    return (
      <View style={estilos.container}>
        <Text>Name</Text>
        <TextInput 
          style={estilos.input}
          value={this.state.displayName}
          onChangeText={(val) => this.atualizarValor(val, 'displayName')}
        />
        <Text>Email</Text>
        <TextInput
          style={estilos.input}
          value={this.state.email}
          onChangeText={(val) => this.atualizarValor(val, 'email')}
        />
        <Text>Password</Text>
        <TextInput
          style={estilos.input}
          value={this.state.password}
          onChangeText={(val) => this.atualizarValor(val, 'password')}
          secureTextEntry={true}
          maxLength={8}
        />
        
        <TouchableOpacity style={estilos.button} onPress={this.cadastrar}>
          <Text style={estilos.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={estilos.returnLogin} onPress={() => this.props.navigation.navigate('TelaLogin')}>
          Já tem conta? Clique aqui para fazer Login!
        </Text>
      </View>
    );
  }
}
