import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export const GET = (request: NextRequest, { params }: any) => {
	const endPoint = params.kindeAuth;
	return handleAuth(request, endPoint);
};
