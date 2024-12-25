import { NextResponse } from "next/server";
import client from "@/lib/db";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const source = searchParams.get("source");
        const destination = searchParams.get("destination");

        console.log("Source:", source, "Destination:", destination);

        if (!source || !destination) {
            return NextResponse.json([]);
        }

        const query = `
            SELECT * FROM schedule 
            INNER JOIN bus ON bus.bus_id = schedule.bus_id
            WHERE route_id = (
                SELECT route_id FROM route WHERE source = '${source}' AND destination = '${destination}'
            )
        `;
        const result = await client.query(query);
        console.log("Available schedules:", result.rows);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error("Error fetching schedules:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
