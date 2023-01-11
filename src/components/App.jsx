// import React, { Component } from "react";
import { useState } from "react";

import { Container } from "./Container/Container";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral ] = useState(0);
  const [bad, setBad] = useState(0);

// ======================================= case 1 =============================================================================
  // const feedbacks = ['Good', 'Neutral', 'Bad'];

  // const handleFeedback = feedback => {
  //   if (feedback === 'Good') {
  //     setGood(good + 1);
  //   } else if (feedback === 'Neutral') {
  //     setNeutral(neutral + 1);
  //   } else if (feedback === 'Bad') {
  //     setBad(bad + 1);
  //   }
  // }
// =============================================================================================================================

// ====================================== case 2 ===============================================================================

//   const [feedbacks, setFeedbacks] = useState({
//     good: 0,
//     neutral:0,
//     bad:0,
// });

//   const {good, neutral, bad} = feedbacks;

//   const handleFeedback = feedback => {
//     return setFeedbacks(prevState => {
//       return {
//         ...prevState,
//         [feedback]: prevState[feedback] + 1,
//       };
//     }, [feedbacks]);
//   }
// ==============================================================================================================================

// ===================================== case 3 =================================================================================

  const feedbacks = {good, neutral, bad};

  const handleFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);      
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    
      default:
        return;
    }
  }
// ==============================================================================================================================

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  let total = countTotalFeedback();
 
  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return Math.round(good /total * 100);
  }
  let positivePercentage = countPositiveFeedbackPercentage();

  
  return (
      <Container>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions 
            options={Object.keys(feedbacks)}  //for case 2 and 3
            // options={feedbacks}   //for case 1
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          { countTotalFeedback()
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


