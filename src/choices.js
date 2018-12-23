import React from 'react';
import './choices.css';
class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['','','',''],

        }

        this.checkAnswer = this.checkAnswer.bind(this);

    }

    checkAnswer(e) {
        let { isAnswered } = this.props;

        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = ['','','',''];

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }

            this.setState({
                classNames: updatedClassNames,
                isAnswered: true
            })

            this.props.showButton();
        }


    }

    render() {
        let reset = ['','','','']
        let { answers } = this.props;
        let classNames
        if((this.state.classNames[0]!='' || this.state.classNames[1]!='' || this.state.classNames[2]!='' || this.state.classNames[3]!='') && this.props.isAnswered){
          classNames  = this.state.classNames;
        }
        else   {
            classNames  = reset;
        }


        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
        }

        return (

            <div id="answers">

            <ul>
                    <li onClick={this.checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
                    <li onClick={this.checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
                    <li onClick={this.checkAnswer} className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
                    <li onClick={this.checkAnswer} className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Choices
