import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import PlayerList from './components/PlayerList/PlayerList';

function App() {
  return (
    <div>
      <Header></Header>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;
