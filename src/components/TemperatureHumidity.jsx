// src/components/TemperatureHumidity.js

import React, { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { database } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import './ledControl.css';

const TemperatureHumidity = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const tempRef = ref(database, 'temperature');
    const humidityRef = ref(database, 'humidity');

    const unsubscribeTemp = onValue(tempRef, (snapshot) => {
      const temp = snapshot.val();
      console.log('Temperature:', temp); // Debugging line
      setTemperature(temp);
    }, (error) => {
      console.error('Error fetching temperature data:', error);
    });

    const unsubscribeHumidity = onValue(humidityRef, (snapshot) => {
      const hum = snapshot.val();
      console.log('Humidity:', hum); // Debugging line
      setHumidity(hum);
    }, (error) => {
      console.error('Error fetching humidity data:', error);
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeTemp();
      unsubscribeHumidity();
    };
  }, []);

  return (
    <div className='ccontainer'>
      <center><h3>Current Temperature & Humidity</h3></center>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className='TempCard'>
          {temperature !== null ? (
            <GaugeChart
              id="temperature-gauge"
              nrOfLevels={30}
              percent={temperature / 100}
              textColor="#000000"
              needleColor="#345243"
              colors={['#5FD8FF', '#FFC371']}
              formatTextValue={() => `${temperature}`}
            />
          ) : (
            <p>Loading...</p>
          )}
          <center><h3>Temperature</h3></center>
        </div>
        <div className='TempCard'>
          {humidity !== null ? (
            <GaugeChart
              id="humidity-gauge"
              nrOfLevels={30}
              percent={humidity / 100}
              textColor="#000000"
              needleColor="#345243"
              colors={['#5F6AFF', '#71FFB8']}
              formatTextValue={() => `${humidity}`}
            />
          ) : (
            <p>Loading...</p>
          )}
          <center><h3>Humidity</h3></center>
        </div>
      </div>
    </div>
  );
};

export default TemperatureHumidity;
