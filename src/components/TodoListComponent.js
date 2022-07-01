import React, { Component } from 'react'

export default class TodoListComponent extends Component {
    state = {
        item: ''
    }

    handleOnChangeText = (event) =>{
      this.setState({
        item: event.target.value
    })
    }

    handleOnClickAdd = () =>{
        console.log(this.state.item)
        this.props.addTodo({
          id: Math.floor(Math.random() * 100),
          item: this.state.item,
          isComplete: false
        })
        this.state({
          item: ''
        })
    }

  render() {
    return (
      <div>
        <input type="text" value={this.state.item} onChange={(event) =>this.handleOnChangeText(event)}/>
        <></>
        <button type="button" onClick={() => this.handleOnClickAdd()}> Add ++</button>
      </div>
    )
  }
}
