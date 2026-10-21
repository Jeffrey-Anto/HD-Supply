import '../App.css'
function AttendeeList({attendee, deleteAttendee}){

    return(
        <div>
            {attendee.map((student, index)=>{
                
                return(
                    <div key={index}>
                        <p>{student.name}</p>
                        <button onClick={()=> deleteAttendee(student.id)}>Cancel</button>
                        <hr />
                    </div>
                );
            }
              
            )}
        </div>
    )
}
export default AttendeeList;