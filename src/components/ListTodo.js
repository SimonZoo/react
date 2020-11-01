import React from "react"

class ListTodo extends React.Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            ifChecked: this.props.checked
        }
        this.changeChecked = this.changeChecked.bind(this)
    }

    changeChecked() {
        this.setState({
            ifChecked: !this.state.ifChecked
        })
    }

    render() {
            return (
                <div >
                     <input type="checkbox" id={this.props.id} checked={this.state.ifChecked} onChange={() => {console.log(1)}}/>
                    <label htmlFor={this.props.id} onClick={this.changeChecked}>{this.props.name}</label>
                </div>
            )   
    }
}

export default ListTodo