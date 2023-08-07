import { useState } from 'react';

export default function HotButton() {
  const [clicks, setClicks] = useState(1);
  const [color, setColor] = useState('blue');

  function handleClicks() {
    setClicks(clicks + 1);
    if (clicks > 15) {
      setColor('white');
    } else if (clicks <= 15 && clicks > 12) {
      setColor('yellow');
    } else if (clicks <= 12 && clicks > 9) {
      setColor('orange');
    } else if (clicks <= 9 && clicks > 6) {
      setColor('red');
    } else if (clicks <= 6 && clicks > 3) {
      setColor('purple');
    } else {
      setColor('blue');
    }
  }

  return (
    <button onClick={handleClicks} style={{ backgroundColor: color }}>
      Hot Button
    </button>
  );
}
