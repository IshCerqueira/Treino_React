import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


export default function App() {


  const schema = yup.object({
    username: yup.string().required("Informe seu usuario"),
    password: yup.string().required("Informe sua senha")
  })


  const { control, handleSubmit, formState: { errors } } = useForm({

    resolver: yupResolver()

  })

  function handleSignIn(data) {
    console.log(data);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}> Login </Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            style={[styles.input, {
              borderWidth: errors.username && 1,
              borderColor: errors.username && '#ff375b'
            }]}
            OnChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Usuario"
          />
        )}
      />

      {errors.username && <text style={styles.labelErrors}>{errors.username?.message}</text>}
         
      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, onBlur, value } }) => (

          <TextInput
            style={[styles.input, {
              borderWidth: errors.password && 1,
              borderColor: errors.password && '#ff375b'
            }]}
            OnChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Senha"
            secureTextEntry={true}
          />
        )}
      />
      {errors.password && <text style={styles.labelErrors}>{errors.password?.message}</text>}


      <TouchableOpacity style={styles.buttton} onpress={handleSubmit(handleSignIn)}>
        <Text style={styles.buttonText}> Entrar </Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'

  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#D1D7E8',
    borderWidth: "1px" ,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color: '#121212',
  },
  buttton: {
    width: '100%',
    height: 40,
    backgroundColor: '#45D800',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  labelErrors: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  }



});
