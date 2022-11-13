import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useEffect, useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const { addFeedbackItem, feedbackEdit, setFeedbackEdit, updateFeedbackItem } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters.');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
        id: uuidv4(),
      };
      if (feedbackEdit.edit) {
        updateFeedbackItem(
          { ...newFeedback, id: feedbackEdit.item.id },
          feedbackEdit.item.id
        );
        setFeedbackEdit({ item: {}, edit: false });
        setText('');
      } else {
        addFeedbackItem(newFeedback);
        setText('');
      }
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={(e) => handleTextChange(e)}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            {feedbackEdit.edit ? 'Update' : 'Send'}
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
