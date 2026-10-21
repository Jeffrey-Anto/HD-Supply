import { useState } from "react";
function AttendeeList({attendee, deleteAttendee}){

    return(
        <div>
            {attendee.map((student, index)=>{
                
                return(
                    <div key={index}>
                        <p>{student.name}</p>
                        <button onClick={(student)=> deleteAttendee(student)}>Delete</button>
                        <hr />
                    </div>
                );
            }
              
            )}
        </div>
    )
}
export default AttendeeList;