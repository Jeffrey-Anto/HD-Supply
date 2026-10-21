import '../App.css'
function AttendeeList({attendee, deleteAttendee}){

    return(
        <div className='container'>
            <h2 className='listheading'>Attendee Details</h2>
            {attendee.map((student, index)=>{
                
                return(
                    <div key={index} className='student-list'>
                        <div>
                            <p>{student.name}</p>
                        </div>
                        <div>
                            <button onClick={()=> deleteAttendee(student.id)}>Cancel</button>
                        </div>
                       
                    </div>
                );
            }
              
            )}
        </div>
    )
}
export default AttendeeList;