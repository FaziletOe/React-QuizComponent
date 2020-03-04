import React, { Component } from 'react'
import './QuizQuestionButton'

class QuizQuestionButton extends Component{
  render(){
    return(
      <li>
      <button> {this.state.button_text.instruction_text}</button>
      </li>
    );
  }
}
export default QuizQuestionButton
