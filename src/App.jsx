import FloatingButton from "./components/FloatingButton/FloatingButton";
import './App.css'

function App({user_id}) {
  return (
    <div className="widget">
      <div className="widget-button">
        <FloatingButton user_id = {user_id} />
      </div>
    </div>
  );
}

export default App;
