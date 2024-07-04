import { NextRequest, NextResponse } from "next/server";
import { validateForm } from "../../_components/utils/sendEmail";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const result = await validateForm(null, formData);
  return NextResponse.json(result);
}
