import Header from './Components/Header';
import Input from './Components/Input';
import Output from './Components/Output';
import {useState} from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState("i")
  let output = {}
  return (
    <div className="App">
      <Header />
      {page==="i" ?
      <Input setPage = {setPage} output = {output} /> :
      <Output setPage = {setPage} output = {output} />}
    </div>
  );
}

export default App;
