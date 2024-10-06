import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Data = {
  name: string
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
}