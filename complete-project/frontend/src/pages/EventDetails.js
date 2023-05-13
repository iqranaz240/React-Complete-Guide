import React from 'react';
import { useParams } from 'react-router-dom';

export default function EvenetDetails() {

  const params = useParams();

  return (
    <div>
      <h1>Event Details</h1>
      <h3>{params.eventId}</h3>
      
    </div>
  )
}
