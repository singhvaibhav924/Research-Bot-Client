import Header from './Components/Header';
import Input from './Components/Input';
import Output from './Components/Output';
import {useState} from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState("i")
  const [output, setOutput] = useState({})
  return (
    <div className="App">
      <Header />
      {page==="i" ?
      <Input setPage = {setPage} setOutput = {setOutput} /> :
      <Output setPage = {setPage} output = {output} />}
    </div>
  );
}

export default App;
