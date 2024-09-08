import { createClient } from "@supabase/supabase-js";
const supabaseUrl= 'https://mhhjnpitvyxbhndxsmue.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaGpucGl0dnl4YmhuZHhzbXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMzA5ODYsImV4cCI6MjA0MDgwNjk4Nn0.jgKVtPC8znPlaxhQ9jlsFNYdYRAq1LQuwZQDzDN5UwE';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;