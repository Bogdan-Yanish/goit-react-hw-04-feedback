import React from "react";
import PropTypes from 'prop-types';
import { BtnList, Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({
    options,
    onLeaveFeedback
}) => {
    return (
        <BtnList>
            {options.map(option => (
                <Btn
                    type="button"
                    key={option}
                    onClick ={() => {onLeaveFeedback(option)}}
                >
                    {option}
                </Btn>
            ))}      
        </BtnList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}