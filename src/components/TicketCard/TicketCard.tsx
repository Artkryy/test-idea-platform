import { FC } from "react"
import { Ticket } from "../../interfaces/ticket"
import { formatDate, getDayOfWeek, getTransferLabel } from "../../utils/utils";

import './TicketCard.scss'

interface ITicketCardProps {
  ticket: Ticket
}

export const TicketCard: FC<ITicketCardProps> = ({ ticket }) => {
  const {
    arrival_date,
    arrival_time,
    carrier,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops
  } = ticket;
  return (
    <article className="card">
      <div className="card__first-wrap">
        <img alt={carrier} />
        <button onClick={() => alert('Хорошего полёта! :)')}>Купить за {price} ₽</button>
      </div>
      <div className="card__second-wrap">
        <div className="card__inner">
          <span className="card__depart-time">{departure_time}</span>
          <span className="card__origin">{origin}, {origin_name}</span>
          <span className="card__depart-date">{formatDate(departure_date)}, {getDayOfWeek(departure_date)}</span>
        </div>
        <div className="card__inner">
          <span className="card__stops">{stops} {getTransferLabel(stops)}</span>
        </div>
        <div className="card__inner">
          <span className="card__arrival-time">{arrival_time}</span>
          <span className="card__destination">{destination_name}, {destination}</span>
          <span className="card__arrival-date">{formatDate(arrival_date)}, {getDayOfWeek(arrival_date)}</span>
        </div>
      </div>
    </article>
  )
}
