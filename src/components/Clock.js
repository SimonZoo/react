import React from "react"

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    // 钩子函数
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <p>hi, it's time {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

}

export default Clock