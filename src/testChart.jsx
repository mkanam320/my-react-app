import { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import './testTable.css';
import { Chart } from 'react-google-charts';

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
          .select('Year,Revenue,Expenses');
          
  
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
    // Convert the fetched data into an array of arrays
const chartData = mydata.map((data) => [data.Year, data.Revenue,data.Expenses]);
     console.log(chartData);
const header = ['Year', 'Revenue', 'Expenses'];
// Create an object combining the headers and values
const combinedObject = [header, ...chartData];
  console.log(combinedObject);
    return (
      <Chart
        chartType="ColumnChart"
        width="900px"
        height="400px"
        data={combinedObject}
        options={{title: 'Performance'}}
      />
    );
  }
  
  export default Test;
  