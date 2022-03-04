import "./styles.css";

function App() {
  var data = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iphone</li>
        <li>Windows Phone</li>
      </ul>

      <h1>Mobile Manufacturers</h1>
      <ul>
        {data.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
