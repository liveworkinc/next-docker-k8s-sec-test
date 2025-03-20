import { NextResponse } from "next/server";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

let users: User[] = [
  { id: 1, name: "Aymen", email: "aymen@example.com", role: "Admin" },
  { id: 2, name: "Aminata", email: "aminata@example.com", role: "User" },
  { id: 3, name: "Elise", email: "elise@example.com", role: "User" },
];

export async function GET() {
  return NextResponse.json(users);
}
