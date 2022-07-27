import React from "react";
interface TodoListProps{
    items: {id: string, text: string}[];
    //define onDelete props
    onDelete: (id: string)=>void;
}

//must define the props explicitly
const TodoList: React.FC<TodoListProps>=(props)=>{
    return <ul>
        {props.items.map(t=>
        <li key={t.id}>{t.text}<button
        // use onDelete props
        onClick={()=>{props.onDelete(t.id)}}
        >DELETE</button></li>)}
    </ul>
}
export default TodoList;