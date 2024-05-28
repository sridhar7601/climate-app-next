import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const city = process.env.CITY_NAME; // Replace with your desired city name

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching geocoded data", error);
    return new Response("Error fetching geocoded data", { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};