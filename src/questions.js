import React from 'react';
import data  from './questionbank';
import Choices from './choices';
import Result from './Result';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex',
            end: false

        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);

        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: data[nr].questions,
            answers: [data[nr].choices[0], data[nr].choices[1], data[nr].choices[2], data[nr].choices[3] ],
            correct: data[nr].correctAnswer,
            nr: this.state.nr + 1
        });
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        let { nr, total, score } = this.state;

        if(nr === total){
            this.setState({
                displayPopup: 'flex',
                end:true
            });
        } else {
            this.pushData(nr);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }

    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    // handleStartQuiz() {
    //     this.setState({
    //         displayPopup: 'none',
    //         nr: 1
    //     });
    // }

    handleIncreaseScore() {
      console.log(this.state.score);
        this.setState({
            score: this.state.score + 1
        });

    }

    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, displayPopup, score} = this.state;

        return (
          <div className='container'>
          { this.state.end ?
            (
              <div>
              <h1>Result</h1>
              <Result score={score} total={total}/>
              </div>

            )
            :
            (
              <div className='container'>
              <h1>Welcome to the Quiz</h1>
              <h3>{question}</h3>

              <Choices  answers={answers} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore}/>

              {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr===total ? 'Finish quiz' : 'Next question'}</button> : null}

              </div>
            )
              }
          </div>



        );
    }
};


export default Questions
