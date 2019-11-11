import React, { useState } from 'react'
import { ScrollView, View, TextInput, StyleSheet, Text } from 'react-native'
import ListTodo from '../../components/ListTodo'

function Main() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  const onChangeText = (value) => setTodo(value)

  const onSubmitEditing = () => {
    if (!todo) {
      return
    }

    setTodos([...todos, {
      id: todos.length + 1,
      value: todo
    }])

    setTodo('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> My todo </Text>
      <TextInput style={styles.input} placeholder="What do you have to do?" value={todo} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}></TextInput>
      <ScrollView>
        <ListTodo deleteTodo={deleteTodo} todos={todos}></ListTodo>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 50,
    marginHorizontal: 10
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginTop: 150
  }
})

export default Main