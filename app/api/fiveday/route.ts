import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const lat = process.env.LATITUDE; // Replace with your desired latitude value
    const lon = process.env.LONGITUDE; // Replace with your desired longitude value

    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const dailyRes = await fetch(dailyUrl, { next: { revalidate: 3600 } });
    const dailyData = await dailyRes.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.log("Error in getting daily data ", error);
    return new Response("Error in getting daily data ", { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};