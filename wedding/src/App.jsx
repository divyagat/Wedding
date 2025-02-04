import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import Dashboard from './dashboard/Dashboard';
import Wedding from './pages/Wedding';


function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>

      <Dashboard />
      <Wedding/>

    </>
  );
}

export default App;
