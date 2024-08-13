import React, { useState, useEffect } from 'react';
import { database } from '../firebaseConfig';
import { ref, set, onValue } from 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import './ledControl.css';

const LedControl = () => {
  const [ledState, setLedState] = useState(false);
  const [manualControl, setManualControl] = useState(false);
  const [enteredTemp, setEnteredTemp] = useState('');
  const [currentTemp, setCurrentTemp] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch('http://localhost:8080/firstRowTemp');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const temp = await response.json();
        setEnteredTemp(parseFloat(temp)); // Use API value as enteredTemp
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    fetchTemperature();
    const intervalId = setInterval(fetchTemperature, 10000); // Fetch temperature every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const tempRef = ref(database, 'temperature');
    onValue(tempRef, (snapshot) => {
      setCurrentTemp(snapshot.val());
    });
  }, []);

  useEffect(() => {
    if (!manualControl && currentTemp !== null && enteredTemp !== '') {
      if (currentTemp > enteredTemp) {
        setLedState(false); // Turn off the LED
        set(ref(database, 'ledState'), false);
      } else {
        setLedState(true); // Turn on the LED
        set(ref(database, 'ledState'), true);
      }
    }
  }, [currentTemp, enteredTemp, manualControl]);

  const toggleLed = () => {
    const newLedState = !ledState;
    setLedState(newLedState);
    set(ref(database, 'ledState'), newLedState);
  };

  const handleManualControl = () => {
    setManualControl(!manualControl);
  };

  // Determine the color for the "Need Temperature" text
  const needTempColor = currentTemp !== null && enteredTemp !== '' 
    ? (enteredTemp < currentTemp ? 'orange' : 'green')
    : 'black';

  return (
    <div className='maincontainer'>
      <div className='boolcontainer'>
        <center><h3 style={{ color: needTempColor }}>Current Temperature </h3></center>
        <center><h2 style={{ color: needTempColor }}>{currentTemp} °C</h2></center>
        <center><h3 >Need Temperature </h3></center>
        <center><h2>{enteredTemp} °C</h2></center>
      </div>
      <div className='boolcontainer2' style={{ display: 'flex', alignItems: 'center'}}>
        <span>Enable Manual Control:</span>
        <Switch
          onChange={handleManualControl}
          checked={manualControl}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />

      </div>
      <div className="boolcontainer3">
        
      {manualControl && (
        <button
          onClick={toggleLed}
          className={`${ledState ? 'on' : 'off'} custom-button1`}
          style={{ width: '100%', height: '100%'}}
        >
          <FontAwesomeIcon icon={faFan} size="5x"  />
          <div>{ledState ? 'ON' : 'OFF'}</div>
        </button>
      )}
      </div>

    </div>
  );
};

export default LedControl;
