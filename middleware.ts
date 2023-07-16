import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	console.log("batendo no middleware");
}

export const config = { matcher: ["/login", "/dashboard/:path*"] };
