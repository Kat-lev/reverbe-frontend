import { apiFetch } from "./client";
import { messages } from "../mockData";

export async function getMessages() {
  try {
    return await apiFetch("/missatges");
  } catch (err) {
    console.warn("Using mock messages — API cannot be reached");
    return messages;
  }
}

