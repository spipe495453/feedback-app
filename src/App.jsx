import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import About from './components/pages/About';
import { FeedbackProvider } from './context/FeedbackContext';
import './index.css';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI' />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path='/about' element={<About />} />
            {/* <About /> */}
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
