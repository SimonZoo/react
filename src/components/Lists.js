import React from "react"
import ListTodo from './ListTodo'

class List extends React.Component {
    render() {
        const List = this.props.arr
        const todos = List.map(it => {
            return  <ListTodo name={it.name} id={it.id} checked={it.checked} key={it.id}/>
        })
        return (
            <div>
                {todos}               
            </div>
        )
    }
}

export default List