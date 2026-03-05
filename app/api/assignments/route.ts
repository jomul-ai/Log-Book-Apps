import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* =========================
   GET ALL ASSIGNMENTS
========================= */
export async function GET() {
  try {
    const assignments = await prisma.assignment.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(assignments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch assignments" },
      { status: 500 }
    );
  }
}

/* =========================
   CREATE ASSIGNMENT
========================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const allowedStatus = ["CREATE", "ON_PROCESS", "SUBMITTED"];

    if (!body.title || !body.description || !body.dueDate) {
      return NextResponse.json(
        { message: "Title, description, and dueDate are required" },
        { status: 400 }
      );
    }

    if (body.status && !allowedStatus.includes(body.status)) {
      return NextResponse.json(
        { message: "Invalid status value" },
        { status: 400 }
      );
    }

    const newAssignment = await prisma.assignment.create({
      data: {
        title: body.title,
        description: body.description,
        dueDate: new Date(body.dueDate),
        status: body.status || "CREATE",
      },
    });

    return NextResponse.json(newAssignment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create assignment" },
      { status: 500 }
    );
  }
}