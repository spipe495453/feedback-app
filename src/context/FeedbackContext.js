import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is feedback item 1',
      rating: 8,
    },
    {
      id: 2,
      text: 'This item is feedback item 2',
      rating: 6,
    },
    {
      id: 3,
      text: 'This item is feedback item 3',
      rating: 4,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedbackItem = (id) => {
    if (window.confirm('Are you sure you want to delete your feedback?')) {
      setFeedback((prev) => prev.filter((el) => el.id !== id));
    }
  };

  const addFeedbackItem = (newFeedback) => {
    setFeedback((prev) => [newFeedback, ...prev]);
  };

  const updateFeedbackItem = (updItem, id) => {
    setFeedback((prev) =>
      prev.map((item) => (item.id === id ? updItem : item))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedbackItem,
        addFeedbackItem,
        editFeedback,
        feedbackEdit,
        setFeedbackEdit,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
