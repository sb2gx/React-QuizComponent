import React, { Component } from 'react'

class QuizEnd extends Component {
    render() {
        return(
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        )
    }

    handleResetClick() {
        this.props.resetClickHandler()
        this.setState({quiz_position: 1})
    }
}

export default QuizEnd