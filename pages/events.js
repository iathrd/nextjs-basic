import { useState } from "react"

function EventList({eventList}) {

    const [events, setEvents] = useState(eventList)


    const fetchSportEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()

        setEvents(data)
    }

    return (
        <>
        <button onClick={fetchSportEvents} >Sport Events</button>
        <h1>List of Events</h1>
        {
            events.map(event => {
                return (
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                    </div>
                )
            })
        }
        </>
    )
}

export default EventList

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/events')
    const data = await response.json()

    return {
        props:{
            eventList:data
        }
    }
}