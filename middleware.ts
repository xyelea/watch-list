// Mengimpor fungsi createMiddlewareClient dari paket @supabase/auth-helpers-nextjs
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// Mengimpor tipe NextRequest dan NextResponse dari modul next/server
import { NextRequest, NextResponse } from "next/server";

// Membuat fungsi middleware yang menerima parameter req bertipe NextRequest
export async function middleware(req: NextRequest) {
  // Membuat variabel res yang menyimpan nilai NextResponse.next()
  const res = NextResponse.next();
  // Membuat variabel supabase yang menyimpan hasil dari fungsi createMiddlewareClient dengan parameter { req, res }
  const supabase = createMiddlewareClient({ req, res });

  // Menggunakan destrukturisasi untuk mengekstrak properti user dari objek data yang dikembalikan oleh fungsi supabase.auth.getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Jika user ada dan pathname dari nextUrl adalah "/", maka mengembalikan NextResponse.redirect ke URL "/watch-list"
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/watch-list", req.url));
  }

  // Jika user tidak ada dan pathname dari nextUrl bukan "/", maka mengembalikan NextResponse.redirect ke URL "/"
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Mengembalikan nilai res
  return res;
}

// Mengekspor objek config yang memiliki properti matcher berisi array ["/", "/watch-list"]
export const config = {
  matcher: ["/", "/watch-list"],
};
