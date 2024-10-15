export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}

export function revokeTicket(visitor) {
  visitor["ticketId"] = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null) {
    return "not sold";
  }
  if (!tickets[ticketId]) {
    return "unknown ticket id";
  }
  if (tickets[ticketId] && tickets[ticketId] !== null) {
    console.log(tickets[ticketId]);
    return `sold to ${tickets[ticketId]}`;
  } else {
    return;
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null || tickets[ticketId] === undefined) {
    return "invalid ticket !!!";
  } else {
    return `${tickets[ticketId]}`;
  }
}

export function gtcVersion(visitor) {
  if (visitor.gtc) {
    return visitor?.gtc.version;
  } else {
    return undefined;
  }
}
