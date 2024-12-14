import { FC } from 'react'
import { TicketCard } from '../TicketCard/TicketCard'
import { Ticket } from '../../interfaces/ticket'

import './TicketList.scss'

interface ITicketListProps {
  ticketList: Ticket[]
}

export const TicketList: FC<ITicketListProps> = ({ ticketList }) => {
  return (
    <ul className='ticket-list list-reset'>
      {ticketList.map((ticket, index) => (
        <li key={index}>
          <TicketCard ticket={ticket} />
        </li>
      ))}
    </ul>
  )
}
