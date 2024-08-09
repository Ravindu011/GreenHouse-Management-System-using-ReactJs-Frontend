// src/components/TemperatureHumidity.js

import React, { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { database } from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';

const TemperatureHumidity = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const tempRef = ref(database, 'temperature');
    const humidityRef = ref(database, 'humidity');

    const unsubscribeTemp = onValue(tempRef, (snapshot) => {
      const temp = snapshot.val();
      setTemperature(temp);
    });

    const unsubscribeHumidity = onValue(humidityRef, (snapshot) => {
      const hum = snapshot.val();
      setHumidity(hum);
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeTemp();
      unsubscribeHumidity();
    };
  }, []);

  return (
    <div>
      <h1>Real-time Temperature and Humidity</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className='TempCard'>
          <h2>Temperature</h2>
          {temperature !== null ? (
            <GaugeChart
              id="temperature-gauge"
              nrOfLevels={30}
              percent={temperature / 100}
              textColor="#000000"
              needleColor="#345243"
              colors={['#5FD8FF', '#FFC371']}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className='TempCard'>
          <h2>Humidity</h2>
          {humidity !== null ? (
            <GaugeChart
              id="humidity-gauge"
              nrOfLevels={30}
              percent={humidity / 100}
              textColor="#000000"
              needleColor="#345243"
              colors={['#5F6AFF', '#71FFB8']}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemperatureHumidity;
