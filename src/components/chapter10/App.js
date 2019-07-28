//import React, {Fragment} from 'react';
//import './App.css';
import React, {Component} from 'react';
import PageTemplate from "./components/chapter10/PageTemplate";
import TodoInput from "./components/chapter10/TodoInput";
import TodoList from "./components/chapter10/TodoList";

class App extends Component {
    state = {
        input: '',
        todos: [{id: 0, text: "Test", done: false}]
    }

    render() {
        const {handleInputChange, handleInsert, handleToggle, handleRemove} = this;
        const {input, todos} = this.state;

        return (
            <PageTemplate>
                <TodoInput onChange={handleInputChange} onInsert={handleInsert} value={input}></TodoInput>
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}></TodoList>
            </PageTemplate>
        );
    }

    handleInputChange = (e) => {
        this.setState({input: e.target.value});
    }

    handleInsert = () => {
        const newItem = {
            id: this.getId(),
            text: this.state.input,
            done: false
        };

        this.setState({
            todos: [...this.state.todos, newItem],
            input: ""
        })
    }

    handleToggle = (id) =>{
        const {todos} = this.state;
        const itemIndex = todos.findIndex(i=> i.id === id);
        const toggleItem = {...todos[itemIndex], done: !todos[itemIndex].done};

        this.setState({
            todos: [
                ...todos.slice(0, itemIndex),
                toggleItem,
                ...todos.slice(itemIndex+1, todos.length)
            ]
        })
    };

    handleRemove = (id) => {
        const {todos} = this.state;
        const itemIndex = todos.findIndex(i=> i.id === id);
        this.setState({
            todos: [
                ...todos.slice(0, itemIndex),
                ...todos.slice(itemIndex+1, todos.length)
            ]
        })
    }

    id = 1;
    getId = () =>{
        return this.id++;
    }
}

export default App;