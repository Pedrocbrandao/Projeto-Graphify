import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from 'firebase';
import firebaseConfig from './modulo-gestao/database/dbFirebase';
import Login from './modulo-gestao/view/login';
import Cadastro from './modulo-gestao/view/cadastro';
import Home from './modulo-gestao/view/home';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TelaLogin() {
  const navigation = useNavigation()

  const handleLogin = () => {
    setTimeout(() => {
      navigation.navigate('TelaHome');
    }, 1000);
  };

  return (
    <Stack.Navigator 
    initialRouteName='TelaLogin' 
    screenOptions=
    {{ headerStyle: { backgroundColor: '#bfd8ad' }, 
    }}>
      <Stack.Screen name='TelaLogin' component={Login} options={{ title: ""}} />
      <Stack.Screen name='TelaCadastro' component={Cadastro} options={{ title: "Cadastro Usuário" }} />
    </Stack.Navigator>
  );
}

function TelaHome() {
  return (
    <BottomTabs.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#00cc0c' }, headerTintColor: '#fff' }}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Tabela" component={Home} />
      <BottomTabs.Screen name="Criação" component={Home} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaLogin' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TelaLogin' component={TelaLogin} />
        <Stack.Screen name='TelaHome' component={TelaHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
