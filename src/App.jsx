import React , {useEffect} from "react";

import PatientHistory from "./components/PatientHistory";
import ReminderSystem from "./components/ReminderSystem";
import PatientFeedback from "./components/FeedbackSystem";
import PatientProfile from "./components/PatientProfile";
import AddHistory from "./components/History";
import './styles/styles.css';


function App() {
  
  return (
    <div className="app-container">
      <h1>Medical Tracking System</h1>
      <PatientHistory/>
      <ReminderSystem/>
      <PatientFeedback/>
      <AddHistory/>
      <PatientProfile/>
    </div>
  );
}

export default App;


