
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';

const PatientProfile = () => {
  const [profiles, setProfiles] = useState([]);
  
  useEffect(()=>{
    const fetchProfiles = async () =>{
     const querySnapshot = await getDocs(collection(db,'feedback'));
     setProfiles(querySnapshot.docs.map(doc=>doc.data()));
    };
    fetchProfiles();
  }
,[])
 

  return (
    <div className="section patient-profile">
      <h2>Patient Profiles</h2>
      {profiles.length > 0 ? (
        profiles.map((profile, index) => (
          <div key={index}>
            <h3>{profile.patientName}'s Medical Journey</h3>
            <h3>{`${profile.medicationTaken ? 'yes medication taken':'no medication is not taken'}`}</h3>
            <h3>{profile.sideEffect}</h3>
          </div>
        ))
      ) : (
        <p>No patient profiles found.</p>
      )}
    </div>
  );
};

export default PatientProfile;
