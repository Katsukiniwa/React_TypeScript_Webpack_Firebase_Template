import React, { useEffect } from 'react';

export const AboutPage = () => {
  useEffect(() => {
    console.log('about');
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
