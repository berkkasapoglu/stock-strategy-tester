import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { config } from './contants';

function App() {
  useEffect(() => {
    (async () => {
      const res = await axios.get(config.url + '/report');
      console.log(res);
    })();
  }, []);

  return <></>;
}

export default App;
