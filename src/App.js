import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ temperature: '--', humidity: '--' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.190:5001/data'); // server IP and port
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Fetch data every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/backgroundimage.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur"></div>
      <div className="relative z-10 text-center p-4 sm:p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-white">Weather Monitoring System</h1>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 items-center justify-center">
          <div className="bg-white bg-opacity-60 backdrop-blur-lg p-4 sm:p-8 rounded-lg shadow-lg w-64 sm:w-72 h-48 flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">Temperature</h2>
            <p className="text-3xl sm:text-4xl">{data.temperature}°C</p>
          </div>
          <div className="bg-white bg-opacity-60 backdrop-blur-lg p-4 sm:p-8 rounded-lg shadow-lg w-64 sm:w-72 h-48 flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">Humidity</h2>
            <p className="text-3xl sm:text-4xl">{data.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;