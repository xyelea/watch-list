// Mengimpor fungsi createRouteHandlerClient dari paket @supabase/auth-helpers-nextjs
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// Mengimpor fungsi cookies dari modul next/headers
import { cookies } from "next/headers";
// Mengimpor tipe NextResponse dari modul next/server
import { NextResponse } from "next/server";

// Membuat fungsi POST yang menerima parameter req bertipe Request dan res bertipe Response
export async function POST(req: Request, res: Response) {
  // Membuat variabel cookieStore yang menyimpan hasil dari fungsi cookies()
  const cookieStore = cookies();
  // Membuat variabel supabase yang menyimpan hasil dari fungsi createRouteHandlerClient dengan parameter { cookies: () => cookieStore }
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  // Menggunakan destrukturisasi untuk mengekstrak properti session dari objek data yang dikembalikan oleh fungsi supabase.auth.getSession()
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Jika session ada, maka memanggil fungsi supabase.auth.signOut untuk mengakhiri sesi pengguna
  if (session) {
    await supabase.auth.signOut();
  }

  // Mengembalikan NextResponse.redirect ke URL "/" yang dibuat dari req.url, dengan status 302
  return NextResponse.redirect(new URL("/", req.url), { status: 302 });
}
