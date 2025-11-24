
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) { 
  const supabase = await createClient();
  const data = await supabase.from('nextjsnews').select("text")
  console.log(data.data?.[0]?.text);
  
  return new Response(JSON.stringify(data.data));
}