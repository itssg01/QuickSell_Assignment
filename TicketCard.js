import React from 'react';
import './TicketCard.css';

function TicketCard({ id, title, tag, priority, userId, status }) {

  return (
    <div className="ticket-card">
      <div className="ticket-id">Task ID: {id}</div>
      <h3 className="ticket-title">{title}</h3>
      <p className="ticket-priority">Priority: {priority}</p>
      <p className="ticket-user-id">User ID: {userId}</p>
      <p className="ticket-status">Status: {status}</p>
      <div className="ticket-tag">
        {tag}
      </div>
    </div>
  );
}

export default TicketCard;
