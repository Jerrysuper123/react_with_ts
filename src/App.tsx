  import React from 'react';
  import TodoList from './components/TodoList';
  import NewTodo from './components/NewTodo';
  import {Todo} from "./todo.model";

  const App: React.FC=()=> {
    const [todos, setTodos] = React.useState<Todo[]>([])

    const todoAddHandler=(text:string)=>{
      //setState function takes in prevState and update it with new ones
      setTodos(prevState=>[...prevState,{id: Math.random().toString(), text: text}])
    }

    const todoDeleteHandler=(id: string)=>{
      setTodos(prevState=>{
        return prevState.filter(t=>t.id!==id);
      })
    }
    return (
      <div className="App">
        {/* you already defined the props, so auto completion here */}
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos} onDelete={todoDeleteHandler}/>
      </div>
    );
  }

  export default App;
