import React from 'react'
import Todo from '../Todo'
import { View } from 'react-native'

function ListTodo(props) {
  const listTodos = props.todos.length ? (
    props.todos.map((item) => {
      return (
        <Todo key={item.id} todo={item.todo}> </Todo>
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