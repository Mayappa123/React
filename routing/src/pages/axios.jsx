import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://icanhazdadjoke.com/j/<joke_id>.png");
        const responseData = response.data; 
        setData(responseData.attachments); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 

  return (
    <div>
      <p>Jokes</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosData;
