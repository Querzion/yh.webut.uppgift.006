import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EventCard from '../components/EventCard'

const Events = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch('https://api.example.com/events')
        
        if (res.ok) {
            const data = await res.json()
            setEvents(data)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            <h2>Events</h2>
            {
                events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))
            }
        </div>
    )
}

export default Events