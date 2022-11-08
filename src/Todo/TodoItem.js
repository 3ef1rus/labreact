import React,{useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";


let styles ={
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alineItems:'center',
        padding:'.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius:'4px',
        marginBottom:'.5rem'
    },
    input:{
        marginRight:'1rem'
    }
}


function TodoItem({todo,index,onChange}){
    let classes=[];
    let {removeTodo}=useContext(Context);
    if(todo.completed){
        classes.push('done')
    }
    return ( 
    <li style={styles.li} className={classes.join(' ')}>
        <span >
            <input type='checkbox' checked={todo.completed} 
            style={styles.input} onChange={()=> onChange(todo.id)}/>
            <strong>{index+1}</strong> 
        {todo.title}
        </span>
        <button className="rm" onClick={()=>{removeTodo(todo.id)}}>&times;</button>
    </li>

)}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange:PropTypes.func.isRequired
}

export default TodoItem