import React, {useState, useEffect} from "react" ;
import  Header from "../components/layout/Header"
import Todos from "./Todos" ; 
import AddTodo from "./AddTodo" ; 
import Footer from "../components/store/containers/Footer"
import axios from "axios" ; 
import {v4 as uuid}  from "uuid" ; 



function TodoApp(){


    const [ state , setState] = useState({
        todos: []
    }); 
    const  handleChangeCheckbox = id => {
        console.log("clicked todoapp" + id) ; 
        setState({
            todos: state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed ; 
                }
                return todo; 
            })
        }); 
    }; 
    const handeleDelete = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(reponse => setState({
                todos: [
                    ...state.todos.filter(todo => {
                        return todo.id !== id; 
                    })
                ]
            }))
        // setState({
        //     todos: [
        //         ...state.todos.filter(todo => {
        //             return todo.id != id ; 
        //         }) 
        //     ]
        // });
    };
    
    const handelAddTodo = title => {
        const newTodo = {
            id: uuid.v4,
            title: title,
            completed: false 
        }; 
        // axios.post("https://jsonplaceholder.typicode.com/todos" , newTodo)
        //     .then(respone => {
        //         console.log(respone.data)
        //         setState({
        //             todos: [...state.todos, respone.data]
        //         })
        //     }) ; 
        setState({
            todos: [...state.todos, newTodo]
        }); 

        console.log("choaf ") ; 
    }
    useEffect(() => {
        const config = {
            params: {
                _limit: 5
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos" , config)
            .then(reponse => setState({ todos: reponse.data})) ;    
     }) ; 
    return (
        <div className="container">
            <Header/>
            <AddTodo handelAddTodo={handelAddTodo}/>
            <Todos 
                todos={state.todos} 
                handleChange={handleChangeCheckbox}
                handeleDelete={handeleDelete}/>

            <Footer/>
          
        </div>
    ) ; 
}

export default TodoApp ; 

