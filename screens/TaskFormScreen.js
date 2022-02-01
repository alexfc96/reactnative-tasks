import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

import Layout from '../components/Layout'
import { saveTask } from '../api'

const TaskFormScreen = ({navigation}) => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = (name, value) => setTask({...task,  [name]: value})
  const handleSubmit = () => {
    saveTask(task);
    navigation.navigate('Home')
  }

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la planta"
        placeHolderTextColor="#576574"
        onChangeText={(text) =>handleChange('title', text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Descripción de la planta"
        placeHolderTextColor="#576574"
        onChangeText={(text) =>handleChange('description', text)}
      ></TextInput>

      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Task</Text>
      </TouchableOpacity>
    </Layout>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 35,
    color: '#ffffff',
    textAlign: 'center',
    padding: 4,
    borderRadius: 5
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#10ac84',
    width: '90%'
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  }
})

export default TaskFormScreen
