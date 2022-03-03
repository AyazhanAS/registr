
import './App.css';
//import state from "./redux/state"
import data from "./moc-data.json";
import TableHead from './components/headerItem/TableHead';


function App() {
  return (
    <div className="App-container">
      <div className="app__item-wrapper">
        <TableHead state = {data}/>
      

      </div>
    </div>
  );
}

export default App;
