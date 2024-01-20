import React from 'react';
import TicketCard from './TicketCard';
import './TicketColumn.css';

function TicketColumn({ title, tickets }) {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          tag={ticket.tag}
          priority={ticket.priority}
          userId={ticket.userId}
          status={ticket.status}
        />
      ))}
    </div>
  );
}

export default TicketColumn;
