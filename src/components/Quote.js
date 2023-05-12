import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import './css/Quote.css';

const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=';
const API_KEY = '5Mkq9zqFuG8L7WItA+cbfw==TzJclNtQ7MnlRbxq';

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const category = 'history';
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}${category}`, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        if (!response.ok) {
          setHasError(true);
        } else {
          const responseData = await response.json();
          setData(responseData);
        }
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div data-testid="quote">Something went wrong!</div>;

  if (isLoading) {
    return (
      <div data-testid="quote" className="cont-loader-msg">
        Loading...
        <Loader />
      </div>
    );
  }

  return (
    <article data-testid="quote" className="cont-quote">
      {data.length > 0 ? (
        <>
          <p className="p-quote">{`"${data[0].quote}"`}</p>
          <p className="p-author">
            <strong>Author: </strong>
            {data[0].author}
          </p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </article>
  );
};

export default Quote;
