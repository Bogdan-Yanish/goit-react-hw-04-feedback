import React, { Component } from "react";

import { Container } from "./Container/Container";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  // handleFeedback = event => {
  //   if (event === 'Good') {
  //     this.setState({ good: this.state.good + 1 });
  //     console.log(this.state.good);
  //   } if (event === 'Neutral') {
  //     this.setState({ neutral: this.state.neutral + 1 });
  //   } if (event === 'Bad') {
  //     this.setState({ bad: this.state.bad + 1 });
  //   }
  // }

  handleFeedback = (feedback) => {
    this.setState(prevState => ({
    [feedback]: prevState[feedback] + 1
    }));
  }

  countTotalFeedback = () => {
    const{good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const{good} = this.state;
    let total = this.countTotalFeedback();
    return parseInt(good /total * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    let positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions 
          // options={['Good', 'Neutral', 'Bad']}
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          { total 
          ? ( <Statistics 
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
          />)
          : ( <Notification message="There is no feedback"></Notification>)
          }
        </Section>
      </Container>
      
    )
  }
} 


