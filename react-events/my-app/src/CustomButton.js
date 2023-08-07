export default function CustomButton({ text, color, onClick }) {
  function handleCustomClick() {
    alert(`clicked ${color} ${text}`);
  }

  return (
    <button onClick={handleCustomClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
