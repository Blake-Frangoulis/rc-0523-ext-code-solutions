export default function RotatingBanner({ items }) {
  function Banner({ item }) {
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
  function Indicators({ count }) {
    return (
      <div>
        {items.map((item, index) => (
          <button>{index + 1}</button>
        ))}
      </div>
    );
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
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators count={items.length} />
      <NextButton />
    </div>
  );
}
