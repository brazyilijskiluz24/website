import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import { NextRequest, NextResponse } from 'next/server'

export default NextAuth(authConfig).auth

export async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-request-url', req.url)

  const res = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  // other things

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
