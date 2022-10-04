import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/users');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUsersData();
  }, []);
  return <div className='App'></div>;
}

export default App;
