import React,{useRef} from "react";

type newTodoProps={
    onAddTodo:(text: string)=>void;
}

//define the props with the props
const NewTodo: React.FC<newTodoProps>=props=>{
    const textInputRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler=(event: React.FormEvent)=>{
        event.preventDefault();
        const textInput = textInputRef.current!.value;
        //use the props f
        props.onAddTodo(textInput);
    }

    return <form onSubmit={formSubmitHandler}>
        <div>
            <label htmlFor="input-text">input text</label>
            <input type="text" id="input-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO</button>
    </form>
}

export default NewTodo;