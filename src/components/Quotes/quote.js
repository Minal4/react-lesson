import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Quote = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    FetchApi();
  }, []);
  const FetchApi = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip;
        setQuote(advice);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <h1>{quote}</h1>
      <button onClick={FetchApi}>Random Quote</button>
    </div>
  );
};
