import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Use environment variables for security
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Test() {
  const [mydata, setMydata] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data, error } = await supabase.from("countries").select();
      if (error) {
        throw error;
      }
      setMydata(data);
    } catch (error) {
      setError(error.message);
    }
  }
  console.log(mydata);
  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {mydata.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
