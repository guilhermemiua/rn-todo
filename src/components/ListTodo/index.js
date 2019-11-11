import React from 'react'
import Todo from '../Todo'
import { View } from 'react-native'

function ListTodo(props) {
  const listTodos = props.todos.length ? (
    props.todos.map((todo) => {
      return (
        <Todo deleteTodo={props.deleteTodo} key={todo.id} todo={todo}> </Todo>
      )
    })
  ) : (
      <Todo key={0}></Todo>
    )

  return (
    <View>
      {listTodos}
    </View>
  )
}

export default ListTodo