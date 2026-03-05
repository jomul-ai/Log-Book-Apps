import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/* =========================
   GET DETAIL
========================= */
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const assignment = await prisma.assignment.findUnique({
      where: { id: params.id },
    });

    if (!assignment) {
      return NextResponse.json(
        { message: "Assignment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(assignment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error retrieving assignment" },
      { status: 500 }
    );
  }
}

/* =========================
   UPDATE
========================= */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const allowedStatus = ["CREATE", "ON_PROCESS", "SUBMITTED"];

    if (body.status && !allowedStatus.includes(body.status)) {
      return NextResponse.json(
        { message: "Invalid status value" },
        { status: 400 }
      );
    }

    const updated = await prisma.assignment.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        dueDate: body.dueDate
          ? new Date(body.dueDate)
          : undefined,
        status: body.status,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }
}

/* =========================
   DELETE
========================= */
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.assignment.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Assignment deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }
}