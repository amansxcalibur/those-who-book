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

      await client.query(
        `INSERT INTO ticket (passenger_id, schedule_id, booking_type) VALUES ($1, $2, 'online')`,
        [passenger_id, schedule_id],
      );

      console.log();

      return NextResponse.json(
        {
          message: `Successfully created ticket for passenger id: ${passenger_id} with schedule id: ${schedule_id}`,
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}
