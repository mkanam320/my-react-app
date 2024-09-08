import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './testTable.css';

// Use environment variables for security
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Test() {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define fetchData as a traditional function expression
  // Use useEffect to call fetchData when the component mounts
  useEffect(function() {
    fetchData();
  }, []);
 
  async function fetchData() {
    try {
      const { data,error } = await supabase
        .from('statement') // Replace with your table name
        .select();

      if (error) throw error;

      setMydata(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(mydata);

  return (
    <div>
      <h1>Data Table</h1>   
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Revenue</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map(function(row) {
            return (
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.Year}</td>
                <td>{row.Revenue}</td>
                <td>{row.Expenses}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
