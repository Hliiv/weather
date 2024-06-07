import { useState } from "react"
function NewLocation(addLocation) {
    const [NewLocation, setNewLocation] = useState('');
    return (
        <div>
            <h1>New Location</h1>
            <div>
                <input
                    value={NewLocation}
                    onClick={(event) =>

                        setNewLocation(event.target.value)}
                />
            </div>
            <button onClick={()=> {addLocation(NewLocation)
                setNewLocation=('')
            }} className="btn btn-primary mt-2">Add</button>
        </div>
    )

}
export default NewLocation