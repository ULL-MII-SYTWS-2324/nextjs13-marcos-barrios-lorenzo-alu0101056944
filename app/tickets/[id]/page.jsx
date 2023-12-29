async function getTicket(id) {
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

export default async function TicketView({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h1>{ticket.title}</h1>
      </nav>
      <div className="card">
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body.slice(0, 200)}...</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
};