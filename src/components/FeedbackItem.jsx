import React, { useContext } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ feedbackItem }) => {
  const { deleteFeedbackItem, editFeedback } = useContext(FeedbackContext);
  return (
    <Card className='card'>
      <div className='num-display'>{feedbackItem.rating}</div>
      <button
        className='close'
        onClick={() => deleteFeedbackItem(feedbackItem.id)}
      >
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(feedbackItem)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{feedbackItem.text}</div>
    </Card>
  );
};

export default FeedbackItem;
