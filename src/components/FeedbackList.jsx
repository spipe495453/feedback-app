import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feedbackItem) => (
          <motion.div
            key={feedbackItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
//   return (
//     <div className='feedback-list'>
//       {feedback.map((feedbackItem) => (
//         <FeedbackItem
//           key={feedbackItem.id}
//           feedbackItem={feedbackItem}
//           deleteFeedbackItem={deleteFeedbackItem}
//         />
//       ))}
//     </div>
//   );
// };

export default FeedbackList;
