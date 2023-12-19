// Mengimpor fungsi createRouteHandlerClient dari paket @supabase/auth-helpers-nextjs
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// Mengimpor fungsi cookies dari modul next/headers
import { cookies } from "next/headers";
// Mengimpor tipe NextRequest dan NextResponse dari modul next/server
import { NextRequest, NextResponse } from "next/server";

// Membuat fungsi GET yang menerima parameter req bertipe NextRequest
export async function GET(req: NextRequest) {
  // Membuat variabel cookieStore yang menyimpan hasil dari fungsi cookies()
  const cookieStore = cookies();
  // Membuat variabel supabase yang menyimpan hasil dari fungsi createRouteHandlerClient dengan parameter { cookies: () => cookieStore }
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  // Membuat variabel searchParams yang menyimpan properti searchParams dari objek URL yang dibuat dari req.url
  const { searchParams } = new URL(req.url);

  // Membuat variabel code yang menyimpan nilai dari query parameter "code" dari searchParams
  const code = searchParams.get("code");

  // Jika code ada, maka memanggil fungsi supabase.auth.exchangeCodeForSession dengan parameter code
  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Mengembalikan NextResponse.redirect ke URL "/watch-list" yang dibuat dari req.url
  return NextResponse.redirect(new URL("/watch-list", req.url));
}
