import { useState } from "react";
import '../App.css'
function AttendeeForm({attendee , addAttendee }){
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");

    const newEntry = {
        id:Date.now(),
        name,
        email,
    }

    function Handle(e){
        e.preventDefault();
        name && addAttendee(newEntry);
    }

    
    
    return(
        <div className="form-container">
            <h2 className="title">Registration Form</h2>
            <form onSubmit={(event)=>Handle(event)}>
                <label key={attendee.id} htmlFor="name">Name</label>
                <input  value={name} id="name" type="text" placeholder="e.g Arun" onChange={(event)=> setName(event.target.value)} />
                <label key={attendee.id} htmlFor="email">Email</label>
                <input id="email" value={email} type="text" placeholder="e.g example@gmail.com" onChange={(event)=>setEmail(event.target.value)} />
                <button className='submit-btn'>Register</button>
            </form>
        </div>
    );
}
export default AttendeeForm;
