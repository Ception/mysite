import { NextRequest, NextResponse } from "next/server";
import { validateForm } from "../../utils/sendEmail";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const result = await validateForm(null, formData);
  return NextResponse.json(result);
}
