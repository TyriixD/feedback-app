import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";


function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

  function afficherFeedback(item) {
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FeedbackItem key={item.id} item={item} />
      </motion.div>
    );
  }

  if (!isLoading &&(!feedback || feedback.length === 0)) {
    return <p>No feedbacks yet</p>;
  }
  return isLoading ? <Spinner/> : (<div className="feedback-list">
  <AnimatePresence>
    {feedback.map(afficherFeedback)}
  </AnimatePresence>
</div>)
}

export default FeedbackList;
