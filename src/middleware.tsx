import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/jwt";

export async function middleware(request : NextRequest){
    const session = request.cookies.get("session");
    const path = request.nextUrl.pathname;

    if(path === "/log-in" || path === "/sign-up"){
        if(session && session.value){
            return NextResponse.redirect(new URL("/store", request.nextUrl));
        }
    }
    else if(path === "/"){
        if(session && session.value){
            return NextResponse.redirect(new URL("/store", request.nextUrl));
        }
        else{
            return NextResponse.redirect(new URL("/log-in", request.nextUrl));
        }
    }
    else if(path.startsWith("/store")){
        if(!(session && session.value)){
            return NextResponse.redirect(new URL("/log-in", request.nextUrl));
        }
    }

    return await updateSession(request);
}