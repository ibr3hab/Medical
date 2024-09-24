import React , {useEffect, useState} from "react";
import { collection , getDocs } from "firebase/firestore";
import {db} from "../Services/firebaseConfig";

const PatientHistory = () =>{

  const [history , setHistory] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(()=>{
    const fetchHistory = async () =>{
      try{
       const querySnapshot = await getDocs(collection(db,'history'));
       setHistory(querySnapshot.docs.map(doc=>doc.data()));
      }catch(err){
        setError("Failed to load");
        console.log("Failed to load the document",err);
      }finally{
        setLoading(true); 
      }
    };
    fetchHistory();
  },[]);

  if(loading){
    <p>...Loading</p>;
  }else if(error){
    <p>{error}</p>;
  }

  return(
    <div className="section history-timeline">
      <h2>Patient's Medical History</h2>
      {history.length >0 ? (
        history.map((event,index)=>(
          <div className="event" key={index}>
            <h3>{event.date}</h3>
            <p>{event.description}</p>
            </div>
        ))
      ):(
        <p>No history available</p>
      )}
    </div>
  );
};

export default PatientHistory;