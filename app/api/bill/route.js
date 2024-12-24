import { NextResponse } from "next/server";
import client from "@/lib/db";

export async function GET(request){
    try {
        console.log(request.url,'here is the request')
        const { searchParams } = new URL(request.url);
        console.log(searchParams)
        const source = searchParams.get('source')
        console.log("HERE IS THE SOURCE ",source)
        let query;
        if (source==null || source==undefined || source==''){
            query=`SELECT source from route`
        }else{
            query=`SELECT destination FROM route ${source?`WHERE source='${source}'`:''}`
        }
        const result=await client.query(query);
        if (source==null || source==undefined || source==''){
            console.log("source rows ", result.rows.map(row => row.source));
            return NextResponse.json(result.rows.map(row => row.source));
        }else{
            console.log("destination rows ", result.rows.map(row => row.destination));
            return NextResponse.json(result.rows.map(row => row.destination));
        }
    } catch (error) {
        console.log(error);
    }
};