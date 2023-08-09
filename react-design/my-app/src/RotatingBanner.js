import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext(event) {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev(event) {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  }

  function handleSelect(index) {
    setCurrentIndex(index);
  }

  function Banner({ item, currentIndex }) {
    return (
      <div>
        <h1>{item}</h1>
      </div>
    );
  }
  function PrevButton({ onPrev }) {
    return (
      <div>
        <button onClick={onPrev}>Prev</button>
      </div>
    );
  }
  function Indicators({ count, currentIndex, onSelect }) {
    let buttons = [];
    for (let i = 0; i < count; i++) {
      buttons.push(
        <button
          onClick={() => onSelect(i)}
          style={{ backgroundColor: currentIndex === i ? 'lightblue' : '' }}>
          {i}
        </button>
      );
    }
    return <div>{buttons}</div>;
  }
  function NextButton({ onNext }) {
    return (
      <div>
        <button onClick={onNext}>Next</button>
      </div>
    );
  }
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrev={handlePrev} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onSelect={handleSelect}
      />
      <NextButton onNext={handleNext} />
    </div>
  );
}
