import React from 'react'
import { Link } from 'react-router-dom';

export default function Events() {
    const EVENTS = [
        { id: 1, title: 'Event A' },
        { id: 2, title: 'Event B' },
        { id: 3, title: 'Event C' },
        { id: 4, title: 'Event D' },
    ];

    return (
        <div>
            <h1>Events</h1>
            <Link to='/event/new'>Add New Event</Link>
            <ul>
                {EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={`/event/${event.id}`}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
