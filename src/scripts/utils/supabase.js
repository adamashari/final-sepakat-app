/* eslint-disable linebreak-style */
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pqpeabfvquaiggnrwhci.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcGVhYmZ2cXVhaWdnbnJ3aGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyODY4MTksImV4cCI6MjAzMzg2MjgxOX0.8dhmJdkWoCVzIoGSGMJpl84E2D10HcQZnnfvlvDo3r8';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
