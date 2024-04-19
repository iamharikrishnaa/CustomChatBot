import FloatingButton from "./components/FloatingButton/FloatingButton";
import './App.css'

function App() {
  const user_id = "deea696a-593c-411a-aa06-d5b906e34402"
  return (
    <div className="widget">
      <div className="widget-button">
        <FloatingButton user_id = {user_id} />
      </div>
    </div>
  );
}

export default App;
