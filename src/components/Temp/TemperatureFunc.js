import React, { useEffect, useState } from 'react';

export const TemperatureFunc = () => {
  const [temp, setTemp] = useState(0);
  const [tempColor, setTempColor] = useState('#000');

  useEffect(() => {
    switch (temp) {
      case 1:
        return setTempColor('#000');
      case 2:
        return setTempColor('#f2f5f8');
      case 3:
        return setTempColor('red');
      default:
    }
  }, [temp]);

  console.log(tempColor, '@colorCHange');
  console.log(temp, '@colorCHange');
  return (
    <div className="d-flex">
      <button className="btn btn-primary" onClick={() => setTemp(temp + 1)}>
        Increment
      </button>
      CounterFunc {`${temp}`}
      <div
        style={{
          transition: '0.3s ease-in-out',
          height: '200px',
          width: 200,
          backgroundColor: `${tempColor}`,
        }}
      ></div>
      <button
        className="btn btn-danger"
        onClick={() => setTemp(temp <= 0 ? 0 : temp - 1)}
      >
        Decrement
      </button>
    </div>
  );
};
