import React, { Component } from 'react'

export default class TodoComponent extends Component {

  handleOnClickDelete = (item) =>{
    this.props.deleteTodo(item)
  }

  handleOnClickComplete = (item) =>{
    // item.isComplete = !item.isComplete
    // console.log(item.isComplete)
    this.props.checkTodo(item)
  }
  
  render() {
    let { arrTodos } = this.props;
    return (
      <>
        <div>
          {
            arrTodos.map((item, index) =>{
              return(
                <div key={item.id}>
                  <span style={{backgroundColor:item.isComplete?'green':'red'}}
                      onClick={() => this.handleOnClickComplete(item)}>{item.item}
                  </span>
                  <></> 
                  <span>
                    <button onClick={() => this.handleOnClickDelete(item)}>
                      X
                    </button>
                  </span>
                </div>
              )
            })
          }
        </div>
      
      </>
    )
  }
}
