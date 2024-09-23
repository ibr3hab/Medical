
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';

const ReminderSystem = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchReminders = async () => {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const remindersData = querySnapshot.docs.map(doc => doc.data());
      const generatedReminders = remindersData.map(prescription => {
        const nextDoseTime = calculateNextDose(prescription); 
        return {
          message: `Take ${prescription.medication} - ${prescription.dosage}`,
          time: nextDoseTime,
        };
      });

      setReminders(generatedReminders);
    };

    fetchReminders();
  }, []);

 
  const calculateNextDose = (prescription) => {
    const { dosage, frequency, lastTaken } = prescription;
    const nextDose = new Date(lastTaken); 
    nextDose.setHours(nextDose.getHours() + frequency); 
    console.log(nextDose);
    return nextDose.toLocaleString();
  };

  return (
    <div className="section reminder-section">
      <h2>Reminders</h2>
      {reminders.length > 0 ? (
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              {reminder.message} at {reminder.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reminders available.</p>
      )}
    </div>
  );
};

export default ReminderSystem;
