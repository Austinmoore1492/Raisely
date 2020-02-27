import React, { Component, Fragment } from 'react';

class QuestionsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.config.Questions
    };
  }

  render() {
    const { questions } = this.state;
    return (
      <Fragment>
        {questions.map((question, i) => {
          console.log(question);
          return (
            <div key={i} className="container">
              <h2 id="about" className="text-center">
                {question.title}
              </h2>
              <div className="about-grid text-center">
                <div className="about-what bg-white p-2">
                  <div>
                    <p className="lead-para justify-text">{question.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default QuestionsComponent;
