import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware() {
        // You can add custom logic here for specific paths
        // For example, checking if the user belongs to a certain group
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
        pages: {
            signIn: "/login",
        },
    }
);

// Specify which routes should be protected
export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"],
};
