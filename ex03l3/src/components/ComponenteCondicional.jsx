import React from 'react';

const ComponenteCondicional = ({ isVisible }) => {
  return (
    <div>
      {isVisible ? (
        <p>O parágrafo está visível porque isVisible é true!</p>
      ) : (
        <p>O parágrafo não está visível.</p>
      )}
    </div>
  );
};

export default ComponenteCondicional;
