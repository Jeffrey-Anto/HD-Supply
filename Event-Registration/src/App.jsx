import { useState } from 'react'
import './App.css'
import AttendeeForm from './components/AttendeeForm.jsx'
import AttendeeList from './components/AttendeeList.jsx';

function App() {
  const[attendee,setAttendee]= useState([
    {
      id : 1,
      name : 'Arun',
      email : 'arun@gmail.com' },
    {
      id : 2,
      name : 'Jeff',
      email : 'jeff@gmail.com' 
    }
]);


function addNewAttendee(newEntry){
  console.log(newEntry);
  setAttendee([...attendee, newEntry])
  
}

function deleteAttendee(student){
  console.log(student.id);
  attendee.filter((attendee)=>attendee.id!==student.id);
}

  return (
    <>
      <AttendeeForm attendee={attendee} addAttendee={addNewAttendee} />
      <AttendeeList attendee={attendee} deleteAttendee={deleteAttendee} />
    </>
  )
}

export default App
