import React from "react";
import Card from "./shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback} = useContext(FeedbackContext);

  const fermerFeedback = () => {
    deleteFeedback(item.id)
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={fermerFeedback} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
