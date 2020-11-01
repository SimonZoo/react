import React from "react"

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: true
        }

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // ? 这个回调发生在哪里 不都是同步事件吗
        // 是因为setState是同步的？
        this.handleToggle = this.handleToggle.bind(this)
    }

    // 这是什么写法
    // s => ({})
    handleToggle() {
        this.setState(state => ({
            toggle: !state.toggle            
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle} className="toggleButton">
                    {this.state.toggle ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default ToggleButton