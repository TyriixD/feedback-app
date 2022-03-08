import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback }) {
  function afficherFeedback(item)  {
    return <FeedbackItem key={item.id} item={item} />
  }

  if (!feedback || feedback.length === 0) {
    return <p>No feedbacks yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map(afficherFeedback)}
    </div>
  );
}
FeedbackList.propTypes = {
  feedback: PropTypes.array,
};
export default FeedbackList;