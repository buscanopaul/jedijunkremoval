import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://nrmznxltimfylxxvkitg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ybXpueGx0aW1meWx4eHZraXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MjM0MDEsImV4cCI6MjAyMDI5OTQwMX0.IfXzLEHhxCbYjfTRK8XhMp3KiF4hQBZhZ_4J79b5JQ8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
