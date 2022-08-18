import { NextResponse } from 'next/server'

export function middleware(req){
    // console.log("middleware file", req.nextUrl)
    // const response = new NextResponse()

    if (req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.rewrite(new URL('/user/category', req.url))
      }

    // response.cookies.set('auth','appe')
    // response.cookies.set('authi', 'app', {path:'/index'})

    // const cookie = request.cookies.get('auth')
    // console.log(cookie)

    // const cookie2 = response.cookies.getWithOptions('vercel')
    // console.log(cookie2.value)

    // const cookie1 = response.cookies.getWithOptions('authi')
    // console.log(cookie1.value)
    // console.log(cookie1.options)
}