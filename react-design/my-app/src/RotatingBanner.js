import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function Banner({ item, currentIndex }) {
    return (
      <div>
        <h1>{item}</h1>
      </div>
    );
  }
  function PrevButton() {
    return (
      <div>
        <button>Prev</button>
      </div>
    );
  }
  function Indicators({ count, currentIndex }) {
    let buttons = [];
    for (let i = 0; i < count; i++) {
      buttons.push(
        <button
          style={{ backgroundColor: currentIndex === i ? 'lightblue' : '' }}>
          {i}
        </button>
      );
    }
    return <div>{buttons}</div>;
  }
  function NextButton() {
    return (
      <div>
        <button>Next</button>
      </div>
    );
  }
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} currentIndex={currentIndex} />
      <NextButton />
    </div>
  );
}
