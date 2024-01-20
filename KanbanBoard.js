import React from "react";
import TicketColumn from "./TicketColumn";
import "./KanbanBoard.css";

function KanbanBoard({ tickets, users, groupingOption, sortOption }) {
  const groupedAndSortedTickets = groupAndSortTickets(
    tickets,
    groupingOption,
    sortOption
  );
  const uniqueGroupValues = getUniqueValues(
    groupedAndSortedTickets,
    groupingOption
  );

  const renderColumns = () => {
    return uniqueGroupValues.map((groupValue) => {
      const filteredTickets = groupedAndSortedTickets.filter(
        (ticket) => getGroupValue(ticket, groupingOption) === groupValue
      );

      const columnData = {
        title: groupValue,
        tickets: filteredTickets.map((ticket) => ({
          id: ticket.id,
          title: ticket.title,
          tag: ticket.tag,
          priority: ticket.priority,
          userId: ticket.userId,
          status: ticket.status,
        })),
      };

      return <TicketColumn key={groupValue} {...columnData} />;
    });
  };

  return <div className="kanban-board">{renderColumns()}</div>;
}

const groupAndSortTickets = (tickets, groupingOption, sortOption) => {
  let groupedTickets = groupTickets(tickets, groupingOption);

  if (sortOption === "priority") {
    groupedTickets = sortTicketsByPriority(groupedTickets);
  } else if (sortOption === "title") {
    groupedTickets = sortTicketsByTitle(groupedTickets);
  }

  return groupedTickets.flat();
};

const groupTickets = (tickets, groupingOption) => {
  return tickets.reduce((grouped, ticket) => {
    const key = getGroupValue(ticket, groupingOption);
    (grouped[key] = grouped[key] || []).push(ticket);
    return grouped;
  }, {});
};

const sortTicketsByPriority = (groupedTickets) => {
  return Object.values(groupedTickets).map((group) =>
    group.sort((a, b) => b.priority - a.priority)
  );
};

const sortTicketsByTitle = (groupedTickets) => {
  return Object.values(groupedTickets).map((group) =>
    group.sort((a, b) => a.title.localeCompare(b.title))
  );
};

const getUniqueValues = (tickets, groupingOption) => {
  return [
    ...new Set(tickets.map((ticket) => getGroupValue(ticket, groupingOption))),
  ];
};

const getGroupValue = (ticket, groupingOption) => {
  switch (groupingOption) {
    case "status":
      return ticket.status;
    case "user":
      return ticket.userId;
    case "priority":
      return ticket.priority;
    default:
      return "";
  }
};

export default KanbanBoard;
