import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
//cmd to start app ---> npm start
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const estDansLaListe = (item, id) => {
    return item.id !== id;
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => estDansLaListe(item, id)));
  };

  return (
    <>
      <Header text="Feedback App" />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div> 
    </>
  );
}
export default App;
