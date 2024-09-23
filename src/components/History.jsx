import React,{useState} from "react";
import { collection,addDoc } from "firebase/firestore";
import {db} from "../Services/firebaseConfig";


const AddHistory = () =>{
    const [event, setEvent] = useState({
    date:"",
    description:""
})

const handleChange = (e) =>{
 const {name , value} = e.target;
 setEvent({
    ...event,
    [name]:value,
 });
};

const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        await addDoc(collection(db,'history'),event)
        alert("History Event successfully added");
        setEvent({
            date:"",
            description:""
        });
    }catch(error){
        alert("Error while submitting",error);
    }
};



    return(
        <div className="section addHistory">
        <form onSubmit={handleSubmit}>
        <label>
            Date:<br/>
            <input name="date" type="date" onChange={handleChange} value={event.date} required/>
        </label>
        <label>
            Description:
            <input name="description" type="text" onChange={handleChange} value={event.description} required/>
        </label>
        <button type="submit">Add History</button> 
        </form>
        </div>
    )
}

export default AddHistory;