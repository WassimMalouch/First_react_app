import React from "react"

export default class TodoList extends React.Component {
    constructor(){
      super();
      this.state = {
        todos : ["khobz","hello"],
        content : ""
      }
      this.add = this.add.bind(this)
      this.handleChange = this.handleChange.bind(this)

    }
    add(){
     let newTodos = [...this.state.todos,this.state.content]
      this.setState({todos:newTodos, content : "" })

    }
    handleChange(v){
        this.setState({content:v})
    }
  
    render(){
        return(<div>
      <AddTodo content={this.state.content} add={this.add} handleChange={this.handleChange}/>
      <Todos todos={this.state.todos}/>
    </div>);
    }
}


function AddTodo({content,add,handleChange}){
    return(
        <div>
            <input type="text" value={content} onChange={(e)=>{handleChange(e.target.value)}}/>
            <button onClick={add}>add todo</button>
        </div>
    );
}


function Todos({todos}){
return(
<div>
    <ul>
    {todos.map(element => <li>{element}</li>)}
    </ul>
</div>
);
}
