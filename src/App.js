import Kata1 from "./Kata1";
import Kata2 from "./Kata2";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Code Wars Kata Repository</h1>
      <div className="code">
        <Kata1 />
        <Kata2 />
      </div>
    </div>
  );
}
