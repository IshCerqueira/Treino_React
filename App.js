import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login </Text>

     
      <textInput
      style={styles.input}
      OnChangeText={Setusername}
      value={username}
      Placeholder= "Usuario"
      />
  
      
     <touchableopacity style={styles.button} onpress={handlesubmit(HandleSignIn)}>
     <text style={styles.buttonText}> Acessar</text>

     </touchableopacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'

  },
  input:{
  width: '100%',
  height: 40,
  backgroundColor: '#FFFFFF',

  },

});
