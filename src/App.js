import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);

  return (
    <div className="App">
     <div>{ users.map(user => (<div>{ user.name }</div>)) }</div>
    </div>
  );
}

export default App;
