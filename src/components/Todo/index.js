import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

function Todo(props) {
  if (props.todo) {
    return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => props.deleteTodo(props.todo.id)}>
        <Text style={styles.todo}> {props.todo.value} </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.todo}> No todo yet </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todo: {
    color: '#282c34'
  },
  touchableOpacity: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ddd'
  }
})

export default Todo