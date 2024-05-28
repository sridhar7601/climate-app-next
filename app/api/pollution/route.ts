import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const lat = process.env.LATITUDE; // Replace with your desired latitude value
    const lon = process.env.LONGITUDE; // Replace with your desired longitude value

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error in getting pollution data ", error);
    return new Response("Error fetching pollution data", { status: 500 });
  }
}

export const config = {
  runtime: "edge",
};