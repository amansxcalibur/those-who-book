import { NextResponse } from "next/server";
import client from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const schedule_id = searchParams.get("sched_id");
    const passenger_id = searchParams.get("pass_id");

    if (!schedule_id || !passenger_id) {
      return NextResponse.json(
        {
          message: "Enter passenger and schedule id",
        },
        {
          status: 400,
        },
      );
    } else {
      let max_seats = await client.query(
        `SELECT num_seats FROM bus NATURAL JOIN schedule WHERE schedule_id=$1`,
        [schedule_id],
      );
      max_seats = max_seats.rows[0]?.num_seats;

      let current_seats = await client.query(
        `SELECT MAX(seat_number) FROM ticket WHERE passenger_id=$1 AND schedule_id=$2`,
        [passenger_id, schedule_id],
      );
      current_seats = current_seats.rows[0]?.max;

      if (current_seats >= max_seats) {
        return NextResponse.json(
          { message: "Seats are full!" },
          { status: 404 },
        );
      }

      const insertResult = await client.query(
        `INSERT INTO ticket (passenger_id, schedule_id, booking_type) VALUES ($1, $2, 'online') RETURNING ticket_id`,
        [passenger_id, schedule_id],
      );

      const ticket = insertResult.rows[0];
      if (!ticket) {
        return NextResponse.json(
          { message: "Ticket creation failed!" },
          { status: 500 }
        );
      }

      const ticket_id = ticket.ticket_id;
      const seat_number = ticket.seat_number;

      // Fetch additional details from passenger and schedule
      const detailsResult = await client.query(
        `SELECT
            p.passenger_id, 
            r.source, 
            r.destination, 
            s.arrival_time, 
            s.departure_time, 
            s.price 
        FROM schedule s
        JOIN route r ON s.route_id = r.route_id
        JOIN passenger p ON p.passenger_id = $1
        WHERE s.schedule_id = $2`,
        [passenger_id, schedule_id]
      );

      const details = detailsResult.rows[0];
      if (!details) {
        return NextResponse.json(
          { message: "Unable to fetch schedule or passenger details!" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: `Successfully created ticket.`,
          ticket: {
            ticket_id,
            passenger_id: details.passenger_id,
            seat_number,
            price: details.price,
            schedule: {
              source: details.source,
              destination: details.destination,
              arrival_time: details.arrival_time,
              departure_time: details.departure_time,
            },
          },
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}
