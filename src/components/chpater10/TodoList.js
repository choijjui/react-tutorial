import React, {Component} from 'react';
import TodoItem from "./TodoItem"

class TodoList extends Component {

    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(item=>(
            <TodoItem key={item.id} done={item.done} onToggle={()=>onToggle(item.id)}
                      onRemove={
                          (e)=>{
                              onRemove(item.id);
                              e.stopPropagation();
                          }}>
                {item.text}
            </TodoItem>
        ))

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;