
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';

const PatientFeedback = ()=>{

  const [feedback , setFeedback] = useState({
    patientName:"",
    medicationTaken: false,
    sideEffect:"",
    medication:"",
    dosage:"",
    frequency:"",
    lastTaken:"",
  })

  const handleChange = (e)=>{
    const {name , type , value , checked} = e.target;
    setFeedback({
      ...feedback,
        [name] : type === 'checkbox' ? checked : value,
    })
  }

const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    await addDoc (collection(db,'feedback'),feedback);
    alert("FeedBack is submitted")
    setFeedback({
      patientName:"",
      medicationTaken: false,
      sideEffect:"",
      medication:"",
      dosage:"",
      frequency:"",
      lastTaken:"",
    })
  }
  catch(error){
    alert("Error submitting feedback: ",error);
  }
}

  return (
    <div className="section feedback-form">
      <h2>Patient Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input type="text" name="patientName" value={feedback.patientName} onChange={handleChange} required />
        </label>
        <label>
          Medication Taken:
          <input type="checkbox" name="medicationTaken" checked={feedback.medicationTaken} onChange={handleChange} />
        </label>
        <label>
          Side Effect:
          <textarea name="sideEffect" value={feedback.sideEffect} onChange={handleChange} />

        </label>   <label>
          Medication 
          <input type="text" name="medication" value={feedback.medication} onChange={handleChange} />
        </label> <label>
          Dosage:<br/>
          <input type="text" name="dosage" value={feedback.dosage} onChange={handleChange} />

        </label>  <label>
          Frequncy:<br/>
          <input  type="number" name="frequency" value={feedback.frequency} onChange={handleChange} />

        </label>  <label>
          Last taken:<br/>
          <input   type="text" name="lastTaken" value={feedback.lastTaken} onChange={handleChange} />

        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};
  
export default PatientFeedback;
