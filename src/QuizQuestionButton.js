import React, { Component } from 'react'

class QuizQuestionButton extends Component {
    render() {
        return (
            <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )
    }

    handleClick() {
        this.props.clickHandler(this.props.button_text)

        if(this.props.button_text === this.props.quiz_question.answer)
        {
            this.props.showNextQuestionHandler()
        }
    }
}

export default QuizQuestionButton