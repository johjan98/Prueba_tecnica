import './App.css';
import { useFibonacci } from './hooks/useFibonacci';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
