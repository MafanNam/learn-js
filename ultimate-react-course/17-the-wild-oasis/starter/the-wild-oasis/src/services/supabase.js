import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://fyczambbyfmrlnndjtbd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5Y3phbWJieWZtcmxubmRqdGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTU0MzgsImV4cCI6MjAyNDM5MTQzOH0.52bC7lLFbmGL27REaU2FwPAPDlnzFk8Gob6U6UVZsow'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;