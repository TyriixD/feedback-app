import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'

//cmd to start app ---> npm start

function App() {

  return (

    <FeedbackProvider>
    <Router>
      <Link to='/'>
        <Header text="Feedback App" />
      </Link>
      
      <div className="container">
        <Routes>
        <Route exact path='/' element= {
          <>
          <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
          </>
        }>
        </Route>
        <Route path='/about' element={<AboutPage/>}></Route> 
        </Routes>
        <AboutIconLink/>
        
      </div> 
    </Router> 
    </FeedbackProvider>
  ); 
}
export default App;
