import React, { useState } from 'react';
import ReactDOM from 'react-dom';
console.log(React);
console.log(ReactDOM);


const width = 960;
const height = 500;

const circleradius = 50;
const initialMousePosition = {
  x: width / 2,
  y: height / 2,
};

const handleMouseMove = (event) => {
  const { clientX, clientY } = event;
  console.log({ clientX, clientY });
};

const App = () => {
  const [mousePositon, setMousePosition] = useState(
    initialMousePosition,
  );
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
    console.log({ x: clientX, y: clientY });
  };

  return (
    <svg
      width={width}
      height={height}
      onMouseMove={handleMouseMove}
    >
      <circle
        cx={mousePositon.x}
        cy={mousePositon.y}
        r={circleradius}
      />
    </svg>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
