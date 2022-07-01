import React, { Component } from 'react'
import TodoListComponent from './TodoListComponent'
import TodoComponent from './TodoComponent'

class mainComponent extends Component {

  state = {
    todos: [
      {id: '01', item: 'todo1', isComplete: false},
      {id: '02', item: 'todo2', isComplete: false},
      {id: '03', item: 'todo3', isComplete: false}
    ],
    editTodos: {}
  }

  addTodo = (todo) =>{
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  deleteTodo = (todo) =>{
    let list = this.state.todos
    list = list.filter((item) => item.id !== todo.id)
    this.setState({
      todos: list
    })
  }

  checkTodo = (item) =>{
    let arr = [...this.state.todos]
    arr = arr.map((todo) => 
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    )
    this.setState({
      todos: arr
    })
    
  }

  render() {
    return (
      <>
        <TodoListComponent addTodo={this.addTodo} />
        <TodoComponent arrTodos={this.state.todos} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo} />
      </>
    )
  }
}

export default mainComponent