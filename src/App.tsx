import { useEffect, useState } from 'react'

import { Ticket } from './interfaces/ticket'
import { TicketList } from './components/TicketList'
import { SortingPanel } from './components/SortingPanel'

import './App.scss'

function App() {
  const [ticketList, setTicketList] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);

  useEffect(() => {
    fetch('../public/tickets.json')
      .then(response => response.json())
      .then(data => {
        setTicketList(data.tickets);
        setFilteredTickets(data.tickets);
      })
  }, [])

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredTickets(ticketList);
    } else {
      setFilteredTickets(
        ticketList.filter(ticket =>
          selectedFilters.includes(ticket.stops)
        )
      );
    }
  }, [selectedFilters, ticketList]);

  return (
    <>
      <SortingPanel selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <TicketList ticketList={filteredTickets} />
    </>
  )
}

export default App
